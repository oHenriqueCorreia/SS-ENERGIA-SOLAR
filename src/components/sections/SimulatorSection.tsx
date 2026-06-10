"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calculator, ArrowRight, Wallet, Banknote, CalendarDays, TrendingDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  billValue: z.string().min(1, { message: "Digite o valor da sua conta." }),
});

export function SimulatorSection() {
  const [results, setResults] = useState<{ monthly: number; yearly: number; lifetime: number } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      billValue: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const raw = values.billValue.replace(/[^0-9.,]/g, '').replace(',', '.');
    const value = parseFloat(raw);
    if (isNaN(value) || value < 50) {
      form.setError("billValue", { message: "O valor mínimo é R$ 50,00" });
      return;
    }
    const monthlySavings = value * 0.95;
    const yearlySavings = monthlySavings * 12;
    const lifetimeSavings = yearlySavings * 25;

    setResults({
      monthly: monthlySavings,
      yearly: yearlySavings,
      lifetime: lifetimeSavings,
    });
  }

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  return (
    <section id="simulador" className="py-24 bg-card/40 border-y border-white/5 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              Calculadora Interativa
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Descubra quanto você vai <span className="text-primary">economizar</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              O investimento em energia solar oferece um dos melhores retornos financeiros do mercado. Simule agora e surpreenda-se com os valores que deixarão de ir para a concessionária.
            </p>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-background/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
              <div className="space-y-2">
                <Label htmlFor="billValue" className="text-base text-foreground/90">
                  Qual o valor médio da sua conta de luz?
                </Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                  <Input 
                    id="billValue"
                    placeholder="0,00" 
                    className="pl-10 h-14 text-lg bg-card/50 border-white/10 focus-visible:ring-primary" 
                    {...form.register("billValue")} 
                  />
                </div>
                {form.formState.errors.billValue && (
                  <p className="text-sm font-medium text-destructive mt-1">
                    {String(form.formState.errors.billValue.message)}
                  </p>
                )}
              </div>
              <Button type="submit" size="lg" className="w-full h-14 text-base font-semibold shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                Calcular Economia <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>

          {/* Results Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {!results ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full min-h-[400px] border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center text-center p-8 bg-card/10"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Banknote className="w-10 h-10 text-primary opacity-50" />
                  </div>
                  <h3 className="text-xl font-medium text-muted-foreground mb-2">Aguardando valor...</h3>
                  <p className="text-sm text-muted-foreground/60 max-w-sm">Insira o valor da sua conta atual ao lado para ver a mágica acontecer.</p>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[40px] pointer-events-none" />
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <Wallet className="w-6 h-6 text-primary" />
                        <h3 className="text-lg font-medium text-foreground">Sua economia mensal estimada</h3>
                      </div>
                      <div className="text-5xl font-heading font-bold text-primary">
                        {formatCurrency(results.monthly)}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Menos {formatCurrency(results.monthly)} todo mês na sua conta.</p>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-2 gap-6">
                    <Card className="bg-card/40 border-white/5">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <CalendarDays className="w-4 h-4 text-primary" />
                          <h4 className="text-sm font-medium text-muted-foreground">Em 1 Ano</h4>
                        </div>
                        <div className="text-2xl font-bold text-foreground">
                          {formatCurrency(results.yearly)}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/40 border-white/5">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingDown className="w-4 h-4 text-primary" />
                          <h4 className="text-sm font-medium text-muted-foreground">Em 25 Anos</h4>
                        </div>
                        <div className="text-2xl font-bold text-primary">
                          {formatCurrency(results.lifetime)}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground/60">
                      * Valores estimados com base em uma redução média de 95% do consumo. O resultado real depende de fatores técnicos específicos do projeto.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
