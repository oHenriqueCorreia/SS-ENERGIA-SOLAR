import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8" id="contato">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/logo.jpeg" alt="SS Solar" width={56} height={56} className="rounded-lg object-contain" />
              <span className="text-2xl font-heading font-bold tracking-tight">
                SS <span className="text-primary">SOLAR</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando a luz do sol em economia e sustentabilidade para residências e empresas em todo o Brasil.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">Instagram</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">Facebook</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">LinkedIn</Link>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li><Link href="#hero" className="text-muted-foreground hover:text-primary text-sm transition-colors">Início</Link></li>
              <li><Link href="#beneficios" className="text-muted-foreground hover:text-primary text-sm transition-colors">Benefícios</Link></li>
              <li><Link href="#servicos" className="text-muted-foreground hover:text-primary text-sm transition-colors">Serviços</Link></li>
              <li><Link href="#simulador" className="text-muted-foreground hover:text-primary text-sm transition-colors">Simulador</Link></li>
              <li><Link href="#portfolio" className="text-muted-foreground hover:text-primary text-sm transition-colors">Portfólio</Link></li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Nossos Serviços</h3>
            <ul className="space-y-4">
              <li className="text-muted-foreground text-sm">Energia Solar Residencial</li>
              <li className="text-muted-foreground text-sm">Projetos Comerciais</li>
              <li className="text-muted-foreground text-sm">Usinas Industriais</li>
              <li className="text-muted-foreground text-sm">Sistemas Off Grid</li>
              <li className="text-muted-foreground text-sm">Manutenção e Limpeza</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-0.5 shrink-0" size={18} />
                <span className="text-muted-foreground text-sm">Av. Principal, 1000 - Centro<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span className="text-muted-foreground text-sm">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span className="text-muted-foreground text-sm">contato@sssolar.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} SS Solar Energia. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">Política de Privacidade</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
