import { Router } from "express";
import { SpecialtyRoutes } from "../module/specialty/specialty.router";
import { AuthRoutes } from "../module/auth/auth.router";
import { UserRoutes } from "../module/user/user.router";
import { DoctorRoutes } from "../module/doctor/doctor.router";
import { scheduleRoutes } from "../module/schedule/schedule.router";
import { DoctorScheduleRoutes } from "../module/doctorSchedule/doctorSchedule.router";
import { AppointmentRoutes } from "../module/appointment/appointment.router";
import { AdminRoutes } from "../module/admin/admin.router";
import { PatientRoutes } from "../module/patient/patient.router";
import { ReviewRoutes } from "../module/review/review.router";
import { PrescriptionRoutes } from "../module/prescription/prescription.route";
import { StatsRoutes } from "../module/stats/stats.route";
import { PaymentRoutes } from "../module/payment/payment.route";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/specialties", SpecialtyRoutes)
router.use("/users", UserRoutes)
router.use("/patients", PatientRoutes)
router.use("/doctors", DoctorRoutes)
router.use("/admins", AdminRoutes)
router.use("/schedules", scheduleRoutes)
router.use("/doctor-schedules", DoctorScheduleRoutes)
router.use("/appointments", AppointmentRoutes)
router.use("/prescriptions", PrescriptionRoutes)
router.use("/reviews", ReviewRoutes)
router.use("/payments", PaymentRoutes)                                                                       
router.use("/stats",StatsRoutes)


export const IndexRoutes = router;