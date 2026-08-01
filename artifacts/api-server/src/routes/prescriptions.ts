import { Router } from "express";
import { db, prescriptionsTable, patientsTable, doctorsTable, eq } from "@workspace/db";

const router = Router();

async function enrichPrescription(p: typeof prescriptionsTable.$inferSelect) {
  const [patient] = await db.select().from(patientsTable).where(eq(patientsTable.id, p.patientId));
  const [doctor] = await db.select().from(doctorsTable).where(eq(doctorsTable.id, p.doctorId));
  return {
    id: p.id,
    patientId: p.patientId,
    patientName: patient?.name ?? "Unknown",
    doctorId: p.doctorId,
    doctorName: doctor?.name ?? "Unknown",
    appointmentId: p.appointmentId ?? null,
    medicines: p.medicines,
    instructions: p.instructions,
    diagnosis: p.diagnosis,
    sendToPharmacy: p.sendToPharmacy,
    status: p.status,
    createdAt: p.createdAt.toISOString(),
  };
}

router.post("/prescriptions", async (req, res): Promise<void> => {
  const { patientId, doctorId, appointmentId, medicines, instructions, diagnosis, sendToPharmacy } = req.body;
  if (!patientId || !doctorId || !medicines || !diagnosis) {
    res.status(400).json({ error: "patientId, doctorId, medicines, diagnosis required" });
    return;
  }
  const [prescription] = await db.insert(prescriptionsTable).values({
    patientId: Number(patientId),
    doctorId: Number(doctorId),
    appointmentId: appointmentId ? Number(appointmentId) : null,
    medicines,
    instructions: instructions ?? "",
    diagnosis,
    sendToPharmacy: Boolean(sendToPharmacy),
    status: sendToPharmacy ? "sent" : "pending",
  }).returning();

  res.status(201).json(await enrichPrescription(prescription));
});

router.get("/prescriptions/patient/:patientId", async (req, res): Promise<void> => {
  const raw = Array.isArray(req.params.patientId) ? req.params.patientId[0] : req.params.patientId;
  const patientId = parseInt(raw, 10);
  const prescriptions = await db.select().from(prescriptionsTable).where(eq(prescriptionsTable.patientId, patientId));
  const result = await Promise.all(prescriptions.map(enrichPrescription));
  res.json(result);
});

export default router;
