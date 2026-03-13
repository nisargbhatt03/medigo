import { Router, type IRouter } from "express";
import healthRouter from "./health";
import patientsRouter from "./patients";
import doctorsRouter from "./doctors";
import appointmentsRouter from "./appointments";
import queueRouter from "./queue";
import prescriptionsRouter from "./prescriptions";
import referralsRouter from "./referrals";
import statsRouter from "./stats";

const router: IRouter = Router();

router.use(healthRouter);
router.use(patientsRouter);
router.use(doctorsRouter);
router.use(appointmentsRouter);
router.use(queueRouter);
router.use(prescriptionsRouter);
router.use(referralsRouter);
router.use(statsRouter);

export default router;
