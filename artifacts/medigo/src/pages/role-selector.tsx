import React from "react";
import { Link } from "wouter";
import {
  Shield,
  Stethoscope,
  User,
  MonitorPlay,
  HeartPulse,
} from "lucide-react";
import { motion } from "framer-motion";

export default function RoleSelector() {
  const roles = [
    {
      id: "admin",
      label: "Administrator",
      icon: Shield,
      href: "/admin/dashboard",
      color: "bg-blue-500",
      shadow: "shadow-blue-500/20",
    },
    {
      id: "doctor",
      label: "Doctor",
      icon: Stethoscope,
      href: "/doctor/dashboard",
      color: "bg-teal-500",
      shadow: "shadow-teal-500/20",
    },
    {
      id: "reception",
      label: "Reception",
      icon: MonitorPlay,
      href: "/reception",
      color: "bg-indigo-500",
      shadow: "shadow-indigo-500/20",
    },
    {
      id: "patient",
      label: "Patient App",
      icon: User,
      href: "/patient/home",
      color: "bg-green-500",
      shadow: "shadow-green-500/20",
    },
    {
      id: "queue",
      label: "Queue TV",
      icon: HeartPulse,
      href: "/admin/queue",
      color: "bg-orange-500",
      shadow: "shadow-orange-500/20",
    },
  ];

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/medigo-hero.png`}
          alt="Medigo Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-display font-bold text-3xl shadow-xl shadow-primary/30">
              M
            </div>
            <h1 className="text-6xl font-display font-bold text-white tracking-tight">
              Medigo
            </h1>
          </div>
          <p className="text-xl text-slate-300 font-medium">
            Your Health, Seamlessly Connected
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full"
        >
          {roles.map((role, idx) => (
            <Link key={role.id} href={role.href} className="block">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-3xl cursor-pointer hover:bg-white/15 transition-all duration-300 shadow-xl ${role.shadow} flex flex-col items-center text-center group`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${role.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}
                >
                  <role.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {role.label}
                </h3>
                <div className="w-8 h-1 bg-white/20 rounded-full group-hover:w-12 group-hover:bg-white/50 transition-all duration-300 mt-2"></div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
