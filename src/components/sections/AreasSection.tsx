"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function AreasSection() {
  const areas = [
    {
      title: "Residências",
      description: "Reduza o custo de vida da sua família e valorize seu imóvel gerando sua própria energia limpa.",
      image: "/images/seg_residencias.jpeg",
    },
    {
      title: "Empresas e Comércio",
      description: "Aumente a lucratividade do seu negócio cortando um dos seus maiores custos fixos mensais.",
      image: "/images/seg_empresas.jpeg",
    },
    {
      title: "Indústrias",
      description: "Soluções robustas em larga escala com alta potência para suprir demandas intensivas de energia.",
      image: "/images/seg_industrias.jpeg",
    },
    {
      title: "Propriedades Rurais",
      description: "Energia independente e confiável para potencializar o agronegócio, irrigação e bombeamento.",
      image: "/images/seg_rurais.jpeg",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-16 md:flex justify-between items-end">
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
              Projetos premium dimensionados especificamente para a sua realidade de consumo e espaço disponível.
            </motion.p>
          </div>
        </div>

        {/* Cinematic 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="relative overflow-hidden group h-[350px] md:h-[420px] cursor-pointer border-white/10 shadow-2xl flex flex-col justify-end rounded-[2rem]">
                <Image 
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 z-0"
                  priority={index < 2}
                />
                
                {/* Degradê mais alto e suave para garantir leitura perfeita */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />
                
                <div className="relative z-20 p-8 md:p-10 flex flex-col justify-end h-full mt-auto">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium max-w-[90%]">
                      {area.description}
                    </p>
                  </div>
                  
                  {/* Ícone sutil que aparece no hover para dar o toque interativo premium */}
                  <div className="absolute right-8 bottom-8 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
