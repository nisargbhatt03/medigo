import { Router, type IRouter } from "express";
import { db, appointmentsTable, patientsTable, doctorsTable } from "@workspace/db";
import { eq, and, desc } from "drizzle-orm";

const router: IRouter = Router();

async function enrichAppointment(a: typeof appointmentsTable.$inferSelect) {
  const [patient] = await db.select().from(patientsTable).where(eq(patientsTable.id, a.patientId));
  const [doctor] = await db.select().from(doctorsTable).where(eq(doctorsTable.id, a.doctorId));
  const createdAt = a.createdAt;
  const now = new Date();
  const diffMs = now.getTime() - createdAt.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const waitTime = diffMin > 0 ? `${diffMin} min` : "Just now";
  return {
    id: a.id,
    tokenNumber: a.tokenNumber,
    patientId: a.patientId,
    patientName: patient?.name ?? "Unknown",
    doctorId: a.doctorId,
    doctorName: doctor?.name ?? "Unknown",
    date: a.date,
    timeSlot: a.timeSlot,
    status: a.status,
    caseType: (a as any).caseType ?? "new_case",
    consultationFee: (a as any).caseType === "old_case"
      ? (doctor?.oldCaseFee ?? 400)
      : (doctor?.newCaseFee ?? 1000),
    waitTime: a.status === "waiting" ? waitTime : null,
    createdAt: a.createdAt.toISOString(),
  };
}

router.get("/appointments", async (req, res): Promise<void> => {
  const { date, doctorId, status, patientId } = req.query as {
    date?: string;
    doctorId?: string;
    status?: string;
    patientId?: string;
  };

  const today = new Date().toISOString().split("T")[0];
  const filterDate = date === "today" ? today : date;

  const conditions = [];
  if (filterDate) conditions.push(eq(appointmentsTable.date, filterDate));
  if (doctorId) conditions.push(eq(appointmentsTable.doctorId, parseInt(doctorId, 10)));
  if (status) conditions.push(eq(appointmentsTable.status, status));
  if (patientId) conditions.push(eq(appointmentsTable.patientId, parseInt(patientId, 10)));

  let appts;
  if (conditions.length > 0) {
    appts = await db.select().from(appointmentsTable).where(and(...conditions)).orderBy(appointmentsTable.tokenNumber);
  } else {
    appts = await db.select().from(appointmentsTable).orderBy(desc(appointmentsTable.createdAt));
  }

  const result = await Promise.all(appts.map(enrichAppointment));
  res.json(result);
});

router.post("/appointments", async (req, res): Promise<void> => {
  const { patientId, doctorId, date, timeSlot, caseType } = req.body;
  if (!patientId || !doctorId || !date || !timeSlot) {
    res.status(400).json({ error: "patientId, doctorId, date, timeSlot required" });
    return;
  }

  const today = date === "today" ? new Date().toISOString().split("T")[0] : date;

  const existing = await db.select().from(appointmentsTable).where(eq(appointmentsTable.date, today));
  const tokenNumber = existing.length + 101;

  const [appt] = await db.insert(appointmentsTable).values({
    tokenNumber,
    patientId: Number(patientId),
    doctorId: Number(doctorId),
    date: today,
    timeSlot,
    status: "waiting",
    caseType: caseType ?? "new_case",
  }).returning();

  const result = await enrichAppointment(appt);
  res.status(201).json(result);
});

router.get("/appointments/:id", async (req, res): Promise<void> => {
  const raw = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const id = parseInt(raw, 10);
  const [appt] = await db.select().from(appointmentsTable).where(eq(appointmentsTable.id, id));
  if (!appt) {
    res.status(404).json({ error: "Appointment not found" });
    return;
  }
  res.json(await enrichAppointment(appt));
});

router.patch("/appointments/:id", async (req, res): Promise<void> => {
  const raw = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const id = parseInt(raw, 10);
  const { status, doctorId, timeSlot, caseType } = req.body;
  const update: Record<string, unknown> = {};
  if (status) update.status = status;
  if (doctorId) update.doctorId = Number(doctorId);
  if (timeSlot) update.timeSlot = timeSlot;
  if (caseType) update.caseType = caseType;

  const [appt] = await db.update(appointmentsTable).set(update).where(eq(appointmentsTable.id, id)).returning();
  if (!appt) {
    res.status(404).json({ error: "Appointment not found" });
    return;
  }
  res.json(await enrichAppointment(appt));
});

export default router;
