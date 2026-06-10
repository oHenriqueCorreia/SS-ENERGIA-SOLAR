"use client";
import { motion } from "framer-motion";
import { PiggyBank, TrendingUp, Leaf, Home, Settings2, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function BenefitsSection() {
  const benefits = [
    {
      title: "Economia de até 90%",
      description: "Reduza drasticamente o valor da sua conta de luz logo no primeiro mês após a instalação.",
      icon: PiggyBank,
    },
    {
      title: "Retorno sobre Investimento",
      description: "O sistema se paga em média entre 3 a 5 anos, gerando lucro livre após este período.",
      icon: TrendingUp,
    },
    {
      title: "Sustentabilidade",
      description: "Gere energia limpa e renovável, contribuindo ativamente para a preservação do meio ambiente.",
      icon: Leaf,
    },
    {
      title: "Valorização do Imóvel",
      description: "Propriedades com energia solar sofrem uma valorização imediata no mercado imobiliário.",
      icon: Home,
    },
    {
      title: "Baixa Manutenção",
      description: "Equipamentos de alta durabilidade que necessitam apenas de limpeza periódica simples.",
      icon: Settings2,
    },
    {
      title: "Proteção contra Inflação",
      description: "Fique imune aos constantes aumentos das bandeiras tarifárias das concessionárias de energia.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="beneficios" className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-6"
          >
            Por que investir em <span className="text-primary">Energia Solar?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Descubra as vantagens que fazem da energia fotovoltaica o melhor investimento para o seu futuro financeiro e ambiental.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full bg-card/40 border-white/5 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
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
