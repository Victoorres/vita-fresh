"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, ShoppingCart, Sparkles, Heart } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/toast"

export default function Hero() {
  const router = useRouter()
  const { showToast, ToastContainer } = useToast()

  const handleOrderDiet = (dietType: string) => {
    const dietData = {
      "Dieta Padrão": { id: "padrao", price: "R$ 89,90" },
      "Sem Glúten e Lactose": { id: "sem-gluten", price: "R$ 109,90" },
    }

    const diet = dietData[dietType as keyof typeof dietData]
    if (diet) {
      router.push(`/checkout?diet=${diet.id}&name=${encodeURIComponent(dietType)}&price=${diet.price}`)
    }
  }

  const handleConsultNutritionist = () => {
    showToast("Redirecionando para consulta com nutricionista...", "info")
  }

  return (
    <>
      <ToastContainer />
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute bottom-32 left-12 w-24 h-36 z-10">
          <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-500 rounded-full transform rotate-45 opacity-20 shadow-2xl"></div>
        </div>

        <div className="absolute bottom-20 right-12 w-36 h-36 z-10">
          <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-500 rounded-full opacity-20 shadow-2xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-20">
          {/* Hero Content */}
          <div className="text-center mb-20">

            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-6 leading-tight">
              Dieta Saudável
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent pb-4">
              Com entrega gratuita
            </h2>

            <div className="max-w-3xl mx-auto mt-8">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Refeições balanceadas criadas por{" "}
                <span className="font-semibold text-green-600">nutricionistas CRN </span>
                com mais de 10 anos de experiência. Ingredientes orgânicos, preparo artesanal e acompanhamento
                personalizado para seus objetivos de saúde e bem-estar.
              </p>
              <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold">
                <Heart className="w-5 h-5" />
                <span>Embalagens de vidro 100% sustentáveis - Cuide de você e do planeta</span>
                <Heart className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Diet Options */}
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Dieta Padrão */}
            <Card className="bg-white/80 backdrop-blur-lg shadow-2xl border-0 overflow-hidden hover:shadow-3xl transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-10">
                <div className="text-center space-y-6">
                  {/* Image */}
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-to-br from-white to-gray-50 rounded-full shadow-xl overflow-hidden border-4 border-green-100 mx-auto group-hover:border-green-200 transition-colors duration-300">
                      <Image
                        src="/dieta-padrao.png?height=192&width=192"
                        alt="Refeição Dieta Padrão"
                        width={192}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Dieta Padrão
                  </h3>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleOrderDiet("Dieta Padrão")}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-3 rounded-full text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    PEDIR UMA DIETA
                  </Button>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    Plano nutricional completo com 1200-1800 kcal/dia, 5 refeições balanceadas com proteínas magras,
                    carboidratos complexos e vegetais orgânicos. Ideal para manutenção do peso e estilo de vida
                    saudável.
                  </p>

                  {/* Footer */}
                  <div className="border-t border-gray-100 pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 font-medium">Acompanhamento nutricional</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleConsultNutritionist}
                        className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Consultar nutricionista
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dieta Sem Glúten */}
            <Card className="bg-white/80 backdrop-blur-lg shadow-2xl border-0 overflow-hidden hover:shadow-3xl transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-10">
                <div className="text-center space-y-6">
                  {/* Image */}
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-to-br from-white to-gray-50 rounded-full shadow-xl overflow-hidden border-4 border-orange-100 mx-auto group-hover:border-orange-200 transition-colors duration-300">
                      <Image
                        src="/sem-lactose.png?height=192&width=192"
                        alt="Refeição Dieta Sem Glúten"
                        width={192}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Sem Glúten e Lactose
                  </h3>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleOrderDiet("Sem Glúten e Lactose")}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-full text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    PEDIR UMA DIETA
                  </Button>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    Cardápio especializado para celíacos e intolerantes à lactose, com 1300-1700 kcal/dia. Ingredientes
                    certificados, farinhas alternativas e substitutos lácteos naturais. Sabor e nutrição sem restrições.
                  </p>

                  {/* Footer */}
                  <div className="border-t border-gray-100 pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 font-medium">Certificação sem glúten/lactose</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleConsultNutritionist}
                        className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Consultar especialista
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
