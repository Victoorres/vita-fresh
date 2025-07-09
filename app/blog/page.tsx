import Header from '@/components/header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  Heart,
  Zap,
  Leaf,
  Award,
  CheckCircle,
  Coffee,
} from 'lucide-react';
import Image from 'next/image';

export default function Blog() {
  const artigosPrincipais = [
    {
      id: 1,
      titulo: 'Alimentos que Transformam sua Energia Diária',
      resumo:
        'Descubra os alimentos funcionais que nossos nutricionistas recomendam para aumentar disposição e vitalidade naturalmente.',
      autor: 'Dra. Ana Beatriz Silva',
      data: '15 Jan 2024',
      tempoLeitura: '8 min',
      categoria: 'Nutrição Funcional',
      imagem: '/alimentos.jpg?height=300&width=400',
      destaque: true,
    },
    {
      id: 2,
      titulo: 'Jejum Intermitente: Mitos e Verdades Científicas',
      resumo:
        'Nossa nutricionista CRN esclarece as principais dúvidas sobre jejum intermitente baseado em evidências científicas atuais.',
      autor: 'Dra. Carolina Mendes',
      data: '12 Jan 2024',
      tempoLeitura: '12 min',
      categoria: 'Emagrecimento',
      imagem: '/jejum.jpg?height=300&width=400',
      destaque: true,
    },
  ];

  const artigos = [
    {
      id: 3,
      titulo: 'Como Montar um Prato Equilibrado em 5 Passos',
      resumo: 'Guia prático para criar refeições balanceadas seguindo o método do prato saudável da Harvard.',
      autor: 'Chef Marcus Oliveira',
      data: '10 Jan 2024',
      tempoLeitura: '6 min',
      categoria: 'Receitas',
      imagem: '/prato.jpeg?height=200&width=300',
    },
    {
      id: 4,
      titulo: 'Suplementação: Quando é Realmente Necessária?',
      resumo: 'Entenda quando os suplementos são indicados e como escolher com orientação profissional.',
      autor: 'Dra. Ana Beatriz Silva',
      data: '8 Jan 2024',
      tempoLeitura: '10 min',
      categoria: 'Suplementação',
      imagem: '/suplementos.jpg?height=200&width=300',
    },
    {
      id: 5,
      titulo: 'Alimentação Plant-Based: Guia Completo para Iniciantes',
      resumo: 'Tudo que você precisa saber para adotar uma alimentação à base de plantas de forma saudável.',
      autor: 'Dra. Carolina Mendes',
      data: '5 Jan 2024',
      tempoLeitura: '15 min',
      categoria: 'Vegetarianismo',
      imagem: '/alimentacao-plant.jpg?height=200&width=300',
    },
    {
      id: 6,
      titulo: 'Hidratação Inteligente: Além da Água',
      resumo: 'Descubra bebidas funcionais e estratégias de hidratação para potencializar sua saúde.',
      autor: 'Chef Marcus Oliveira',
      data: '3 Jan 2024',
      tempoLeitura: '7 min',
      categoria: 'Hidratação',
      imagem: '/hidratacao.jpg?height=200&width=300',
    },
    {
      id: 7,
      titulo: 'Microbiota Intestinal: O Segundo Cérebro',
      resumo: 'Como a saúde intestinal influencia humor, imunidade e bem-estar geral.',
      autor: 'Dra. Ana Beatriz Silva',
      data: '1 Jan 2024',
      tempoLeitura: '11 min',
      categoria: 'Saúde Intestinal',
      imagem: '/microbiota.jpg?height=200&width=300',
    },
    {
      id: 8,
      titulo: 'Organização que Transforma Hábitos',
      resumo: 'Estratégias práticas para planejar e preparar refeições saudáveis da semana.',
      autor: 'Chef Marcus Oliveira',
      data: '28 Dez 2023',
      tempoLeitura: '9 min',
      categoria: 'Organização',
      imagem: '/habitos.jpg?height=200&width=300',
    },
  ];

  const categorias = [
    { nome: 'Nutrição Funcional', cor: 'from-green-400 to-green-500', icon: Leaf, count: 12 },
    { nome: 'Emagrecimento', cor: 'from-red-400 to-red-500', icon: Zap, count: 8 },
    { nome: 'Receitas', cor: 'from-orange-400 to-orange-500', icon: Heart, count: 15 },
    { nome: 'Suplementação', cor: 'from-blue-400 to-blue-500', icon: Award, count: 6 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-100 to-lime-100 relative overflow-hidden">
      <Header />

      {/* Elementos decorativos */}
      <div className="absolute top-32 left-8 w-24 h-24 bg-orange-400 rounded-full opacity-20"></div>
      <div className="absolute top-20 right-12 w-20 h-20 bg-purple-300 rounded-full opacity-20"></div>
      <div className="absolute bottom-40 left-16 w-16 h-16 bg-red-400 rounded-full opacity-60"></div>

      <section className="py-16 px-4 relative z-20">
        <div className="container mx-auto max-w-7xl">
          {/* Hero da página */}
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent pb-6">
              Novidades
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Dicas, receitas e ciência da nutrição, direto de{' '}
                <span className="font-semibold text-green-600">nutricionistas CRN certificados</span> e chefs
                especialistas. Conteúdo baseado em evidências, testado na prática e pensado pra você.
              </p>
              <div className="flex items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <BookOpen className="w-6 h-6" />
                  <span>Novos artigos toda semana</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-600 font-semibold">
                  <Coffee className="w-6 h-6" />
                  <span>Receitas testadas</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <CheckCircle className="w-6 h-6" />
                  <span>Conteúdo validado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Categorias */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {categorias.map((categoria, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-lg shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${categoria.cor} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <categoria.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{categoria.nome}</h3>
                  <p className="text-gray-600 text-sm">{categoria.count} artigos</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Artigos em Destaque */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent text-center pb-12">
              Artigos em destaque
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {artigosPrincipais.map((artigo) => (
                <Card
                  key={artigo.id}
                  className="bg-white/80 backdrop-blur-lg shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="relative">
                    <Image
                      src={artigo.imagem || '/placeholder.svg'}
                      alt={artigo.titulo}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 text-xs font-semibold">
                      {artigo.categoria}
                    </Badge>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-200">
                      {artigo.titulo}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{artigo.resumo}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{artigo.autor}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{artigo.data}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{artigo.tempoLeitura}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      Ler Artigo Completo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Todos os Artigos */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent text-center pb-12">
              Todos os artigos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artigos.map((artigo) => (
                <Card
                  key={artigo.id}
                  className="bg-white/80 backdrop-blur-lg shadow-lg border-0 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="relative">
                    <Image
                      src={artigo.imagem || '/placeholder.svg'}
                      alt={artigo.titulo}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2 py-1 text-xs font-semibold">
                      {artigo.categoria}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-200 line-clamp-2">
                      {artigo.titulo}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{artigo.resumo}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{artigo.autor}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{artigo.data}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{artigo.tempoLeitura}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-green-200 text-green-600 hover:bg-green-50 font-medium transition-colors duration-200 bg-transparent hover:text-gree-700"
                    >
                      Ler Mais
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <Card className="bg-gradient-to-r from-green-500 to-green-600 shadow-2xl border-0">
            <CardContent className="p-12 text-center text-white">
              <div className="max-w-3xl mx-auto">
                <BookOpen className="w-16 h-16 mx-auto mb-6" />
                <h2 className="text-4xl font-bold mb-6">Receba conteúdo exclusivo</h2>
                <p className="text-xl mb-8 opacity-90">
                  Cadastre-se e receba semanalmente artigos exclusivos, receitas funcionais e dicas de nossos
                  nutricionistas diretamente no seu email.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="flex-1 px-6 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white bg-white"
                  />
                  <Button className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6">
                    Inscrever-se
                  </Button>
                </div>
                <p className="text-green-100 text-sm mt-4">
                  📧 Sem spam • Cancele quando quiser • Conteúdo científico validado
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
