"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ServicesSection() {
  const services = [
    "Energia Solar Residencial",
    "Energia Solar Comercial",
    "Energia Solar Industrial",
    "Sistemas On Grid",
    "Sistemas Off Grid",
    "Sistema de Energia Rural",
    "Sistemas Híbridos",
    "Manutenção Preventiva",
    "Limpeza de Painéis",
    "Consultoria Especializada",
    "Homologação de Projetos"
  ];

  return (
    <section id="servicos" className="py-24 bg-card/20 border-y border-white/5 relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-6"
          >
            Soluções <span className="text-primary">Completas</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Oferecemos um portfólio completo de serviços para garantir o melhor desempenho do seu investimento.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]"
            >
              <Card className="bg-background/50 border-white/5 hover:border-primary/30 transition-all duration-300 group h-full">
                <CardContent className="p-5 flex items-center gap-4 h-full">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground/90 group-hover:text-primary transition-colors">{service}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
