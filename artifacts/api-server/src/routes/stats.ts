import { Router } from "express";
import { db, appointmentsTable, doctorsTable, eq } from "@workspace/db";

const router = Router();

router.get("/stats/dashboard", async (_req, res): Promise<void> => {
  const today = new Date().toISOString().split("T")[0];

  const allTodayAppts = await db.select().from(appointmentsTable).where(eq(appointmentsTable.date, today));
  const patientsToday = allTodayAppts.length;
  const queueWaiting = allTodayAppts.filter(a => a.status === "waiting").length;

  const allDoctors = await db.select().from(doctorsTable);
  const doctorsActive = allDoctors.filter(d => d.status === "available" || d.status === "busy").length;

  const revenueToday = patientsToday * 400;

  const patientsPerDoctor = await Promise.all(allDoctors.map(async (d) => {
    const appts = allTodayAppts.filter(a => a.doctorId === d.id);
    return { doctorName: d.name.replace("Dr. ", "").split(" ")[0], count: appts.length };
  }));

  const recentActivity = [
    { message: "Patient registered via AI call - Anjali Sharma", time: "10:23 AM" },
    { message: "Token 102 called - Priya Mehta → Cabin 2", time: "10:35 AM" },
    { message: "Prescription sent to pharmacy - Ramesh Patel", time: "10:48 AM" },
    { message: "New referral: Dr. Shah → Dr. Patel (Cardiology)", time: "11:02 AM" },
    { message: "Walk-in registered - Suresh Mehta", time: "11:15 AM" },
  ];

  res.json({
    patientsToday,
    doctorsActive,
    revenueToday,
    queueWaiting,
    patientsPerDoctor,
    recentActivity,
  });
});

export default router;
