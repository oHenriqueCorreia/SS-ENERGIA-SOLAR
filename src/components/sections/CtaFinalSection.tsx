"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaFinalSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card z-0" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072')] opacity-5 mix-blend-overlay z-0" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-background/40 backdrop-blur-md border border-white/10 p-10 md:p-16 rounded-3xl shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 tracking-tight">
            PARE DE PAGAR CARO NA SUA <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">CONTA DE ENERGIA</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Solicite uma análise gratuita agora mesmo e descubra o valor exato que você pode economizar utilizando energia solar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-lg font-bold shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:scale-105 transition-all">
              <MessageCircle className="mr-3 w-6 h-6" />
              FALAR COM UM ESPECIALISTA
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground/60 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Nossos especialistas estão online no WhatsApp.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
