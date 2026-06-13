"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      question: "Quanto posso economizar com energia solar?",
      answer: "Você pode economizar até 90% do valor atual da sua conta de luz. A concessionária continua cobrando apenas a taxa mínima de disponibilidade e impostos obrigatórios."
    },
    {
      question: "Qual o tempo de retorno do investimento (Payback)?",
      answer: "O retorno médio ocorre entre 3 a 5 anos, dependendo da tarifa da sua região e do seu consumo. Considerando que os painéis duram mais de 25 anos, você terá cerca de 20 anos de pura economia."
    },
    {
      question: "O sistema funciona em dias nublados ou chuvosos?",
      answer: "Sim. Os painéis solares geram energia a partir da luminosidade do sol, não do calor. Em dias nublados a geração é menor do que em dias de sol pleno, mas o sistema continua funcionando."
    },
    {
      question: "Qual a vida útil dos equipamentos?",
      answer: "Os equipamentos possuem uma vida útil estimada de 15 a 20 anos."
    },
    {
      question: "O sistema precisa de muita manutenção?",
      answer: "Não. A manutenção é muito baixa, consistindo basicamente na limpeza dos painéis (geralmente de 1 a 2 vezes por ano, dependendo da poeira no local) e uma inspeção visual."
    },
    {
      question: "Posso financiar meu projeto?",
      answer: "Sim! Existem diversas linhas de crédito específicas para energia solar (como Sicoob, Sicredi, Banco do Brasil, Caixa, Bradesco, entre outros) onde o valor da parcela muitas vezes fica equivalente ao valor que você já paga na conta de luz."
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-6"
          >
            Perguntas <span className="text-primary">Frequentes</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Tire suas principais dúvidas sobre o investimento em energia fotovoltaica.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} className="bg-card/30 border border-white/5 rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors">
                <AccordionTrigger className="text-left font-heading font-semibold text-lg hover:no-underline hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
