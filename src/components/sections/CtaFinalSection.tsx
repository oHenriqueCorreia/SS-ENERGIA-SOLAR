"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { saveLead } from "@/app/actions/saveLead";

export function CtaFinalSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const nome = formData.get("nome")?.toString() || "";
    const telefone = formData.get("telefone")?.toString() || "";
    const consumo = formData.get("consumo")?.toString() || "";
    const cidade = formData.get("cidade")?.toString() || "";
    const horario = formData.get("horario")?.toString() || "";

    // Salva na planilha via Server Action
    await saveLead(formData);

    setLoading(false);
    setSuccess(true);

    // Envia para o WhatsApp
    const msg = `Olá! Gostaria de uma análise para energia solar.%0A%0A*Nome:* ${nome}%0A*Telefone:* ${telefone}%0A*Conta Média:* R$ ${consumo}%0A*Cidade:* ${cidade}%0A*Melhor Horário:* ${horario}`;
    window.open(`https://wa.me/5548996136269?text=${msg}`, "_blank");
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contato">
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card z-0" />
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-background/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 tracking-tight">
            SOLICITE SUA <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">ANÁLISE GRATUITA</span>
          </h2>
          
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Preencha os dados abaixo rapidamente. Nossa equipe irá receber suas respostas, calcular seu potencial de economia e te chamar no WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="text-left bg-card/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/5 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">1. Seu Nome Completo</label>
                <Input name="nome" required placeholder="Ex: João da Silva" className="bg-background border-white/10 h-12" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">2. Seu WhatsApp / Telefone</label>
                <Input name="telefone" required placeholder="(11) 99999-9999" className="bg-background border-white/10 h-12" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">3. Valor médio da sua conta de luz</label>
                <Input name="consumo" required placeholder="Ex: R$ 850,00" className="bg-background border-white/10 h-12" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">4. Sua Cidade e Estado</label>
                <Input name="cidade" required placeholder="Ex: São Paulo - SP" className="bg-background border-white/10 h-12" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-foreground mb-2 block">5. Qual o melhor horário para ligarmos?</label>
                <Input name="horario" required placeholder="Ex: Manhã, ou depois das 18h" className="bg-background border-white/10 h-12" />
              </div>
            </div>
            
            <Button type="submit" disabled={loading} size="lg" className="w-full min-h-[4rem] mt-4 text-sm md:text-lg font-bold shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_35px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2 px-4">
              {loading ? <Loader2 className="animate-spin shrink-0 w-5 h-5" /> : <MessageCircle className="shrink-0 w-5 h-5" />}
              <span className="leading-tight text-center">{loading ? "PROCESSANDO..." : "ENVIAR DADOS E FALAR NO WHATSAPP"}</span>
            </Button>
            
            {success && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="text-green-500 text-sm font-medium text-center mt-4 flex justify-center items-center gap-2"
              >
                <CheckCircle2 size={18} /> Planilha atualizada! Você está sendo redirecionado para o WhatsApp.
              </motion.p>
            )}
          </form>
          
        </motion.div>
      </div>
    </section>
  );
}
