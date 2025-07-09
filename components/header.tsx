'use client';

import Link from 'next/link';
import { Home, UtensilsCrossed, Truck, User, Phone, BookOpen } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Início', href: '/', icon: Home },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Cardápio', href: '/cardapio', icon: UtensilsCrossed },
    { name: 'Entregas', href: '/entregas', icon: Truck },
    { name: 'Sobre', href: '/sobre', icon: User },
    { name: 'Contato', href: '/contato', icon: Phone },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Header Desktop */}
      <header className="bg-white/95 backdrop-blur-md rounded-2xl mx-4 mt-4 shadow-lg border border-white/20 hidden lg:block">
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            {/* Left Navigation - Desktop */}
            <nav className="flex items-center space-x-10 w-1/3 min-w-[400px]">
              <Link
                href="/blog"
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/blog') ? 'text-green-600 font-semibold' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Blog
              </Link>
              <Link
                href="/cardapio"
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/cardapio') ? 'text-green-600 font-semibold' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Cardápio
              </Link>
              <Link
                href="/entregas"
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/entregas') ? 'text-green-600 font-semibold' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Entregas
              </Link>
            </nav>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 mx-auto">
              <div className="text-center">
                <span className="text-4xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent tracking-tight">
                  Vita
                  <span className="bg-gradient-to-r from-green-500 via-green-600 to-green-500 bg-clip-text text-transparent">
                    Fresh
                  </span>
                </span>
                <div className="text-xs font-medium text-gray-500 tracking-widest uppercase">Nutrição Premium</div>
              </div>
            </Link>

            {/* Right Navigation - Desktop */}
            <nav className="flex items-center space-x-10 w-1/3 min-w-[400px] justify-end">
              <Link
                href="/sobre"
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/sobre') ? 'text-green-600 font-semibold' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Sobre nós
              </Link>
              <Link
                href="/contato"
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/contato') ? 'text-green-600 font-semibold' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Contato
              </Link>
              <Link
                href="/painel"
                className={`px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200 hover:scale-105 ${
                  isActive('/painel')
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                }`}
              >
                Painel do cliente
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Header Mobile - Top */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 lg:hidden">
        <div className="px-4 py-4">
          <div className="flex items-center place-self-center justify-center text-center">
            {/* Logo Mobile */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-center">
                <span className="text-4xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent tracking-tight">
                  Vita
                  <span className="bg-gradient-to-r from-green-500 via-green-600 to-green-500 bg-clip-text text-transparent">
                    Fresh
                  </span>
                </span>
                <div className="text-xs font-medium text-gray-500 tracking-widest uppercase">Nutrição Premium</div>
              </div>
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
              className={`flex flex-col items-center justify-center space-y-1 transition-colors duration-200 group ${
                isActive(item.href) ? 'text-green-500' : 'text-gray-600 hover:text-green-500'
              }`}
            >
              <div
                className={`p-2 rounded-xl transition-colors duration-200 ${
                  isActive(item.href) ? 'bg-green-50' : 'group-hover:bg-green-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
              </div>
              <span className={`text-xs font-medium ${isActive(item.href) ? 'font-semibold' : ''}`}>{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
