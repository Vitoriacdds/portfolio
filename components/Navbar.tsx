// components/Navbar.tsx
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  Home,
  User,
  GraduationCap,
  Briefcase,
  Brain,
  Award,
  Info,
  Gamepad2,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Formação", url: "/formacao", icon: GraduationCap },
  { title: "Experiência", url: "/experiencia", icon: Briefcase },
  { title: "Habilidades", url: "/habilidades", icon: Brain },
  { title: "Certificações", url: "/certificacoes", icon: Award },
  { title: "Jogo", url: "/jogo", icon: Gamepad2 },
  { title: "Sobre o Site", url: "/sobre", icon: Info },
];

export function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="hidden sm:block">
              <h2 className="font-semibold text-slate-800">Vitória Cavalcante</h2>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  router.pathname === item.url
                    ? "bg-purple-100 text-purple-700"
                    : "text-slate-600 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-purple-600 hover:bg-purple-50"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    router.pathname === item.url
                      ? "bg-purple-100 text-purple-700"
                      : "text-slate-600 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
