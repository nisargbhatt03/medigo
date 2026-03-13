import { Router, type IRouter } from "express";
import { db, patientsTable } from "@workspace/db";
import { ilike, or } from "drizzle-orm";

const router: IRouter = Router();

router.get("/patients", async (req, res): Promise<void> => {
  const { search } = req.query as { search?: string };
  let patients;
  if (search) {
    patients = await db.select().from(patientsTable).where(
      or(
        ilike(patientsTable.name, `%${search}%`),
        ilike(patientsTable.phone, `%${search}%`)
      )
    );
  } else {
    patients = await db.select().from(patientsTable).orderBy(patientsTable.registeredAt);
  }
  const mapped = patients.map(p => ({
    id: p.id,
    name: p.name,
    age: p.age,
    gender: p.gender,
    bloodGroup: p.bloodGroup ?? undefined,
    phone: p.phone,
    address: p.address ?? undefined,
    registeredAt: p.registeredAt.toISOString(),
  }));
  res.json(mapped);
});

router.post("/patients", async (req, res): Promise<void> => {
  const { name, age, gender, bloodGroup, phone, address } = req.body;
  if (!name || !age || !gender || !phone) {
    res.status(400).json({ error: "name, age, gender, phone are required" });
    return;
  }
  const [patient] = await db.insert(patientsTable).values({ name, age: Number(age), gender, bloodGroup, phone, address }).returning();
  res.status(201).json({
    id: patient.id,
    name: patient.name,
    age: patient.age,
    gender: patient.gender,
    bloodGroup: patient.bloodGroup ?? undefined,
    phone: patient.phone,
    address: patient.address ?? undefined,
    registeredAt: patient.registeredAt.toISOString(),
  });
});

router.get("/patients/:id", async (req, res): Promise<void> => {
  const raw = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const id = parseInt(raw, 10);
  const { eq } = await import("drizzle-orm");
  const [patient] = await db.select().from(patientsTable).where(eq(patientsTable.id, id));
  if (!patient) {
    res.status(404).json({ error: "Patient not found" });
    return;
  }
  res.json({
    id: patient.id,
    name: patient.name,
    age: patient.age,
    gender: patient.gender,
    bloodGroup: patient.bloodGroup ?? undefined,
    phone: patient.phone,
    address: patient.address ?? undefined,
    registeredAt: patient.registeredAt.toISOString(),
  });
});

export default router;
