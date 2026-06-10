"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function AreasSection() {
  const [activeTab, setActiveTab] = useState(0);

  const areas = [
    {
      title: "Residências",
      description: "Reduza o custo de vida da sua família e valorize seu imóvel.",
      image: "/images/seg_residencias.jpeg",
    },
    {
      title: "Empresas e Comércio",
      description: "Aumente a lucratividade do seu negócio cortando um dos maiores custos fixos.",
      image: "/images/seg_empresas.jpeg",
    },
    {
      title: "Indústrias",
      description: "Soluções em larga escala com alta potência para demandas intensivas.",
      image: "/images/seg_industrias.jpeg",
    },
    {
      title: "Propriedades Rurais",
      description: "Energia independente para agronegócio, irrigação e bombeamento.",
      image: "/images/seg_rurais.jpeg",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-heading font-black mb-6 tracking-tight"
            >
              Atendemos todos os <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">segmentos</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Projetos dimensionados especificamente para a sua realidade de consumo e espaço disponível.
            </motion.p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Tabs List */}
          <div className="space-y-4">
            {areas.map((area, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setActiveTab(index)}
                className={`p-6 md:p-8 rounded-3xl cursor-pointer transition-all duration-500 border ${
                  activeTab === index 
                    ? "bg-card border-primary/40 shadow-[0_0_40px_rgba(245,158,11,0.1)] scale-[1.02]" 
                    : "bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10 scale-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`text-2xl font-heading font-bold mb-3 transition-colors duration-300 ${
                      activeTab === index ? "text-primary" : "text-foreground"
                    }`}>
                      {area.title}
                    </h3>
                    <p className={`text-base md:text-lg transition-colors duration-300 ${
                      activeTab === index ? "text-muted-foreground" : "text-muted-foreground/50"
                    }`}>
                      {area.description}
                    </p>
                  </div>
                  {/* Indicador de Seleção */}
                  <div className={`w-2 rounded-full transition-all duration-500 ${
                    activeTab === index ? "h-16 bg-primary" : "h-0 bg-transparent"
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Reveal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image 
                  src={areas[activeTab].image}
                  alt={areas[activeTab].title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Degradê ultra suave para dar profundidade premium */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
