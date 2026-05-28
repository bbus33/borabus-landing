import { Bus, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
                <Bus className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold">BoraBus</span>
            </div>
            <p className="text-gray-400 text-sm">
              Soluções completas em transporte executivo, fretamento corporativo
              e turismo.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contato@borabus.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-semibold mb-4">Links</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="#sobre" className="block hover:text-white transition-colors">
                Sobre
              </a>
              <a href="#servicos" className="block hover:text-white transition-colors">
                Serviços
              </a>
              <a href="#contato" className="block hover:text-white transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} BoraBus. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
