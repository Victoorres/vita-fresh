import Header from "@/components/header"
import Hero from "@/components/hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Shield, Leaf, Star, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const beneficios = [
    {
      icon: Users,
      titulo: "Nutricionistas",
      descricao: "Equipe de profissionais qualificados desenvolvendo cada cardápio",
      cor: "from-blue-400 to-blue-500",
    },
    {
      icon: Heart,
      titulo: "Ingredientes Premium",
      descricao: "Selecionamos apenas os melhores ingredientes frescos e orgânicos",
      cor: "from-red-400 to-red-500",
    },
    {
      icon: Shield,
      titulo: "Segurança Alimentar",
      descricao: "Todos os protocolos de higiene e qualidade rigorosamente seguidos",
      cor: "from-green-400 to-green-500",
    },
    {
      icon: Leaf,
      titulo: "Sustentabilidade",
      descricao: "Embalagens de vidro reutilizáveis e ingredientes sustentáveis",
      cor: "from-emerald-400 to-emerald-500",
    },
  ]

  const depoimentos = [
    {
      nome: "Ana Carolina",
      profissao: "Executiva",
      foto: "https://randomuser.me/api/portraits/women/99.jpg?height=80&width=80",
      texto: "Perdi 8kg em 3 meses com o acompanhamento profissional. As refeições são deliciosas!",
      estrelas: 5,
    },
    {
      nome: "Roberto Silva",
      profissao: "Atleta",
      foto: "https://randomuser.me/api/portraits/men/89.jpg?height=80&width=80",
      texto: "A dieta esportiva me ajudou a melhorar minha performance. Recomendo para todos os atletas!",
      estrelas: 5,
    },
    {
      nome: "Maria Santos",
      profissao: "Professora",
      foto: "https://randomuser.me/api/portraits/women/89.jpg?height=80&width=80",
      texto: "Finalmente encontrei uma dieta sem glúten que funciona. Obrigada, VitaFresh!",
      estrelas: 5,
    },
  ]

  const estatisticas = [
    { numero: "5.000+", label: "Clientes Satisfeitos" },
    { numero: "50.000+", label: "Refeições Entregues" },
    { numero: "15+", label: "Nutricionistas" },
    { numero: "98%", label: "Satisfação" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-100 to-lime-100 relative overflow-hidden">
      <Header />
      <Hero />

      {/* Seção de Benefícios */}
      <section className="py-20 px-4 relative z-20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent pb-6">
              Excelência em nutrição
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Combinamos expertise nutricional, ingredientes premium e tecnologia para oferecer a melhor experiência em
              alimentação saudável
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Seção de Estatísticas */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-500 to-green-600 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Números que falam por si</h2>
            <p className="text-green-100 text-lg">A confiança de milhares de clientes em nossa expertise nutricional</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {estatisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.numero}</div>
                <div className="text-green-100 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="py-20 px-4 relative z-20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent pb-6">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Histórias reais de transformação e sucesso com nosso acompanhamento nutricional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-lg shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full overflow-hidden mr-4 shadow-lg">
                      <img
                        src={depoimento.foto || "/placeholder.svg"}
                        alt={depoimento.nome}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{depoimento.nome}</h4>
                      <p className="text-gray-600 text-sm">{depoimento.profissao}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(depoimento.estrelas)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-600 leading-relaxed italic">"{depoimento.texto}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-800 to-gray-900 relative z-20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pronto para transformar sua alimentação?</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Junte-se a milhares de pessoas que já transformaram suas vidas com nosso acompanhamento nutricional
              profissional
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/cardapio">
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-8">
                Ver cardápio
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <Link href="/contato">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-800 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 bg-transparent p-8"
              >
                Falar com nutricionista
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Entrega Gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Acompanhamento Profissional</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Embalagem Sustentável</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
