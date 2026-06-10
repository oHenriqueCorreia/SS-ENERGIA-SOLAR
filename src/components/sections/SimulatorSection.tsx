"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calculator, ArrowRight, Wallet, Banknote, CalendarDays, TrendingDown, MessageCircle, X, Loader2, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { saveLead } from "@/app/actions/saveLead";

const formSchema = z.object({
  billValue: z.string().min(1, { message: "Digite o valor da sua conta." }),
});

export function SimulatorSection() {
  const [results, setResults] = useState<{ monthly: number; yearly: number; lifetime: number } | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loadingLead, setLoadingLead] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);

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
    const monthlySavings = value * 0.90;
    const yearlySavings = monthlySavings * 12;
    const lifetimeSavings = yearlySavings * 25;

    setResults({
      monthly: monthlySavings,
      yearly: yearlySavings,
      lifetime: lifetimeSavings,
    });

    // Mostra popup após 800ms para o resultado aparecer primeiro
    setTimeout(() => setShowPopup(true), 800);
  }

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!results) return;

    setLoadingLead(true);
    const formData = new FormData(e.currentTarget);
    const nome = formData.get("nome")?.toString() || "";
    const telefone = formData.get("telefone")?.toString() || "";
    
    // Adicionar consumo e economia ao formData para enviar ao server action
    formData.append("consumo", form.getValues().billValue);
    formData.append("economia", formatCurrency(results.monthly));
    
    await saveLead(formData);
    
    setLoadingLead(false);
    setLeadSuccess(true);
    
    const whatsappMsg = `Olá! Simulei minha economia no site e posso economizar ${formatCurrency(results.monthly)} por mês. Meu nome é ${nome}. Gostaria de solicitar um orçamento!`;
    window.open(`https://wa.me/5548996136269?text=${encodeURIComponent(whatsappMsg)}`, "_blank");
    
    setTimeout(() => {
      setShowPopup(false);
      setLeadSuccess(false);
    }, 3000);
  };

  return (
    <section id="simulador" className="py-24 bg-card/40 border-y border-white/5 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Popup de Captura de Lead */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => !loadingLead && setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-card border border-white/10 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                disabled={loadingLead}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-heading font-bold text-center mb-2">
                Quer obter essa economia?
              </h3>
              
              {results && (
                <p className="text-center text-sm mb-6 leading-relaxed">
                  Você pode economizar até <strong className="text-primary">{formatCurrency(results.monthly)}</strong> por mês. Preencha seus dados para solicitar um orçamento!
                </p>
              )}

              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Nome Completo</label>
                  <Input name="nome" required placeholder="Ex: João da Silva" className="bg-background/50 h-11" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">WhatsApp / Telefone</label>
                  <Input name="telefone" required placeholder="(00) 00000-0000" className="bg-background/50 h-11" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">E-mail</label>
                  <Input name="email" type="email" required placeholder="seu@email.com" className="bg-background/50 h-11" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Cidade e Estado</label>
                  <Input name="cidade" required placeholder="Ex: Içara - SC" className="bg-background/50 h-11" />
                </div>

                <Button type="submit" disabled={loadingLead || leadSuccess} size="lg" className="w-full h-12 mt-2 text-sm font-bold gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all">
                  {loadingLead ? (
                    <Loader2 className="w-5 h-5 shrink-0 animate-spin" />
                  ) : leadSuccess ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                  ) : (
                    <MessageCircle className="w-5 h-5 shrink-0" />
                  )}
                  {loadingLead ? "Processando..." : leadSuccess ? "Redirecionando..." : "Receber Orçamento no WhatsApp"}
                </Button>
              </form>

              <button
                onClick={() => setShowPopup(false)}
                className="w-full text-center text-xs text-muted-foreground mt-4 hover:text-foreground transition-colors"
                disabled={loadingLead}
              >
                Agora não, obrigado
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              <Button type="submit" size="lg" className="w-full h-12 md:h-14 text-sm md:text-base font-semibold shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                Enviar dados <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 shrink-0" />
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

                  {/* CTA após resultado */}
                  <button
                    onClick={() => setShowPopup(true)}
                    className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold text-sm hover:bg-[#25D366]/20 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    Solicitar orçamento para obter essa economia
                  </button>
                  
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground/60">
                      * Valores estimados com base em uma redução média de 90% do consumo. O resultado real depende de fatores técnicos específicos do projeto.
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
