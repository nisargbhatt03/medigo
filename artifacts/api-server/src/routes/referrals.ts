import { Router, type IRouter } from "express";
import { db, referralsTable, patientsTable, doctorsTable } from "@workspace/db";
import { eq, or, and } from "drizzle-orm";

const router: IRouter = Router();

async function enrichReferral(r: typeof referralsTable.$inferSelect) {
  const [patient] = await db.select().from(patientsTable).where(eq(patientsTable.id, r.patientId));
  const [fromDoc] = await db.select().from(doctorsTable).where(eq(doctorsTable.id, r.fromDoctorId));
  const [toDoc] = await db.select().from(doctorsTable).where(eq(doctorsTable.id, r.toDoctorId));
  return {
    id: r.id,
    patientId: r.patientId,
    patientName: patient?.name ?? "Unknown",
    fromDoctorId: r.fromDoctorId,
    fromDoctorName: fromDoc?.name ?? "Unknown",
    toDoctorId: r.toDoctorId,
    toDoctorName: toDoc?.name ?? "Unknown",
    reason: r.reason,
    urgency: r.urgency,
    status: r.status,
    createdAt: r.createdAt.toISOString(),
  };
}

router.get("/referrals", async (req, res): Promise<void> => {
  const { fromDoctorId, toDoctorId } = req.query as { fromDoctorId?: string; toDoctorId?: string };
  let referrals;
  if (fromDoctorId && toDoctorId) {
    referrals = await db.select().from(referralsTable).where(
      or(eq(referralsTable.fromDoctorId, parseInt(fromDoctorId, 10)), eq(referralsTable.toDoctorId, parseInt(toDoctorId, 10)))
    );
  } else if (fromDoctorId) {
    referrals = await db.select().from(referralsTable).where(eq(referralsTable.fromDoctorId, parseInt(fromDoctorId, 10)));
  } else if (toDoctorId) {
    referrals = await db.select().from(referralsTable).where(eq(referralsTable.toDoctorId, parseInt(toDoctorId, 10)));
  } else {
    referrals = await db.select().from(referralsTable);
  }
  const result = await Promise.all(referrals.map(enrichReferral));
  res.json(result);
});

router.post("/referrals", async (req, res): Promise<void> => {
  const { patientId, fromDoctorId, toDoctorId, reason, urgency } = req.body;
  if (!patientId || !fromDoctorId || !toDoctorId || !reason) {
    res.status(400).json({ error: "patientId, fromDoctorId, toDoctorId, reason required" });
    return;
  }
  const [referral] = await db.insert(referralsTable).values({
    patientId: Number(patientId),
    fromDoctorId: Number(fromDoctorId),
    toDoctorId: Number(toDoctorId),
    reason,
    urgency: urgency ?? "normal",
    status: "pending",
  }).returning();
  res.status(201).json(await enrichReferral(referral));
});

export default router;
