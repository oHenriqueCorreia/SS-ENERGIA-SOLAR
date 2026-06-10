"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 md:pt-20 pb-20 md:pb-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3 opacity-30" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              O Futuro da Energia
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-foreground">
              Transforme a luz do sol em <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">economia</span> para você.
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Projetos completos de energia solar fotovoltaica com instalação profissional, homologação e suporte especializado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="https://wa.me/5548996136269?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20energia%20solar."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="h-14 px-8 text-base font-semibold shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all">
                  Saber mais <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#simulador">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold border-white/10 hover:bg-white/5">
                  Simular Economia
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Economia de até 95%",
                "Atendimento Especializado",
                "Projeto Personalizado",
                "Energia Limpa"
              ].map((item, index) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-primary h-5 w-5 shrink-0" />
                  <span className="text-sm font-medium text-foreground/90">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent z-10" />
            <Image 
              src="/images/hero.png" 
              alt="Especialistas em Energia Solar" 
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
