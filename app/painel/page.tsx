import Header from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Package,
  Calendar,
  CreditCard,
  Settings,
  TrendingUp,
  Award,
  Clock,
  Bell,
  Heart,
  Target,
  Activity,
  ChevronRight,
  Star,
  Download,
} from "lucide-react"

export default function Painel() {
  const pedidosRecentes = [
    {
      id: "#001234",
      data: "15/01/2024",
      plano: "Dieta Padrão",
      status: "Entregue",
      valor: "R$ 89,90",
      avaliacao: 5,
    },
    {
      id: "#001235",
      data: "22/01/2024",
      plano: "Dieta Low Carb",
      status: "Em preparo",
      valor: "R$ 99,90",
      avaliacao: null,
    },
    {
      id: "#001236",
      data: "29/01/2024",
      plano: "Dieta Padrão",
      status: "Agendado",
      valor: "R$ 89,90",
      avaliacao: null,
    },
  ]

  const proximasEntregas = [
    {
      data: "Hoje",
      horario: "14:00 - 16:00",
      plano: "Dieta Padrão",
      refeicoes: 5,
    },
    {
      data: "Amanhã",
      horario: "09:00 - 11:00",
      plano: "Low Carb",
      refeicoes: 4,
    },
    {
      data: "Quinta-feira",
      horario: "15:00 - 17:00",
      plano: "Dieta Padrão",
      refeicoes: 5,
    },
  ]

  const metas = [
    {
      titulo: "Peso Atual",
      valor: "68,5 kg",
      meta: "65 kg",
      progresso: 70,
      cor: "from-blue-400 to-blue-500",
    },
    {
      titulo: "Dias de Dieta",
      valor: "28 dias",
      meta: "90 dias",
      progresso: 31,
      cor: "from-green-400 to-green-500",
    },
    {
      titulo: "Refeições Consumidas",
      valor: "140",
      meta: "450",
      progresso: 31,
      cor: "from-purple-400 to-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-100 to-lime-100 relative overflow-hidden">
      <Header />

      <section className="py-16 px-4 relative z-20">
        <div className="container mx-auto max-w-7xl">
          {/* Hero da página */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
              Painel do cliente
            </h1>
            <p className="text-xl text-gray-600">Acompanhe sua jornada nutricional</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar com informações do usuário */}
            <div className="lg:col-span-1 space-y-6">
              {/* Perfil do Usuário */}
              <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Maria Silva</h2>
                  <p className="text-gray-600 text-sm mb-4">maria@email.com</p>
                  <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 text-sm font-semibold mb-4">
                    Cliente Premium
                  </Badge>
                  <div className="text-center">
                    <p className="text-gray-600 text-sm">Membro desde</p>
                    <p className="font-semibold text-gray-800">Janeiro 2024</p>
                  </div>
                </CardContent>
              </Card>

              {/* Menu Rápido */}
              <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-6 text-lg">Menu Rápido</h3>
                  <div className="space-y-2">
                    {[
                      { icon: Package, label: "Meus Pedidos", badge: "3" },
                      { icon: Calendar, label: "Agendar Entrega", badge: null },
                      { icon: CreditCard, label: "Pagamentos", badge: null },
                      { icon: Bell, label: "Notificações", badge: "2" },
                      { icon: Settings, label: "Configurações", badge: null },
                    ].map((item, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full justify-between text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-200 h-12"
                        style={{ cursor: "pointer" }}
                      >
                        <div className="flex items-center">
                          <item.icon className="w-5 h-5 mr-3" />
                          {item.label}
                        </div>
                        <div className="flex items-center gap-2">
                          {item.badge && (
                            <Badge className="bg-red-100 text-red-700 text-xs px-2 py-1">{item.badge}</Badge>
                          )}
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Próximas Entregas */}
              <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <h3 className="font-bold text-gray-800 text-lg">Próximas Entregas</h3>
                  </div>
                  <div className="space-y-3">
                    {proximasEntregas.slice(0, 2).map((entrega, index) => (
                      <div key={index} className="p-6 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-200">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-semibold text-gray-800 text-sm">{entrega.data}</span>
                          <Badge className="bg-blue-100 text-blue-700 text-xs">{entrega.refeicoes} refeições</Badge>
                        </div>
                        <p className="text-gray-600 text-xs">{entrega.horario}</p>
                        <p className="text-gray-700 text-xs font-medium">{entrega.plano}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Conteúdo principal */}
            <div className="lg:col-span-3 space-y-8">
              {/* Cards de Estatísticas */}
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    icon: Package,
                    valor: "12",
                    label: "Pedidos Realizados",
                    cor: "from-blue-400 to-blue-500",
                    crescimento: "+2 este mês",
                  },
                  {
                    icon: TrendingUp,
                    valor: "3,2kg",
                    label: "Peso Perdido",
                    cor: "from-green-400 to-green-500",
                    crescimento: "-0,5kg esta semana",
                  },
                  {
                    icon: Clock,
                    valor: "28",
                    label: "Dias de Dieta",
                    cor: "from-purple-400 to-purple-500",
                    crescimento: "Meta: 90 dias",
                  },
                  {
                    icon: Award,
                    valor: "95%",
                    label: "Meta Atingida",
                    cor: "from-orange-400 to-orange-500",
                    crescimento: "+5% este mês",
                  },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className="bg-white/80 backdrop-blur-lg shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${stat.cor} rounded-lg flex items-center justify-center shadow-md`}
                        >
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="text-3xl font-bold text-gray-800 mb-1">{stat.valor}</div>
                      <div className="text-gray-600 text-sm font-medium mb-2">{stat.label}</div>
                      <div className="text-xs text-green-600 font-medium">{stat.crescimento}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Progresso das Metas */}
              <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      <h3 className="text-2xl font-bold text-gray-800">Progresso das Metas</h3>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-green-200 text-green-600 hover:bg-green-50 bg-transparent hover:text-green-700"
                      style={{ cursor: "pointer" }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Relatório
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {metas.map((meta, index) => (
                      <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-50/50 p-6 rounded-xl">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold text-gray-800">{meta.titulo}</h4>
                          <div
                            className={`w-8 h-8 bg-gradient-to-br ${meta.cor} rounded-lg flex items-center justify-center`}
                          >
                            <Activity className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="font-bold text-gray-800">{meta.valor}</span>
                            <span className="text-gray-600">Meta: {meta.meta}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`bg-gradient-to-r ${meta.cor} h-2 rounded-full transition-all duration-500`}
                              style={{ width: `${meta.progresso}%` }}
                            />
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">{meta.progresso}% da meta atingida</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pedidos Recentes */}
              <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      <h3 className="text-2xl font-bold text-gray-800">Pedidos Recentes</h3>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent hover:text-blue-700"
                      style={{ cursor: "pointer" }}
                    >
                      Ver Todos
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {pedidosRecentes.map((pedido, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center shadow-md">
                            <Package className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800 text-lg">{pedido.id}</div>
                            <div className="text-gray-600 font-medium">{pedido.plano}</div>
                            <div className="text-gray-500 text-sm">{pedido.data}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-800 text-lg mb-2">{pedido.valor}</div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge
                              className={`text-xs font-semibold ${
                                pedido.status === "Entregue"
                                  ? "bg-green-100 text-green-700 border-green-200"
                                  : pedido.status === "Em preparo"
                                    ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                                    : "bg-blue-100 text-blue-700 border-blue-200"
                              }`}
                            >
                              {pedido.status}
                            </Badge>
                          </div>
                          {pedido.avaliacao && (
                            <div className="flex">
                              {[...Array(pedido.avaliacao)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Progresso Nutricional */}
              <Card className="bg-gradient-to-r from-green-500 to-green-600 shadow-xl border-0">
                <CardContent className="p-8 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <h3 className="text-2xl font-bold">Progresso nutricional</h3>
                      </div>
                      <p className="text-green-100 text-lg mb-2">Parabéns! Você está no caminho certo</p>
                      <p className="text-green-200 text-sm mb-6">Mantenha o foco nos seus objetivos</p>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold">28</div>
                          <div className="text-green-200">Dias</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">3,2kg</div>
                          <div className="text-green-200">Perdidos</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">95%</div>
                          <div className="text-green-200">Meta</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Button className="bg-white text-green-600 hover:bg-green-50 font-semibold transition-colors duration-200">
                        Ver Relatório Completo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
