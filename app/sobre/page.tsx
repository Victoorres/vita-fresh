import Header from '@/components/header';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Heart, Leaf, CheckCircle, Calendar, Package } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-100 to-lime-100 relative overflow-hidden">
      <Header />

      <section className="py-16 px-4 relative z-20">
        <div className="container mx-auto max-w-6xl">
          {/* Hero da página */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent pb-6">
              Nossa história
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Nascemos da paixão por transformar a relação das pessoas com a alimentação. Somos pioneiros em nutrição
              personalizada com impacto ambiental zero — unindo ciência, sabor e sustentabilidade em cada detalhe.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <Calendar className="w-5 h-5" />
                <span>Desde 2020</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-600 font-semibold">
                <Package className="w-5 h-5" />
                <span>Mais de 20 mil refeições entregues</span>
              </div>
            </div>
          </div>

          {/* Nossa História */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 mb-12">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">A revolução começou em 2020</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Durante a pandemia, três nutricionistas CRN e um chef premiado se uniram com uma missão:
                    democratizar a alimentação saudável sem comprometer o planeta. O que começou como um laboratório
                    culinário de 50m² virou referência nacional em nutrição sustentável.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Hoje, operamos o maior centro de produção de refeições saudáveis da América Latina, com certificação
                    orgânica, carbono neutro e impacto social positivo em 12 comunidades.
                  </p>
                </div>
                <div className="bg-green-100 rounded-2xl p-8 text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">150.000+</div>
                  <div className="text-gray-600 mb-4">Refeições entregues</div>
                  <div className="text-3xl font-bold text-green-600 mb-2">8.500+</div>
                  <div className="text-gray-600 mb-4">Vidas transformadas</div>
                  <div className="text-3xl font-bold text-green-600 mb-2">Zero</div>
                  <div className="text-gray-600">Pegada de carbono</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Nossos Valores */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Heart,
                title: 'Ciência Nutricional',
                description: 'Cada cardápio é validado por nutricionistas CRN com especialização em nutrigenômica',
              },
              {
                icon: Leaf,
                title: 'Impacto Regenerativo',
                description: 'Agricultura regenerativa, embalagens retornáveis e programa de reflorestamento',
              },
              {
                icon: Award,
                title: 'Excelência Culinária',
                description: 'Chefs premiados transformam nutrição em experiências gastronômicas memoráveis',
              },
              {
                icon: Users,
                title: 'Transformação Social',
                description: 'Programa de capacitação nutricional em comunidades e escolas públicas',
              },
            ].map((valor, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <valor.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{valor.title}</h3>
                  <p className="text-gray-600 text-sm">{valor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Equipe */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Mentes brilhantes, propósito comum</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    nome: 'Dra. Ana Beatriz Silva',
                    cargo: 'Nutricionista Chefe & Co-fundadora',
                    descricao:
                      'CRN-3 12345 • Doutora em Nutrigenômica pela USP • 15 anos transformando vidas através da alimentação',
                    foto: 'https://randomuser.me/api/portraits/women/19.jpg?height=80&width=80',
                  },
                  {
                    nome: 'Chef Marcus Oliveira',
                    cargo: 'Diretor Culinário & Co-fundador',
                    descricao: 'Prêmio Jovem Chef 2019 • Especialista em Gastronomia Funcional • Ex-Noma Copenhagen',
                    foto: 'https://randomuser.me/api/portraits/men/44.jpg?height=80&width=80',
                  },
                  {
                    nome: 'Dra. Carolina Mendes',
                    cargo: 'Diretora Científica',
                    descricao:
                      'CRN-3 67890 • PhD em Nutrição Clínica • Pesquisadora em Medicina Preventiva no Hospital Sírio-Libanês',
                    foto: 'https://randomuser.me/api/portraits/women/31.jpg?height=80&width=80',
                  },
                ].map((membro, index) => (
                  <div key={index} className="text-center">
                    <div className="w-32 h-32 bg-green-200 rounded-full mx-auto mb-4 p-1">
                      <img
                        src={membro.foto || '/placeholder.svg'}
                        alt={membro.nome}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{membro.nome}</h3>
                    <p className="text-green-600 font-medium mb-2">{membro.cargo}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{membro.descricao}</p>
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
