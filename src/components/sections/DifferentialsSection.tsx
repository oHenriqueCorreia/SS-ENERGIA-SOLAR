"use client";
import { motion } from "framer-motion";
import { Award, Users, Shield, PenTool, Wrench, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function DifferentialsSection() {
  const differentials = [
    {
      title: "Equipe Especializada",
      description: "Engenheiros e técnicos certificados pelas principais normas do setor.",
      icon: Users,
    },
    {
      title: "Projeto Personalizado",
      description: "Dimensionamento exato baseado no seu histórico de consumo.",
      icon: PenTool,
    },
    {
      title: "Equipamentos Certificados",
      description: "Trabalhamos apenas com marcas globais (Tier 1) e selo INMETRO.",
      icon: Award,
    },
    {
      title: "Instalação Profissional",
      description: "Padrão de excelência na montagem, garantindo segurança e estética.",
      icon: Wrench,
    },
    {
      title: "Garantia Estendida",
      description: "Até 25 anos de garantia de performance dos módulos solares.",
      icon: Shield,
    },
    {
      title: "Suporte Pós-Venda",
      description: "Monitoramento e equipe pronta para atendimento rápido.",
      icon: HeadphonesIcon,
    },
  ];

  return (
    <section className="py-24 bg-card/20 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-6"
          >
            O Padrão <span className="text-primary">SS Solar</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Nossos diferenciais que garantem a entrega de um sistema de alta performance e durabilidade.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full bg-background border-white/5 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="mb-6 flex">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3">{diff.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {diff.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
