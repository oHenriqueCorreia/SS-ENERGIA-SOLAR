"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Eduardo",
      city: "Ribeirão Preto, SP",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=CE&backgroundColor=0D8ABC&textColor=ffffff",
      text: "A instalação foi super rápida e o resultado já apareceu na primeira conta. Minha conta que era de R$ 850 caiu para a taxa mínima. Recomendo muito o trabalho da SS Solar.",
      rating: 5,
    },
    {
      id: 2,
      name: "Mariana Costa",
      city: "São Paulo, SP",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=MC&backgroundColor=F59E0B&textColor=ffffff",
      text: "Equipe extremamente profissional. Fizeram o projeto para a minha empresa e o retorno está sendo melhor que o esperado. O suporte pós-venda deles é excelente.",
      rating: 5,
    },
    {
      id: 3,
      name: "João Batista",
      city: "Campinas, SP",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=JB&backgroundColor=10B981&textColor=ffffff",
      text: "Coloquei no meu sítio e acabou o problema de queda de energia. A equipe cuidou de toda a papelada com a CPFL, não tive dor de cabeça nenhuma.",
      rating: 5,
    },
    {
      id: 4,
      name: "Roberto Almeida",
      city: "Sorocaba, SP",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=RA&backgroundColor=6366F1&textColor=ffffff",
      text: "Pesquisei muito antes de fechar e a SS Solar me passou mais credibilidade com equipamentos de ponta. Hoje, 2 anos depois, vejo que fiz a melhor escolha.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-card/10 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-6"
          >
            O que dizem nossos <span className="text-primary">Clientes</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            A satisfação de quem já transformou o sol em economia.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="bg-card/40 border-white/5 backdrop-blur-sm relative h-full">
                      <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
                      <CardContent className="p-8">
                        <div className="flex gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-8 italic min-h-[100px]">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                            <Image 
                              src={testimonial.avatar} 
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-heading font-semibold text-foreground">{testimonial.name}</h4>
                            <p className="text-xs text-muted-foreground">{testimonial.city}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static transform-none bg-background/50 border-white/10 hover:bg-primary/20 hover:text-primary transition-colors" />
              <CarouselNext className="static transform-none bg-background/50 border-white/10 hover:bg-primary/20 hover:text-primary transition-colors" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
