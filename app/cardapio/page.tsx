'use client';

import Header from '@/components/header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Zap, ShoppingCart, MessageCircle, Heart, Award, Package, Coffee, Leaf } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/toast';

export default function Cardapio() {
  const router = useRouter();
  const { showToast, ToastContainer } = useToast();

  const dietas = [
    {
      id: 'padrao',
      nome: 'Dieta Padrão',
      descricao:
        'Cardápio equilibrado com proteínas magras, carboidratos complexos e vegetais orgânicos. Perfeito para manter energia e vitalidade no dia a dia.',
      calorias: '1200-1800 kcal/dia',
      refeicoes: 5,
      preco: 'R$ 89,90',
      periodo: 'por semana',
      badge: 'Mais Popular',
      badgeColor: 'bg-gradient-to-r from-green-500 to-green-600',
      image: '/dieta-padrao.png?height=160&width=160',
    },
    {
      id: 'sem-gluten',
      nome: 'Sem Glúten e Lactose',
      descricao:
        'Refeições certificadas para celíacos e intolerantes, com farinhas alternativas e substitutos lácteos naturais. Sabor sem limitações.',
      calorias: '1300-1700 kcal/dia',
      refeicoes: 5,
      preco: 'R$ 109,90',
      periodo: 'por semana',
      badge: 'Especializada',
      badgeColor: 'bg-gradient-to-r from-orange-500 to-orange-600',
      image: '/sem-gluten.png?height=160&width=160',
    },
    {
      id: 'low-carb',
      nome: 'Low Carb',
      descricao:
        'Redução inteligente de carboidratos com foco em proteínas de alta qualidade e gorduras boas. Acelere seu metabolismo naturalmente.',
      calorias: '1000-1500 kcal/dia',
      refeicoes: 4,
      preco: 'R$ 99,90',
      periodo: 'por semana',
      badge: 'Emagrecimento',
      badgeColor: 'bg-gradient-to-r from-red-500 to-red-600',
      image: '/low-carb.png?height=160&width=160',
    },
    {
      id: 'vegana',
      nome: 'Dieta Vegana',
      descricao:
        'Plant-based completo com proteínas vegetais, superalimentos e suplementação natural. Nutrição consciente para você e o planeta.',
      calorias: '1400-1800 kcal/dia',
      refeicoes: 5,
      preco: 'R$ 94,90',
      periodo: 'por semana',
      badge: 'Plant-Based',
      badgeColor: 'bg-gradient-to-r from-green-600 to-green-700',
      image: '/vegano.png?height=160&width=160',
    },
    {
      id: 'esportiva',
      nome: 'Dieta Esportiva',
      descricao:
        'Alto valor proteico e carboidratos estratégicos para performance máxima. Desenvolvida para atletas e praticantes de exercícios intensos.',
      calorias: '2000-2500 kcal/dia',
      refeicoes: 6,
      preco: 'R$ 129,90',
      periodo: 'por semana',
      badge: 'Performance',
      badgeColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
      image: '/dieta-esportiva.png?height=160&width=160',
    },
    {
      id: 'detox',
      nome: 'Dieta Detox',
      descricao:
        'Programa de 7 dias com alimentos antioxidantes, chás funcionais e sucos verdes. Renove seu organismo de dentro para fora.',
      calorias: '1100-1400 kcal/dia',
      refeicoes: 4,
      preco: 'R$ 119,90',
      periodo: 'por semana',
      badge: 'Detox',
      badgeColor: 'bg-gradient-to-r from-purple-500 to-purple-600',
      image: '/dieta-detox.png?height=160&width=160',
    },
  ];

  const handleOrderDiet = (dietId: string) => {
    const diet = dietas.find((d) => d.id === dietId);
    if (diet) {
      router.push(`/checkout?diet=${dietId}&name=${encodeURIComponent(diet.nome)}&price=${diet.preco}`);
    }
  };

  const handleConsultNutritionist = () => {
    showToast('Redirecionando para consulta com nutricionista...', 'info');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-100 to-lime-100 relative overflow-hidden">
      <Header />
      <ToastContainer />

      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          {/* Hero da página */}
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent pb-6">
              Nossos pratos
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Refeições equilibradas, criadas por{' '}
                <span className="font-semibold text-green-600">nutricionistas CRN certificados</span>, com ingredientes
                orgânicos e preparo artesanal. Entregues em{' '}
                <span className="font-bold text-orange-600">embalagens de vidro</span> que preservam o sabor, os
                nutrientes e o planeta.
              </p>
              <div className="flex items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <Leaf className="w-6 h-6" />
                  <span>Ingredientes 100% orgânicos</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-600 font-semibold">
                  <Coffee className="w-6 h-6" />
                  <span>Preparo artesanal diário</span>
                </div>
                <div className="flex items-center gap-2 text-orange-600 font-semibold">
                  <Package className="w-6 h-6" />
                  <span>Embalagens de vidro reutilizáveis</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid de Dietas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {dietas.map((dieta, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-lg shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group flex flex-col relative z-20 pb-0"
              >
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Badge */}
                  {dieta.badge && (
                    <Badge
                      className={`${dieta.badgeColor} text-white px-4 py-2 text-xs font-semibold mb-6 self-start shadow-lg`}
                    >
                      {dieta.badge}
                    </Badge>
                  )}

                  {/* Imagem da comida */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-36 h-36 bg-gradient-to-br from-white to-gray-50 rounded-full shadow-xl overflow-hidden border-4 border-gray-100 group-hover:border-green-200 transition-colors duration-300">
                        <Image
                          src={dieta.image || '/placeholder.svg'}
                          alt={dieta.nome}
                          width={144}
                          height={144}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Nome da dieta */}
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-4">{dieta.nome}</h3>

                  {/* Botão ORDER A DIET */}
                  <div className="flex justify-center mb-6">
                    <Button
                      onClick={() => handleOrderDiet(dieta.id)}
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-2.5 rounded-full text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      PEDIR UMA DIETA
                    </Button>
                  </div>

                  {/* Descrição */}
                  <div className="flex-grow">
                    <p className="text-gray-600 text-sm leading-relaxed text-center mb-4">{dieta.descricao}</p>

                    {/* Informações nutricionais */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-center gap-2 bg-green-50 rounded-lg p-2">
                        <Zap className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-gray-700 font-medium">{dieta.calorias}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 bg-blue-50 rounded-lg p-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span className="text-xs text-gray-700 font-medium">{dieta.refeicoes} refeições/dia</span>
                      </div>
                    </div>

                    {/* Preço */}
                    <div className="text-center mb-4">
                      <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                        {dieta.preco}
                      </span>
                      <span className="text-gray-600 text-sm ml-1 font-medium">{dieta.periodo}</span>
                    </div>
                  </div>

                  {/* Footer do card */}
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <div className="flex items-center place-self-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleConsultNutritionist}
                        className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 text-xs p-1 h-auto transition-colors duration-200 p-4"
                      >
                        <MessageCircle className="w-3 h-3 mr-1" />
                        Falar com nutricionista
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Informações adicionais */}
          <Card className="bg-white/80 backdrop-blur-lg shadow-2xl border-0 relative z-20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-8">
                Da cozinha à sua mesa: Nosso processo
              </h2>
              <div className="grid md:grid-cols-3 gap-10">
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">Consultoria Personalizada</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nossos nutricionistas CRN analisam seu perfil, objetivos e restrições para criar seu plano ideal
                  </p>
                </div>
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">Preparo Artesanal</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Chefs especializados preparam suas refeições diariamente com ingredientes orgânicos e técnicas
                    culinárias saudáveis
                  </p>
                </div>
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">Entrega Sustentável</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Embalagens de vidro reutilizáveis preservam sabor e nutrientes, chegando fresquinhas na sua porta
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
