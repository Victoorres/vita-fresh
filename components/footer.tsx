import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-2xl font-bold">
                Nutro<span className="text-green-500">Bite</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transformando vidas através de uma alimentação saudável e balanceada, com entrega gratuita e qualidade
              premium.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-500">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Nossos Planos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-500">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Dieta Padrão
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Dieta Sem Glúten
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Consultoria Nutricional
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Planos Personalizados
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Acompanhamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-500">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-500" />
                <span className="text-gray-300 text-sm">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-500" />
                <span className="text-gray-300 text-sm">contato@nutrobite.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-green-500 mt-1" />
                <span className="text-gray-300 text-sm">
                  Rua da Saúde, 123
                  <br />
                  São Paulo, SP - 01234-567
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 NutroBite. Todos os direitos reservados. |
            <Link href="#" className="hover:text-green-500 transition-colors ml-1">
              Política de Privacidade
            </Link>{" "}
            |
            <Link href="#" className="hover:text-green-500 transition-colors ml-1">
              Termos de Uso
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
