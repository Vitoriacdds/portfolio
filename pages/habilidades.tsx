
import { Card } from "@/components/Card";
import { Brain, Code, Users, Zap } from "lucide-react";

const Habilidades = () => {
  const habilidadesTecnicas = [
    "Engenharia de Requisitos para IA e Software",
    "Product Discovery e Validação de MVPs",
    "Scrum, Kanban e Métodos Ágeis",
    "BPMN, UML, Modelagem de Processos"
  ];

  const ferramentas = [
    "Azure Boards", "Jira", "Bizagi", "Lucidchart", 
    "Figma", "Wiki"
  ];

  const metodologias = [
    "Design Thinking",
    "Pesquisa UX",
    "Metodologias Ágeis",
    "Lean Startup"
  ];

  const tecnologias = [
    "SQL", "HTML", "CSS", "JavaScript", "Java"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gradient mb-4">
          Habilidades Técnicas
        </h1>
        <p className="text-xl text-slate-600">
          Competências e conhecimentos que aplico no dia a dia
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-semibold text-slate-800">
              Análise e Requisitos
            </h3>
          </div>
          <ul className="space-y-3">
            {habilidadesTecnicas.map((habilidade, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <span className="text-slate-600">{habilidade}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-slate-800">
              Ferramentas
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {ferramentas.map((ferramenta, index) => (
              <span 
                key={index}
                className="px-3 py-2 bg-pastel-blue/50 text-blue-700 rounded-lg text-sm font-medium"
              >
                {ferramenta}
              </span>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-semibold text-slate-800">
              Metodologias
            </h3>
          </div>
          <ul className="space-y-3">
            {metodologias.map((metodologia, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                <span className="text-slate-600">{metodologia}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-6 h-6 text-pink-600" />
            <h3 className="text-xl font-semibold text-slate-800">
              Conhecimentos Técnicos
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {tecnologias.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-2 bg-pastel-pink/50 text-pink-700 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-sm text-slate-500 mt-3">
            Conhecimentos básicos em desenvolvimento
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Habilidades;
