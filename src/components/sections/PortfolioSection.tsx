"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Zap, TrendingDown } from "lucide-react";

export function PortfolioSection() {
  const projects = [
    {
      id: 1,
      image: "/images/proj_01.jpeg",
      city: "Forquilinha - SC",
      power: "12.5 kWp",
      client: "Raymundo Marcomim",
      savings: "R$ 37.109,00",
    },
    {
      id: 2,
      image: "/images/proj_02.jpeg",
      city: "Forquilinha - SC",
      power: "75.0 kWp",
      client: "Quiosque da Julia",
      savings: "R$ 23.835,00",
    },
    {
      id: 3,
      image: "/images/proj_03.jpeg",
      city: "Içara - SC",
      power: "806 kWh/mês",
      client: "João Lucas",
      savings: "R$ 8.052,85/ano",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-6"
          >
            Projetos <span className="text-primary">Realizados</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Conheça alguns dos nossos casos de sucesso e a economia real gerada para nossos clientes.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-card border border-white/5">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={`Projeto em ${project.city}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary border border-white/10">
                    {project.client}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">{project.city}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background rounded-xl p-3 border border-white/5">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                        <Zap className="w-3 h-3" />
                        <span>Potência</span>
                      </div>
                      <div className="font-heading font-bold text-foreground">
                        {project.power}
                      </div>
                    </div>
                    
                    <div className="bg-primary/10 rounded-xl p-3 border border-primary/20">
                      <div className="flex items-center gap-2 text-xs text-primary mb-1">
                        <TrendingDown className="w-3 h-3" />
                        <span>Economia</span>
                      </div>
                      <div className="font-heading font-bold text-primary">
                        {project.savings}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
