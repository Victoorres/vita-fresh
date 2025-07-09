import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function DietOptions() {
  const dietOptions = [
    {
      id: "standard",
      title: "Dieta Padrão",
      description:
        "Uma dieta bem balanceada e apropriada é a chave para alcançar seus sonhos. Figuras balanceadas, calorias e certos nutrientes também ajudam com sérios distúrbios de saúde.",
      image: "/placeholder.svg?height=200&width=200",
      badge: "Mais Popular",
      badgeColor: "bg-green-500",
      buttonText: "PEDIR UMA DIETA",
      consultText: "Consultar um nutricionista",
    },
    {
      id: "gluten-free",
      title: "Dieta Sem Glúten e Lactose",
      description:
        "Dieta Sem Glúten e Lactose foi especialmente desenvolvida para pessoas que querem se livrar de problemas digestivos. Nosso cardápio ajuda a manter seu peso corporal atual para aqueles que simplesmente gostam de comer saudável.",
      image: "/placeholder.svg?height=200&width=200",
      badge: "Especializada",
      badgeColor: "bg-orange-500",
      buttonText: "PEDIR UMA DIETA",
      consultText: "Consultar um nutricionista",
    },
  ]

  return (
    <section className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {dietOptions.map((diet, index) => (
            <Card
              key={diet.id}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0 overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Image */}
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-100 shadow-lg">
                      <Image
                        src={diet.image || "/placeholder.svg"}
                        alt={diet.title}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge
                      className={`absolute -top-2 -right-2 ${diet.badgeColor} text-white px-3 py-1 text-xs font-semibold`}
                    >
                      {diet.badge}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800">{diet.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{diet.description}</p>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3 w-full">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg transition-all">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {diet.buttonText}
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full text-orange-500 hover:text-orange-600 hover:bg-orange-50 font-medium"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {diet.consultText}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
