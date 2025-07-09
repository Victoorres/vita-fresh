import Link from 'next/link';
import { Home, UtensilsCrossed, Truck, User, Phone, BookOpen } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const navItems = [
    { name: 'Início', href: '/', icon: Home },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Cardápio', href: '/cardapio', icon: UtensilsCrossed },
    { name: 'Entregas', href: '/entregas', icon: Truck },
    { name: 'Sobre', href: '/sobre', icon: User },
    { name: 'Contato', href: '/contato', icon: Phone },
  ];

  return (
    <>
      {/* Header Desktop */}
      <header className="bg-white/95 backdrop-blur-md rounded-2xl mx-4 mt-4 shadow-lg border border-white/20 hidden lg:block">
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            {/* Left Navigation - Desktop */}
            <nav className="flex items-center space-x-10">
              <Link
                href="/blog"
                className="text-gray-700 hover:text-green-600 text-sm font-medium transition-colors duration-200"
              >
                Blog
              </Link>
              <Link
                href="/cardapio"
                className="text-gray-700 hover:text-green-600 text-sm font-medium transition-colors duration-200"
              >
                Cardápio
              </Link>
              <Link
                href="/entregas"
                className="text-gray-700 hover:text-green-600 text-sm font-medium transition-colors duration-200"
              >
                Entregas
              </Link>
            </nav>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Vita
                <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                  Fresh
                </span>
              </span>
            </Link>

            {/* Right Navigation - Desktop */}
            <nav className="flex items-center space-x-10">
              <Link
                href="/sobre"
                className="text-gray-700 hover:text-green-600 text-sm font-medium transition-colors duration-200"
              >
                Sobre nós
              </Link>
              <Link
                href="/contato"
                className="text-gray-700 hover:text-green-600 text-sm font-medium transition-colors duration-200"
              >
                Contato
              </Link>
              <Link
                href="/painel"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                Painel do Cliente
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Header Mobile - Top */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 lg:hidden">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Mobile */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="VitaFresh Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Vita
                <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                  Fresh
                </span>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Bottom Navigation Mobile */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-50 shadow-2xl">
        <div className="grid grid-cols-6 h-20">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center justify-center space-y-1 text-gray-600 hover:text-green-500 transition-colors duration-200 group"
            >
              <div className="p-2 rounded-xl group-hover:bg-green-50 transition-colors duration-200">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Spacer for mobile bottom nav */}
      <div className="lg:hidden h-20"></div>
    </>
  );
}
