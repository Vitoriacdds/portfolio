
import { Card } from "@/components/Card";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

const Sobre = () => {
  const tecnologias = [
    {
      nome: "React",
      descricao: "Biblioteca JavaScript para construção de interfaces de usuário reativas e componentizadas",
      icone: Code,
      cor: "text-blue-600"
    },
    {
      nome: "TypeScript",
      descricao: "Superset do JavaScript que adiciona tipagem estática para maior segurança e produtividade",
      icone: Code,
      cor: "text-blue-700"
    },
    {
      nome: "Tailwind CSS",
      descricao: "Framework CSS utility-first para estilização rápida e responsiva com design system consistente",
      icone: Palette,
      cor: "text-teal-600"
    },
    {
      nome: "Next",
      descricao: "Ambiente de execução JavaScript assíncrono e baseado em eventos, ideal para construir aplicações escaláveis no lado do servidor.",
      icone: Zap,
      cor: "text-yellow-600"
    }
  ];

  const recursos = [
    "Design responsivo e mobile-first",
    "Componentes reutilizáveis e modulares",
    "Navegação intuitiva com sidebar colapsível",
    "Animações suaves e micro-interações",
    "Paleta de cores pastéis para melhor UX",
    "Sistema de roteamento dinâmico",
    "Arquitetura escalável e manutenível"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gradient mb-4">
          Sobre o Site
        </h1>
        <p className="text-xl text-slate-600">
          Tecnologias e recursos utilizados neste portfólio
        </p>
      </div>

      <Card className="bg-gradient-to-r from-pastel-blue to-pastel-purple">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-slate-800 mb-3">
            Portfólio Moderno e Responsivo
          </h3>
          <p className="text-slate-700 text-lg">
            Este site foi desenvolvido utilizando tecnologias modernas de desenvolvimento web, 
            priorizando performance, acessibilidade e uma excelente experiência do usuário.
          </p>
        </div>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          Tecnologias Utilizadas
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tecnologias.map((tech, index) => (
            <Card key={index}>
              <div className="flex items-start gap-4">
                <div className={`${tech.cor} mt-1`}>
                  <tech.icone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {tech.nome}
                  </h3>
                  <p className="text-slate-600">
                    {tech.descricao}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Card>
        <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-green-600" />
          Recursos e Funcionalidades
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {recursos.map((recurso, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
              <span className="text-slate-600">{recurso}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="bg-gradient-to-r from-pastel-yellow to-pastel-orange">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-slate-800 mb-3">
            Arquitetura e Boas Práticas
          </h3>
          <p className="text-slate-700">
            O projeto segue padrões modernos de desenvolvimento, incluindo componentes funcionais, 
            hooks customizados, tipagem TypeScript rigorosa e estrutura de pastas organizada para 
            facilitar manutenção e escalabilidade.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Sobre;
