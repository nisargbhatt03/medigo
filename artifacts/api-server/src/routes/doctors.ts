import { Router } from "express";
import { db, doctorsTable, appointmentsTable, eq, and } from "@workspace/db";

const router = Router();

async function enrichDoctor(d: typeof doctorsTable.$inferSelect, today: string) {
  const appts = await db.select().from(appointmentsTable).where(
    and(eq(appointmentsTable.doctorId, d.id), eq(appointmentsTable.date, today))
  );
  return {
    id: d.id,
    name: d.name,
    specialty: d.specialty,
    qualification: d.qualification,
    cabinNumber: d.cabinNumber,
    status: d.status,
    newCaseFee: d.newCaseFee,
    oldCaseFee: d.oldCaseFee,
    patientsToday: appts.length,
    waitingCount: appts.filter(a => a.status === "waiting").length,
  };
}

router.get("/doctors", async (_req, res): Promise<void> => {
  const doctors = await db.select().from(doctorsTable);
  const today = new Date().toISOString().split("T")[0];
  const result = await Promise.all(doctors.map(d => enrichDoctor(d, today)));
  res.json(result);
});

router.post("/doctors", async (req, res): Promise<void> => {
  const { name, specialty, qualification, cabinNumber, status, newCaseFee, oldCaseFee } = req.body;
  if (!name || !specialty || !qualification || !cabinNumber) {
    res.status(400).json({ error: "name, specialty, qualification, cabinNumber required" });
    return;
  }
  const [doctor] = await db.insert(doctorsTable).values({
    name,
    specialty,
    qualification,
    cabinNumber,
    status: status ?? "available",
    newCaseFee: Number(newCaseFee ?? 1000),
    oldCaseFee: Number(oldCaseFee ?? 400),
  }).returning();
  const today = new Date().toISOString().split("T")[0];
  res.status(201).json(await enrichDoctor(doctor, today));
});

router.get("/doctors/:id", async (req, res): Promise<void> => {
  const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const id = parseInt(rawId, 10);
  const [doctor] = await db.select().from(doctorsTable).where(eq(doctorsTable.id, id));
  if (!doctor) { res.status(404).json({ error: "Doctor not found" }); return; }
  const today = new Date().toISOString().split("T")[0];
  res.json(await enrichDoctor(doctor, today));
});

router.patch("/doctors/:id", async (req, res): Promise<void> => {
  const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const id = parseInt(rawId, 10);
  const { name, specialty, qualification, cabinNumber, status, newCaseFee, oldCaseFee } = req.body;
  const update: Record<string, unknown> = {};
  if (name) update.name = name;
  if (specialty) update.specialty = specialty;
  if (qualification) update.qualification = qualification;
  if (cabinNumber) update.cabinNumber = cabinNumber;
  if (status) update.status = status;
  if (newCaseFee !== undefined) update.newCaseFee = Number(newCaseFee);
  if (oldCaseFee !== undefined) update.oldCaseFee = Number(oldCaseFee);

  const [doctor] = await db.update(doctorsTable).set(update).where(eq(doctorsTable.id, id)).returning();
  if (!doctor) { res.status(404).json({ error: "Doctor not found" }); return; }
  const today = new Date().toISOString().split("T")[0];
  res.json(await enrichDoctor(doctor, today));
});

router.delete("/doctors/:id", async (req, res): Promise<void> => {
  const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const id = parseInt(rawId, 10);
  const [deleted] = await db.delete(doctorsTable).where(eq(doctorsTable.id, id)).returning();
  if (!deleted) { res.status(404).json({ error: "Doctor not found" }); return; }
  res.json({ success: true, id });
});

export default router;
