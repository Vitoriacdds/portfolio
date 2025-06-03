
import { Card } from "@/components/Card";
import { Award, Calendar, ExternalLink } from "lucide-react";

const Certificacoes = () => {
  const certificacoes = [
    {
      nome: "Scrum Fundamentals Certified",
      instituicao: "ScrumStudy",
      ano: "2025",
      cor: "from-purple-400 to-pink-400"
    },
    {
      nome: "Modelagem de Dados UML",
      instituicao: "Udemy",
      ano: "2025",
      cor: "from-blue-400 to-green-400"
    },
    {
      nome: "Formação Digital e Agile Thinking",
      instituicao: "Alura",
      ano: "2024",
      cor: "from-green-400 to-yellow-400"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gradient mb-4">
          Certificações
        </h1>
        <p className="text-xl text-slate-600">
          Certificações e cursos que complementam minha formação
        </p>
      </div>

      <div className="grid gap-6">
        {certificacoes.map((cert, index) => (
          <Card key={index}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${cert.cor} flex items-center justify-center flex-shrink-0`}>
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {cert.nome}
                </h3>
                <p className="text-lg text-slate-600 mb-2">
                  {cert.instituicao}
                </p>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-600">{cert.ano}</span>
                </div>
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pastel-blue/30 hover:bg-pastel-blue/50 transition-colors duration-200 cursor-pointer">
                <ExternalLink className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-pastel-purple to-pastel-pink">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-slate-800 mb-3">
            Aprendizado Contínuo
          </h3>
          <p className="text-slate-700">
            Mantenho-me sempre atualizada com as últimas tendências em análise de requisitos, 
            metodologias ágeis e tecnologias emergentes, especialmente em IA aplicada à saúde.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Certificacoes;
