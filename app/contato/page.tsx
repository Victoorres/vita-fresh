import Header from '@/components/header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Users,
  Heart,
  Award,
  CheckCircle,
  UserCheck,
  MessageSquare,
} from 'lucide-react';

export default function Contato() {
  const informacoesContato = [
    {
      icon: Phone,
      titulo: 'Central de Atendimento',
      principal: '(11) 3456-7890',
      secundario: 'WhatsApp: (11) 99999-9999',
      cor: 'from-blue-400 to-blue-500',
    },
    {
      icon: Mail,
      titulo: 'Canais Digitais',
      principal: 'nutricao@vitafresh.com',
      secundario: 'suporte@vitafresh.com',
      cor: 'from-green-400 to-green-500',
    },
    {
      icon: MapPin,
      titulo: 'Centro Culinário',
      principal: 'Rua da Saúde, 123',
      secundario: 'Vila Madalena - São Paulo, SP',
      cor: 'from-purple-400 to-purple-500',
    },
  ];

  const especialidades = [
    {
      icon: Users,
      titulo: 'Consultoria Nutricional CRN',
      descricao: 'Avaliação antropométrica, bioimpedância e plano alimentar personalizado com acompanhamento mensal',
    },
    {
      icon: Heart,
      titulo: 'Acompanhamento Contínuo',
      descricao: 'Monitoramento de resultados, ajustes semanais e suporte psicológico para mudança de hábitos',
    },
    {
      icon: Award,
      titulo: 'Resultados Cientificamente Comprovados',
      descricao: 'Metodologia validada com 94% de sucesso em 6 meses e publicação em revista científica',
    },
  ];

  const faqItems = [
    {
      pergunta: 'Como funciona a primeira consulta nutricional?',
      resposta:
        'Avaliação completa de 90min com bioimpedância, exames laboratoriais e definição de metas personalizadas.',
    },
    {
      pergunta: 'Posso cancelar minha assinatura a qualquer momento?',
      resposta: 'Sim, sem multa ou taxa. Cancelamento até 48h antes da próxima entrega via app ou WhatsApp.',
    },
    {
      pergunta: 'Atendem restrições alimentares específicas?',
      resposta: 'Sim! Celíacos, diabéticos, veganos, low FODMAP e outras 15+ restrições com cardápios dedicados.',
    },
    {
      pergunta: 'Como funciona o programa de sustentabilidade?',
      resposta: 'Embalagens de vidro retornáveis, ingredientes orgânicos certificados e compensação total de carbono.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-100 to-lime-100 relative overflow-hidden">
      <Header />

      <section className="py-16 px-4 relative z-20">
        <div className="container mx-auto max-w-7xl">
          {/* Hero da página */}
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent pb-6">
              Fale conosco
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Nossa equipe de <span className="font-semibold text-green-600">nutricionistas CRN certificados</span>{' '}
                está pronta para criar seu plano nutricional personalizado. Atendimento humanizado, científico e focado
                em resultados duradouros para sua saúde e bem-estar.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <UserCheck className="w-5 h-5" />
                  <span>Primeira consulta gratuita</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600 font-semibold">
                  <MessageSquare className="w-5 h-5" />
                  <span>Atendimento por WhatsApp, e-mail ou vídeo</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Coluna Esquerda */}
            <div className="space-y-8">
              {/* Formulário de Contato */}
              <Card className="bg-white/80 backdrop-blur-lg shadow-2xl border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      Solicite Sua Consulta Gratuita
                    </h2>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                          Nome Completo *
                        </label>
                        <Input
                          id="nome"
                          placeholder="Seu nome completo"
                          className="bg-white/80 border-gray-200 focus:border-green-500 focus:ring-green-500 h-11 text-base"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          className="bg-white/80 border-gray-200 focus:border-green-500 focus:ring-green-500 h-11 text-base"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Telefone *
                        </label>
                        <Input
                          id="telefone"
                          placeholder="(11) 99999-9999"
                          className="bg-white/80 border-gray-200 focus:border-green-500 focus:ring-green-500 h-11 text-base"
                        />
                      </div>
                      <div>
                        <label htmlFor="assunto" className="block text-sm font-semibold text-gray-700 mb-2">
                          Assunto
                        </label>
                        <select
                          id="assunto"
                          className="w-full h-11 px-4 border border-gray-200 rounded-md bg-white/80 focus:border-green-500 focus:ring-green-500 text-base"
                        >
                          <option value="">Selecione um assunto</option>
                          <option value="consultoria">Consultoria Nutricional</option>
                          <option value="cardapio">Dúvidas sobre Cardápio</option>
                          <option value="entrega">Informações de Entrega</option>
                          <option value="suporte">Suporte Técnico</option>
                          <option value="outros">Outros</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        id="mensagem"
                        placeholder="Conte-nos sobre seus objetivos nutricionais, restrições alimentares ou dúvidas..."
                        className="bg-white/80 border-gray-200 focus:border-green-500 focus:ring-green-500 min-h-[120px] text-base"
                      />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-full text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <Send className="w-5 h-5 mr-2" />
                      Solicitar Consulta Gratuita
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <Card className="bg-gradient-to-r from-green-500 to-green-600 shadow-xl border-0">
                <CardContent className="p-8 text-center text-white">
                  <MessageCircle className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Atendimento Imediato</h3>
                  <p className="mb-6 text-green-100 text-lg">Fale agora com nossos nutricionistas via WhatsApp!</p>
                  <Button className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chamar no WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Horários de Atendimento */}
              <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                    Horários de atendimento especializado
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-gray-800">Segunda a Sexta</span>
                      <span className="text-blue-600 font-semibold">7h às 19h</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium text-gray-800">Sábado</span>
                      <span className="text-green-600 font-semibold">8h às 15h</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-800">Domingo</span>
                      <span className="text-gray-500 font-semibold">Fechado</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-orange-700 text-sm font-medium">
                      🩺 Atendimento de urgência nutricional 24h via WhatsApp
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Coluna Direita */}
            <div className="space-y-8">
              {/* Informações Principais */}
              <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                    Canais de atendimento
                  </h2>

                  <div className="space-y-6">
                    {informacoesContato.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${info.cor} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                        >
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">{info.titulo}</h4>
                          <p className="text-gray-600 font-medium">{info.principal}</p>
                          <p className="text-gray-500 text-sm">{info.secundario}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Especialidades */}
              <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                    Nossas especialidades
                  </h2>
                  <div className="space-y-6">
                    {especialidades.map((especialidade, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <especialidade.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">{especialidade.titulo}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{especialidade.descricao}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Benefícios Adicionais */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                    Por que escolher a VitaFresh?
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Nutricionistas CRN com especialização clínica</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Ingredientes orgânicos certificados</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Embalagens de vidro 100% sustentáveis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Entrega gratuita com rastreamento</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Acompanhamento nutricional personalizado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Garantia de satisfação ou dinheiro de volta</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <Card className="bg-white/80 backdrop-blur-lg shadow-2xl border-0 mt-16">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent pb-4">
                  Perguntas frequentes
                </h2>
                <p className="text-gray-600 text-lg">Respostas dos nossos especialistas para as dúvidas mais comuns</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-green-50 to-green-50/50 p-6 rounded-xl border border-green-100"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <h4 className="font-bold text-gray-800">{item.pergunta}</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed ml-9">{item.resposta}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
