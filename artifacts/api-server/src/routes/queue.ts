import { Router } from "express";
import { db, appointmentsTable, patientsTable, doctorsTable, eq, and } from "@workspace/db";

const router = Router();

router.get("/queue/today", async (_req, res): Promise<void> => {
  const today = new Date().toISOString().split("T")[0];
  const appts = await db.select().from(appointmentsTable)
    .where(and(eq(appointmentsTable.date, today)))
    .orderBy(appointmentsTable.tokenNumber);

  const result = await Promise.all(appts.map(async (a) => {
    const [patient] = await db.select().from(patientsTable).where(eq(patientsTable.id, a.patientId));
    const [doctor] = await db.select().from(doctorsTable).where(eq(doctorsTable.id, a.doctorId));
    return {
      id: a.id,
      tokenNumber: a.tokenNumber,
      patientId: a.patientId,
      patientName: patient?.name ?? "Unknown",
      doctorId: a.doctorId,
      doctorName: doctor?.name ?? "Unknown",
      cabinNumber: doctor?.cabinNumber ?? "N/A",
      status: a.status,
      waitTime: a.status === "waiting" ? "Waiting" : null,
      timeSlot: a.timeSlot,
    };
  }));
  res.json(result);
});

router.post("/queue/call-next", async (req, res): Promise<void> => {
  const { doctorId } = req.body;
  if (!doctorId) {
    res.status(400).json({ error: "doctorId required" });
    return;
  }
  const today = new Date().toISOString().split("T")[0];

  // Mark current in-consultation as completed
  const current = await db.select().from(appointmentsTable).where(
    and(
      eq(appointmentsTable.doctorId, Number(doctorId)),
      eq(appointmentsTable.date, today),
      eq(appointmentsTable.status, "in-consultation")
    )
  );
  if (current.length > 0) {
    await db.update(appointmentsTable)
      .set({ status: "completed" })
      .where(eq(appointmentsTable.id, current[0].id));
  }

  // Find next waiting
  const waiting = await db.select().from(appointmentsTable).where(
    and(
      eq(appointmentsTable.doctorId, Number(doctorId)),
      eq(appointmentsTable.date, today),
      eq(appointmentsTable.status, "waiting")
    )
  );
  waiting.sort((a, b) => a.tokenNumber - b.tokenNumber);

  if (!waiting[0]) {
    res.status(404).json({ error: "No waiting patients" });
    return;
  }

  const [next] = await db.update(appointmentsTable)
    .set({ status: "in-consultation" })
    .where(eq(appointmentsTable.id, waiting[0].id))
    .returning();

  const [patient] = await db.select().from(patientsTable).where(eq(patientsTable.id, next.patientId));
  const [doctor] = await db.select().from(doctorsTable).where(eq(doctorsTable.id, next.doctorId));

  res.json({
    id: next.id,
    tokenNumber: next.tokenNumber,
    patientId: next.patientId,
    patientName: patient?.name ?? "Unknown",
    doctorId: next.doctorId,
    doctorName: doctor?.name ?? "Unknown",
    cabinNumber: doctor?.cabinNumber ?? "N/A",
    status: next.status,
    waitTime: null,
    timeSlot: next.timeSlot,
  });
});

export default router;
