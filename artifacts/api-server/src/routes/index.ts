import { Router } from "express";
import healthRouter from "./health.js";
import patientsRouter from "./patients.js";
import doctorsRouter from "./doctors.js";
import appointmentsRouter from "./appointments.js";
import queueRouter from "./queue.js";
import prescriptionsRouter from "./prescriptions.js";
import referralsRouter from "./referrals.js";
import statsRouter from "./stats.js";

const router = Router();

router.use(healthRouter);
router.use(patientsRouter);
router.use(doctorsRouter);
router.use(appointmentsRouter);
router.use(queueRouter);
router.use(prescriptionsRouter);
router.use(referralsRouter);
router.use(statsRouter);

export default router;
