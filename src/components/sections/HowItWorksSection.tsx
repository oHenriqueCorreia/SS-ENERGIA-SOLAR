"use client";
import { motion } from "framer-motion";
import { FileSearch, PenTool, CheckSquare, Wrench, FileCheck, Zap } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      title: "Análise da Conta",
      description: "Estudamos seu consumo atual para dimensionar o sistema ideal.",
      icon: FileSearch,
    },
    {
      id: 2,
      title: "Projeto Personalizado",
      description: "Nossa engenharia elabora o melhor projeto técnico e financeiro.",
      icon: PenTool,
    },
    {
      id: 3,
      title: "Aprovação Técnica",
      description: "Cuidamos de toda a documentação junto à concessionária local.",
      icon: CheckSquare,
    },
    {
      id: 4,
      title: "Instalação Profissional",
      description: "Equipe certificada realiza a montagem de forma rápida e segura.",
      icon: Wrench,
    },
    {
      id: 5,
      title: "Homologação",
      description: "Vistoria e liberação do sistema para início da geração.",
      icon: FileCheck,
    },
    {
      id: 6,
      title: "Início da Economia",
      description: "Seu sistema já está gerando energia limpa e abatendo sua conta.",
      icon: Zap,
    },
  ];

  return (
    <section className="py-24 bg-card/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-6"
          >
            Como Funciona o <span className="text-primary">Processo?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Do primeiro contato até o sistema funcionando, cuidamos de 100% das etapas para sua total comodidade.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 !== 0;

              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative md:flex items-center justify-between group"
                >
                  {/* Left Side */}
                  <div className={`md:w-[45%] ${isEven ? 'md:order-3' : 'md:order-1 text-right'}`}>
                    <div className={`bg-card/40 border border-white/5 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 ${!isEven ? 'md:ml-auto' : ''}`}>
                      <h3 className="text-xl font-heading font-bold mb-2 text-foreground flex items-center gap-3 md:hidden">
                        <span className="text-primary text-sm font-black">0{step.id}.</span>
                        {step.title}
                      </h3>
                      <h3 className="hidden md:block text-xl font-heading font-bold mb-2 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden md:flex md:order-2 absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-background border-4 border-card items-center justify-center z-10 group-hover:border-primary/50 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Right Side (Empty space for alternating) */}
                  <div className={`hidden md:block md:w-[45%] ${isEven ? 'md:order-1 text-right' : 'md:order-3'}`}>
                    <span className="text-6xl font-black text-white/5 group-hover:text-primary/10 transition-colors duration-500 font-heading select-none">
                      0{step.id}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
