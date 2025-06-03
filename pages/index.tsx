
import { Card } from "@/components/Card";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center mb-12">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4E03AQFIV8MCthhI4A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1690805397428?e=1754524800&v=beta&t=HAxBmmAgFmDoFMpK3RU5Udvvdk5kYUSt7wPq-NygFzU" 
            alt="Vitória Cavalcante"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-gradient mb-2">
          Vitória Cavalcante
        </h1>
        <p className="text-xl text-slate-600 mb-4">
          Analista de Requisitos | Pesquisadora em IA na Saúde
        </p>
      </div>

      <Card>
        <h2 className="text-2xl font-semibold mb-4 text-slate-800">Sobre Mim</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Profissional da área de tecnologia com foco em análise de requisitos, pesquisa aplicada e metodologias ágeis. 
          Atuo na integração entre negócios e tecnologia, promovendo entregas que geram valor real aos usuários. 
          Tenho experiência em facilitação de processos ágeis, documentação de soluções digitais e condução de pesquisas 
          científicas voltadas à confiabilidade de sistemas com inteligência artificial.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Atualmente, desempenho a função de Analista de Requisitos na Aicury, onde conduzo processos de discovery e 
          refinamento, e sou pesquisadora PIBIC pela UNICAP, desenvolvendo um modelo conceitual para confiança em IA 
          aplicada à saúde. Estou em constante aprendizado, buscando unir prática, teoria e impacto social por meio da tecnologia.
        </p>
      </Card>

      <Card>
        <h2 className="text-2xl font-semibold mb-6 text-slate-800">Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a 
            href="mailto:vitoriacavalcante.ds@gmail.com"
            className="flex items-center gap-3 p-4 rounded-lg bg-pastel-blue/30 hover:bg-pastel-blue/50 transition-colors duration-200"
          >
            <Mail className="w-5 h-5 text-blue-600" />
            <span className="text-slate-700">vitoriacavalcante.ds@gmail.com</span>
          </a>
          
          <a 
            href="tel:+5581988817433"
            className="flex items-center gap-3 p-4 rounded-lg bg-pastel-green/30 hover:bg-pastel-green/50 transition-colors duration-200"
          >
            <Phone className="w-5 h-5 text-green-600" />
            <span className="text-slate-700">(81) 98881-7433</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/vitoriacavalcanteds"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg bg-pastel-purple/30 hover:bg-pastel-purple/50 transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5 text-purple-600" />
            <span className="text-slate-700">linkedin.com/in/vitoriacavalcanteds</span>
          </a>
          
          <div className="flex items-center gap-3 p-4 rounded-lg bg-pastel-pink/30">
            <MapPin className="w-5 h-5 text-pink-600" />
            <span className="text-slate-700">Recife-PE (remoto disponível)</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
