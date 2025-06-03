
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Home, User, GraduationCap, Briefcase, Brain, Award, Info, Gamepad2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Formação",
    url: "/formacao",
    icon: GraduationCap,
  },
  {
    title: "Experiência",
    url: "/experiencia",
    icon: Briefcase,
  },
  {
    title: "Habilidades",
    url: "/habilidades",
    icon: Brain,
  },
  {
    title: "Certificações",
    url: "/certificacoes",
    icon: Award,
  },
  {
    title: "Jogo",
    url: "/jogo",
    icon: Gamepad2,
  },
  {
    title: "Sobre o Site",
    url: "/sobre",
    icon: Info,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-slate-200">
      <SidebarHeader className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-slate-800">Vitória</h2>
            <p className="text-sm text-slate-500">Portfólio</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-600 font-medium">
            Navegação
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.url}
                    className="transition-colors duration-200"
                  >
                    <Link 
                      to={item.url}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-pastel-purple/50"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-slate-200">
        <div className="text-center text-xs text-slate-500">
          <p>© 2025 Vitória Cavalcante</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
