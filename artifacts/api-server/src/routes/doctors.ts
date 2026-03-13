import { Router, type IRouter } from "express";
import { db, doctorsTable, appointmentsTable } from "@workspace/db";
import { eq, and, sql } from "drizzle-orm";

const router: IRouter = Router();

router.get("/doctors", async (_req, res): Promise<void> => {
  const doctors = await db.select().from(doctorsTable);
  const today = new Date().toISOString().split("T")[0];

  const result = await Promise.all(doctors.map(async (d) => {
    const appts = await db.select().from(appointmentsTable).where(
      and(eq(appointmentsTable.doctorId, d.id), eq(appointmentsTable.date, today))
    );
    const waiting = appts.filter(a => a.status === "waiting").length;
    const total = appts.length;
    return {
      id: d.id,
      name: d.name,
      specialty: d.specialty,
      qualification: d.qualification,
      cabinNumber: d.cabinNumber,
      status: d.status,
      patientsToday: total,
      waitingCount: waiting,
    };
  }));

  res.json(result);
});

router.get("/doctors/:id", async (req, res): Promise<void> => {
  const raw = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const id = parseInt(raw, 10);
  const [doctor] = await db.select().from(doctorsTable).where(eq(doctorsTable.id, id));
  if (!doctor) {
    res.status(404).json({ error: "Doctor not found" });
    return;
  }
  res.json({
    id: doctor.id,
    name: doctor.name,
    specialty: doctor.specialty,
    qualification: doctor.qualification,
    cabinNumber: doctor.cabinNumber,
    status: doctor.status,
    patientsToday: 0,
    waitingCount: 0,
  });
});

export default router;
