"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent z-10" />
            <Image 
              src="/images/equipe.jpeg" 
              alt="Equipe SS Solar Energia" 
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 left-8 z-20 bg-background/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-sm">
              <div className="text-3xl font-heading font-bold text-primary mb-2">+10 Anos</div>
              <p className="text-sm text-foreground font-medium">De experiência transformando o mercado de energia renovável no Brasil.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Muito mais que painéis, entregamos <span className="text-primary">soluções inteligentes</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A SS Solar Energia nasceu com o propósito de democratizar o acesso à energia limpa. Nossa equipe de engenharia altamente qualificada foca em qualidade, segurança e máxima eficiência em cada projeto entregue.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Compromisso inegociável com a qualidade",
                "Transparência em todas as etapas",
                "Equipamentos de Primeira Linha (Tier 1)",
                "Pós-venda e suporte dedicados"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                  <span className="text-foreground/90 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="h-14 px-8 text-base shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              Conheça Nossa História
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
