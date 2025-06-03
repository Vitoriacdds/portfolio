
import { Card } from "@/components/Card";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

const Experiencia = () => {
  const atividades = [
    "Facilitação de product discovery e refinamento de backlog",
    "Condução de cerimônias ágeis (dailies, planning, reviews, retrospectivas)",
    "Utilização de Scrum e Kanban",
    "Documentação de requisitos funcionais e não funcionais"
  ];

  const ferramentas = [
    "Azure Boards", "Jira", "Bizagi", "Figma"
  ];

  const resultados = [
    "Melhoria de produtividade das equipes",
    "Aprimoramento da comunicação entre stakeholders",
    "Otimização dos processos de desenvolvimento"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gradient mb-4">
          Experiência Profissional
        </h1>
        <p className="text-xl text-slate-600">
          Minha trajetória e contribuições no mercado de trabalho
        </p>
      </div>

      <Card>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">
              Aicury
            </h3>
            <p className="text-lg font-medium text-purple-600 mb-2">
              Analista de Requisitos
            </p>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-slate-500" />
              <span className="text-slate-600">Abril/2025 – Atual</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Principais Atividades
            </h4>
            <ul className="space-y-2">
              {atividades.map((atividade, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <span className="text-slate-600">{atividade}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              Ferramentas Utilizadas
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {ferramentas.map((ferramenta, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-pastel-blue/50 text-blue-700 rounded-full text-sm font-medium"
                >
                  {ferramenta}
                </span>
              ))}
            </div>

            <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Resultados Alcançados
            </h4>
            <ul className="space-y-2">
              {resultados.map((resultado, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                  <span className="text-slate-600">{resultado}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Experiencia;
