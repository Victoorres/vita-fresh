import Header from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Truck, Clock, MapPin, Shield, Thermometer, Recycle, CheckCircle, Star } from "lucide-react"

export default function Entregas() {
  const zonas = [
    { nome: "Zona Sul", tempo: "30-45 min", taxa: "Grátis", cor: "from-blue-400 to-blue-500" },
    { nome: "Zona Norte", tempo: "45-60 min", taxa: "Grátis", cor: "from-green-400 to-green-500" },
    { nome: "Zona Oeste", tempo: "40-55 min", taxa: "Grátis", cor: "from-purple-400 to-purple-500" },
    { nome: "Zona Leste", tempo: "50-65 min", taxa: "Grátis", cor: "from-orange-400 to-orange-500" },
    { nome: "Centro", tempo: "25-40 min", taxa: "Grátis", cor: "from-red-400 to-red-500" },
    { nome: "Grande SP", tempo: "60-90 min", taxa: "R$ 9,90", cor: "from-gray-400 to-gray-500" },
  ]

  const horarios = [
    { horario: "07:00 - 09:00", disponivel: true },
    { horario: "09:00 - 11:00", disponivel: true },
    { horario: "11:00 - 13:00", disponivel: true },
    { horario: "13:00 - 15:00", disponivel: false },
    { horario: "15:00 - 17:00", disponivel: true },
    { horario: "17:00 - 19:00", disponivel: true },
    { horario: "19:00 - 21:00", disponivel: true },
  ]

  const beneficios = [
    {
      icon: Truck,
      titulo: "Logística Inteligente",
      descricao: "Rotas otimizadas e frota própria garantem pontualidade em toda Grande São Paulo",
      cor: "from-blue-400 to-blue-500",
    },
    {
      icon: Shield,
      titulo: "Segurança Alimentar",
      descricao: "Certificação ANVISA, rastreabilidade completa e protocolos rígidos de higiene",
      cor: "from-green-400 to-green-500",
    },
    {
      icon: Thermometer,
      titulo: "Cadeia Fria Controlada",
      descricao: "Veículos refrigerados com monitoramento 24h mantêm temperatura ideal de 2°C a 8°C",
      cor: "from-red-400 to-red-500",
    },
    {
      icon: Recycle,
      titulo: "Impacto Zero",
      descricao: "Embalagens de vidro retornáveis, veículos elétricos e programa de carbono neutro",
      cor: "from-emerald-400 to-emerald-500",
    },
  ]

  const depoimentos = [
    {
      nome: "Ana Silva",
      avaliacao: 5,
      comentario: "Impressionante! 28 dias e nunca houve atraso. As refeições chegam sempre na temperatura perfeita!",
      foto: "https://randomuser.me/api/portraits/women/38.jpg?height=60&width=60",
    },
    {
      nome: "Carlos Santos",
      avaliacao: 5,
      comentario: "As embalagens de vidro fazem toda diferença. Além de sustentável, conserva muito melhor o sabor!",
      foto: "https://randomuser.me/api/portraits/men/99.jpg?height=60&width=60",
    },
    {
      nome: "Maria Oliveira",
      avaliacao: 5,
      comentario: "Entregador sempre educado, uniforme impecável. Sinto segurança total no processo!",
      foto: "https://randomuser.me/api/portraits/women/24.jpg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-100 to-lime-100 relative overflow-hidden">
      <Header />

      {/* Elementos decorativos */}
      <div className="absolute top-32 left-8 w-24 h-24 bg-orange-400 rounded-full opacity-60"></div>
      <div className="absolute top-20 right-12 w-20 h-20 bg-purple-300 rounded-full opacity-60"></div>
      <div className="absolute bottom-40 left-16 w-16 h-16 bg-red-400 rounded-full opacity-60"></div>

      <section className="py-16 px-4 relative z-20">
        <div className="container mx-auto max-w-7xl">
          {/* Hero da página */}
          <div className="text-center mb-22">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent pb-6">
              Entregas VitaFresh
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Logística de precisão suíça encontra sustentabilidade brasileira. Suas refeições chegam no horário
                exato, na temperatura ideal, em <span className="text-orange-500 font-bold">EMBALAGENS DE VIDRO</span>{" "}
                que preservam sabor, nutrientes e cuidam do planeta. Rastreamento em tempo real e garantia de frescor.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>Pontualidade 99,8%</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>Temperatura Controlada</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600 font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>Carbono Neutro</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefícios */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {beneficios.map((beneficio, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-lg shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${beneficio.cor} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <beneficio.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{beneficio.titulo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{beneficio.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Zonas de Entrega */}
            <Card className="bg-white/80 backdrop-blur-lg shadow-2xl border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <MapPin className="w-8 h-8 text-green-500 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-800">Cobertura São Paulo</h2>
                </div>
                <div className="space-y-4">
                  {zonas.map((zona, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-4 h-4 bg-gradient-to-br ${zona.cor} rounded-full`}></div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{zona.nome}</h3>
                          <p className="text-gray-600 text-sm">Tempo médio: {zona.tempo}</p>
                        </div>
                      </div>
                      <Badge
                        className={`${
                          zona.taxa === "Grátis"
                            ? "bg-green-100 text-green-700 border-green-200"
                            : "bg-orange-100 text-orange-700 border-orange-200"
                        } font-semibold`}
                      >
                        {zona.taxa}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-700 text-sm font-medium">
                    🚚 Frota própria com 15 veículos elétricos e refrigerados
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Horários Disponíveis */}
            <Card className="bg-white/80 backdrop-blur-lg shadow-2xl border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <Clock className="w-8 h-8 text-blue-500 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-800">Janelas de Entrega</h2>
                </div>
                <div className="space-y-3">
                  {horarios.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-200 ${
                        item.disponivel
                          ? "bg-green-50 border-green-200 hover:shadow-md"
                          : "bg-gray-50 border-gray-200 opacity-60"
                      }`}
                    >
                      <span className={`font-medium ${item.disponivel ? "text-gray-800" : "text-gray-500"}`}>
                        {item.horario}
                      </span>
                      <Badge
                        className={`${
                          item.disponivel
                            ? "bg-green-100 text-green-700 border-green-300"
                            : "bg-gray-100 text-gray-500 border-gray-300"
                        } text-xs font-semibold`}
                      >
                        {item.disponivel ? "Disponível" : "Lotado"}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-orange-700 text-sm font-medium">⏰ Janela de 2h com notificação 30min antes</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-purple-700 text-sm font-medium">📱 Rastreamento em tempo real via WhatsApp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Como Funciona */}
          <Card className="bg-white/80 backdrop-blur-lg shadow-2xl border-0 mb-16">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                  Jornada da Sua Refeição
                </h2>
                <p className="text-gray-600 text-lg">
                  Do nosso laboratório culinário até sua mesa, com transparência total
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    numero: "1",
                    titulo: "Confirmação Inteligente",
                    descricao: "Sistema automatizado confirma pedido e agenda entrega via WhatsApp e email",
                    cor: "from-blue-400 to-blue-500",
                  },
                  {
                    numero: "2",
                    titulo: "Preparo Madrugada",
                    descricao: "Chefs iniciam preparo às 4h com ingredientes orgânicos entregues na véspera",
                    cor: "from-green-400 to-green-500",
                  },
                  {
                    numero: "3",
                    titulo: "Saída Rastreada",
                    descricao: "Veículo sai com GPS ativo, você recebe link de rastreamento em tempo real",
                    cor: "from-orange-400 to-orange-500",
                  },
                  {
                    numero: "4",
                    titulo: "Entrega Certificada",
                    descricao: "Foto da entrega, QR code de qualidade e coleta de feedback automático",
                    cor: "from-purple-400 to-purple-500",
                  },
                ].map((passo, index) => (
                  <div key={index} className="text-center group">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${passo.cor} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-3xl font-bold text-white">{passo.numero}</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">{passo.titulo}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{passo.descricao}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Depoimentos */}
          <Card className="bg-white/80 backdrop-blur-lg shadow-2xl border-0 mb-16">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                  Experiências Reais
                </h2>
                <p className="text-gray-600 text-lg">
                  Depoimentos verificados de clientes sobre nosso serviço de entrega
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {depoimentos.map((depoimento, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-green-50 to-green-50/50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full overflow-hidden mr-4 shadow-md">
                        <img
                          src={depoimento.foto || "/placeholder.svg"}
                          alt={depoimento.nome}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{depoimento.nome}</h4>
                        <div className="flex">
                          {[...Array(depoimento.avaliacao)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed italic">"{depoimento.comentario}"</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-green-500 to-green-600 shadow-2xl border-0">
            <CardContent className="p-12 text-center text-white">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold mb-6">Experimente Nossa Logística Premium</h2>
                <p className="text-xl mb-8 opacity-90">
                  Primeira entrega com garantia de pontualidade ou próxima refeição grátis. Embalagem sustentável e
                  rastreamento em tempo real inclusos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Testar Primeira Entrega
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 bg-transparent"
                  >
                    Rastrear Pedido
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
