"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 md:pt-20 pb-16 md:pb-20 overflow-hidden bg-background">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3 opacity-40 mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-yellow-500/5 rounded-full blur-[150px] pointer-events-none translate-y-1/4 -translate-x-1/4 opacity-40 mix-blend-screen" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02] bg-repeat pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-20 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Premium Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(245,158,11,0.05)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium tracking-wide text-primary">O Futuro da Energia</span>
          </motion.div>

          {/* Main Title with Premium Typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.1] tracking-tight mb-6 text-foreground max-w-4xl mx-auto">
            Transforme a luz do sol em{" "}
            <span className="relative whitespace-nowrap">
              <span className="absolute -inset-1 bg-primary/20 blur-xl opacity-50 rounded-lg"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-300 to-primary bg-300% animate-gradient">
                economia
              </span>
            </span>{" "}
            para você.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground/90 mb-10 leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
            Projetos completos de energia solar fotovoltaica com instalação profissional, homologação e suporte especializado de alta performance.
          </p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-14 justify-center w-full sm:w-auto"
          >
            <Link
              href="https://wa.me/5548996136269?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20energia%20solar."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full h-14 px-8 text-base font-semibold shadow-[0_0_30px_rgba(245,158,11,0.25)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:-translate-y-1 transition-all duration-300">
                Saber mais <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#simulador" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full h-14 px-8 text-base font-medium border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                Simular Economia
              </Button>
            </Link>
          </motion.div>

          {/* Premium Features Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto w-full border-t border-white/10 pt-8 mt-4"
          >
            {[
              "Economia de até 90%",
              "Atendimento Especializado",
              "Projeto Personalizado",
              "Energia Limpa"
            ].map((item, index) => (
              <div
                key={item}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                  <CheckCircle2 className="text-primary h-4 w-4 shrink-0" />
                </div>
                <span className="text-sm font-medium text-foreground/80 tracking-wide">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
