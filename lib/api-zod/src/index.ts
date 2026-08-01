export * from "./generated/api";

export type {
  Appointment,
  CallNextBody,
  DashboardStats,
  DashboardStatsPatientsPerDoctorItem,
  DashboardStatsRecentActivityItem,
  Doctor,
  HealthStatus,
  ListAppointmentsParams,
  ListPatientsParams,
  ListReferralsParams,
  Patient,
  Prescription,
  QueueEntry,
  Referral,
} from "./generated/types";

import type {
  CreateAppointmentBody as CreateAppointmentBodyType,
  CreatePatientBody as CreatePatientBodyType,
  CreatePrescriptionBody as CreatePrescriptionBodyType,
  CreateReferralBody as CreateReferralBodyType,
  UpdateAppointmentBody as UpdateAppointmentBodyType,
} from "./generated/types";

export type CreateAppointmentBody = CreateAppointmentBodyType;
export type CreatePatientBody = CreatePatientBodyType;
export type CreatePrescriptionBody = CreatePrescriptionBodyType;
export type CreateReferralBody = CreateReferralBodyType;
export type UpdateAppointmentBody = UpdateAppointmentBodyType;
