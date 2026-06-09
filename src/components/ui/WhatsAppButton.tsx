"use client";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href="https://wa.me/5548996136269?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento%20de%20energia%20solar."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-300 group relative"
      >
        <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-[ping_3s_ease-in-out_infinite] opacity-40"></span>
        <MessageCircle size={28} className="relative z-10" />
      </Link>
    </motion.div>
  );
}
