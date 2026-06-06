"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function AreasSection() {
  const areas = [
    {
      title: "Residências",
      description: "Reduza o custo de vida da sua família e valorize seu imóvel.",
      image: "/images/residential.png",
    },
    {
      title: "Empresas e Comércio",
      description: "Aumente a lucratividade do seu negócio cortando um dos maiores custos fixos.",
      image: "/images/commercial.png",
    },
    {
      title: "Indústrias",
      description: "Soluções em larga escala com alta potência para demandas intensivas.",
      image: "/images/industrial.png",
    },
    {
      title: "Propriedades Rurais",
      description: "Energia independente para agronegócio, irrigação e bombeamento.",
      image: "/images/rural.png",
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
              className="text-3xl md:text-4xl font-heading font-bold mb-6"
            >
              Atendemos todos os <span className="text-primary">segmentos</span>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden bg-card/40 border-white/5 group h-full cursor-pointer">
                <div className="relative h-60 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
                  <Image 
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-6 z-20">
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors">{area.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
