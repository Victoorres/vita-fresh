"use client"

import Header from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useToast } from "@/components/toast"

export default function Checkout() {
  const searchParams = useSearchParams()
  const { showToast, ToastContainer } = useToast()
  const [step, setStep] = useState(1)
  const [orderData, setOrderData] = useState({
    name: "",
    price: "",
    dietId: "",
  })

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cpf: "",
    cep: "",
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    deliveryDate: "",
    deliveryTime: "",
    observations: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  })

  useEffect(() => {
    const dietId = searchParams.get("diet") || searchParams.get("plan")
    const name = searchParams.get("name")
    const price = searchParams.get("price")

    if (name && price && (orderData.name !== decodeURIComponent(name) || orderData.price !== price)) {
      setOrderData({
        name: decodeURIComponent(name),
        price: price,
        dietId: dietId || "",
      })
    }
  }, [searchParams, orderData.name, orderData.price])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1)
      showToast("Etapa concluída com sucesso!", "success")
    }
  }

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleFinishOrder = () => {
    setStep(5)
    showToast("Pedido realizado com sucesso! Você receberá um email de confirmação em breve.", "success")
  }

  const stepTitles = ["Dados Pessoais", "Endereço", "Agendamento", "Pagamento"]
  const stepTitlesMobile = ["Dados", "Endereço", "Entrega", "Pagamento"]

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2 block">
                  Nome Completo *
                </Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Seu nome completo"
                  className="bg-white border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="seu@email.com"
                  className="bg-white border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                  Telefone *
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="(11) 99999-9999"
                  className="bg-white border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="cpf" className="text-sm font-medium text-gray-700 mb-2 block">
                  CPF *
                </Label>
                <Input
                  id="cpf"
                  value={formData.cpf}
                  onChange={(e) => handleInputChange("cpf", e.target.value)}
                  placeholder="000.000.000-00"
                  className="bg-white border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="cep" className="text-sm font-medium text-gray-700 mb-2 block">
                  CEP *
                </Label>
                <Input
                  id="cep"
                  value={formData.cep}
                  onChange={(e) => handleInputChange("cep", e.target.value)}
                  placeholder="00000-000"
                  className="bg-white border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="address" className="text-sm font-medium text-gray-700 mb-2 block">
                  Endereço *
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Rua, Avenida..."
                  className="bg-white border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="number" className="text-sm font-medium text-gray-700 mb-2 block">
                  Número *
                </Label>
                <Input
                  id="number"
                  value={formData.number}
                  onChange={(e) => handleInputChange("number", e.target.value)}
                  placeholder="123"
                  className="bg-white border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="complement" className="text-sm font-medium text-gray-700 mb-2 block">
                  Complemento
                </Label>
                <Input
                  id="complement"
                  value={formData.complement}
                  onChange={(e) => handleInputChange("complement", e.target.value)}
                  placeholder="Apto, Bloco..."
                  className="bg-white border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="neighborhood" className="text-sm font-medium text-gray-700 mb-2 block">
                  Bairro *
                </Label>
                <Input
                  id="neighborhood"
                  value={formData.neighborhood}
                  onChange={(e) => handleInputChange("neighborhood", e.target.value)}
                  placeholder="Nome do bairro"
                  className="bg-white border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="city" className="text-sm font-medium text-gray-700 mb-2 block">
                  Cidade *
                </Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="São Paulo"
                  className="bg-white border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="deliveryDate" className="text-sm font-medium text-gray-700 mb-2 block">
                  Data da Entrega *
                </Label>
                <Input
                  id="deliveryDate"
                  type="date"
                  value={formData.deliveryDate}
                  onChange={(e) => handleInputChange("deliveryDate", e.target.value)}
                  className="bg-white border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="deliveryTime" className="text-sm font-medium text-gray-700 mb-2 block">
                  Horário Preferido *
                </Label>
                <select
                  id="deliveryTime"
                  value={formData.deliveryTime}
                  onChange={(e) => handleInputChange("deliveryTime", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md bg-white focus:border-green-500 focus:ring-green-500"
                >
                  <option value="">Selecione um horário</option>
                  <option value="07:00-09:00">07:00 - 09:00</option>
                  <option value="09:00-11:00">09:00 - 11:00</option>
                  <option value="11:00-13:00">11:00 - 13:00</option>
                  <option value="13:00-15:00">13:00 - 15:00</option>
                  <option value="15:00-17:00">15:00 - 17:00</option>
                  <option value="17:00-19:00">17:00 - 19:00</option>
                  <option value="19:00-21:00">19:00 - 21:00</option>
                </select>
              </div>
            </div>
            <div>
              <Label htmlFor="observations" className="text-sm font-medium text-gray-700 mb-2 block">
                Observações
              </Label>
              <Textarea
                id="observations"
                value={formData.observations}
                onChange={(e) => handleInputChange("observations", e.target.value)}
                placeholder="Alguma observação especial para a entrega..."
                className="bg-white border-gray-300 focus:border-green-500 focus:ring-green-500"
                rows={3}
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <Label htmlFor="cardNumber" className="text-sm font-medium text-gray-700 mb-2 block">
                  Número do Cartão *
                </Label>
                <Input
                  id="cardNumber"
                  value={formData.cardNumber}
                  onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                  placeholder="0000 0000 0000 0000"
                  className="bg-white border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="cardName" className="text-sm font-medium text-gray-700 mb-2 block">
                  Nome no Cartão *
                </Label>
                <Input
                  id="cardName"
                  value={formData.cardName}
                  onChange={(e) => handleInputChange("cardName", e.target.value)}
                  placeholder="Nome como está no cartão"
                  className="bg-white border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="expiryDate" className="text-sm font-medium text-gray-700 mb-2 block">
                  Validade *
                </Label>
                <Input
                  id="expiryDate"
                  value={formData.expiryDate}
                  onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                  placeholder="MM/AA"
                  className="bg-white border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="cvv" className="text-sm font-medium text-gray-700 mb-2 block">
                  CVV *
                </Label>
                <Input
                  id="cvv"
                  value={formData.cvv}
                  onChange={(e) => handleInputChange("cvv", e.target.value)}
                  placeholder="123"
                  className="bg-white border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="text-center space-y-8 py-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Pedido Confirmado!</h2>
              <p className="text-gray-600 text-lg">
                Seu pedido foi processado com sucesso. Você receberá um email de confirmação em breve.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg max-w-md mx-auto">
              <p className="text-gray-700">
                <strong className="text-green-700">Número do Pedido:</strong>
                <br />
                #VF{Math.floor(Math.random() * 100000)}
              </p>
            </div>
            <Button
              onClick={() => (window.location.href = "/")}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full"
            >
              Voltar ao Início
            </Button>
          </div>
        )

      default:
        return null
    }
  }

  if (!orderData.name && !orderData.price) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ToastContainer />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header da página */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Finalizar Pedido</h1>
          <p className="text-gray-600">Complete os dados para finalizar sua compra</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulário */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardContent className="p-4 md:p-8">
                {/* Progress Steps - Responsivo */}
                {step < 5 && (
                  <div className="mb-8">
                    {/* Steps Unificadas */}
                    <div className="flex items-center justify-between mb-6">
                      {[1, 2, 3, 4].map((stepNumber, index) => (
                        <div key={stepNumber} className="flex flex-col items-center flex-1">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                              step >= stepNumber ? "bg-green-500 text-white shadow-lg" : "bg-gray-300 text-gray-600"
                            }`}
                          >
                            {step > stepNumber ? <CheckCircle className="w-5 h-5" /> : stepNumber}
                          </div>
                          <span
                            className={`text-xs mt-2 text-center font-medium transition-colors duration-300 ${
                              step >= stepNumber ? "text-green-600" : "text-gray-500"
                            }`}
                          >
                            {stepTitlesMobile[stepNumber - 1]}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-300 rounded-full h-2 mb-6">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${(step / 4) * 100}%` }}
                      />
                    </div>

                    {/* Current Step Indicator */}
                    <div className="text-center mb-6">
                      <h2 className="text-xl font-bold text-gray-800">
                        Etapa {step} de 4: {stepTitles[step - 1]}
                      </h2>
                      <p className="text-gray-600 text-sm mt-1">Preencha os campos abaixo para continuar</p>
                    </div>
                  </div>
                )}

                {/* Step Content */}
                <div className="transition-all duration-300 ease-in-out">{renderStepContent()}</div>

                {/* Navigation Buttons */}
                {step < 5 && (
                  <div className="flex flex-col sm:flex-row gap-4 sm:justify-between mt-8 pt-6 border-t">
                    <Button
                      variant="outline"
                      onClick={handlePrevStep}
                      disabled={step === 1}
                      className="order-2 sm:order-1 bg-white border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Voltar
                    </Button>
                    <Button
                      onClick={step === 4 ? handleFinishOrder : handleNextStep}
                      className="order-1 sm:order-2 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {step === 4 ? "Finalizar Pedido" : "Próximo"}
                      {step < 4 && <ArrowRight className="w-4 h-4 ml-2" />}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Resumo do Pedido */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0 sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Resumo do Pedido</h3>

                {orderData.name && (
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">{orderData.name}</h4>
                      <div className="mt-3">
                        <span className="text-2xl font-bold text-gray-800">{orderData.price}</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="text-gray-800 font-medium">{orderData.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Entrega:</span>
                        <span className="text-green-600 font-medium">Grátis</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-green-600">{orderData.price}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Entrega gratuita</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Embalagem de vidro sustentável</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Suporte nutricional incluído</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
