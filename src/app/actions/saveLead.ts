"use server";

import fs from "fs/promises";
import path from "path";

export async function saveLead(formData: FormData) {
  try {
    const nome = formData.get("nome")?.toString() || "";
    const telefone = formData.get("telefone")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const consumo = formData.get("consumo")?.toString() || "";
    const cidade = formData.get("cidade")?.toString() || "";
    const horario = formData.get("horario")?.toString() || "";
    const economia = formData.get("economia")?.toString() || "";
    const data = new Date().toLocaleString("pt-BR");

    const filePath = path.join(process.cwd(), "leads_capturados.csv");
    
    // Check if file exists to write header
    let fileExists = true;
    try {
      await fs.access(filePath);
    } catch {
      fileExists = false;
    }

    const header = "Data,Nome,Telefone,Email,Consumo Mensal (R$),Economia Projetada (R$),Cidade,Melhor Horario\n";
    const row = `"${data}","${nome}","${telefone}","${email}","${consumo}","${economia}","${cidade}","${horario}"\n`;

    if (!fileExists) {
      await fs.writeFile(filePath, header + row, "utf-8");
    } else {
      await fs.appendFile(filePath, row, "utf-8");
    }

    return { success: true };
  } catch (error) {
    console.error("Erro ao salvar lead:", error);
    return { success: false, error: "Falha ao salvar dados na planilha." };
  }
}
