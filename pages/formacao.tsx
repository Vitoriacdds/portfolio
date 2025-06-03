
import { Card } from "@/components/Card";
import { GraduationCap, Calendar } from "lucide-react";

const Formacao = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gradient mb-4">
          Experiência Acadêmica
        </h1>
        <p className="text-xl text-slate-600">
          Minha jornada educacional e desenvolvimento acadêmico
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Universidade Católica de Pernambuco (UNICAP)
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-slate-500" />
                <span className="text-slate-600">Conclusão: Junho/2026</span>
              </div>
              <p className="text-slate-700 font-medium mb-3">
                Bacharelado em Sistemas para Internet
              </p>
              <div className="bg-pastel-yellow/30 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Destaque Acadêmico</h4>
                <p className="text-slate-600">
                  Pesquisadora PIBIC desenvolvendo um modelo conceitual para confiança em 
                  Inteligência Artificial aplicada à saúde, contribuindo para o avanço 
                  científico na área de IA confiável.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-green-400 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                SENAI
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-slate-500" />
                <span className="text-slate-600">Conclusão: 2024</span>
              </div>
              <p className="text-slate-700 font-medium">
                Técnico em Administração
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Formacao;
