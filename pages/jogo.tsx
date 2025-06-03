
import { Card } from "@/components/Card";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gamepad2, RotateCcw, Eye, Trophy } from "lucide-react";

interface Tentativa {
  palpite: string;
  bulls: number;
  cows: number;
}

const Jogo = () => {
  const [senhaSecreta, setSenhaSecreta] = useState<string>("");
  const [palpite, setPalpite] = useState<string>("");
  const [tentativas, setTentativas] = useState<Tentativa[]>([]);
  const [jogoTerminado, setJogoTerminado] = useState<boolean>(false);
  const [venceu, setVenceu] = useState<boolean>(false);
  const [numeroTentativas, setNumeroTentativas] = useState<number>(0);
  const maxTentativas = 10;

  // Gerar senha secreta aleatória
  const gerarSenhaSecreta = (): string => {
    const digitos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const senha = [];
    
    for (let i = 0; i < 4; i++) {
      const indiceAleatorio = Math.floor(Math.random() * digitos.length);
      senha.push(digitos[indiceAleatorio]);
      digitos.splice(indiceAleatorio, 1); // Remove o dígito para evitar repetição
    }
    
    return senha.join("");
  };

  // Inicializar jogo
  useEffect(() => {
    setSenhaSecreta(gerarSenhaSecreta());
  }, []);

  // Calcular bulls e cows
  const calcularBullsECows = (palpite: string, senha: string) => {
    let bulls = 0;
    let cows = 0;
    
    const senhaArray = senha.split("");
    const palpiteArray = palpite.split("");
    
    // Contar bulls (posição e dígito corretos)
    for (let i = 0; i < 4; i++) {
      if (palpiteArray[i] === senhaArray[i]) {
        bulls++;
        senhaArray[i] = "X"; // Marcar como usado
        palpiteArray[i] = "Y"; // Marcar como usado
      }
    }
    
    // Contar cows (dígito correto, posição errada)
    for (let i = 0; i < 4; i++) {
      if (palpiteArray[i] !== "Y") {
        const indiceEncontrado = senhaArray.indexOf(palpiteArray[i]);
        if (indiceEncontrado !== -1) {
          cows++;
          senhaArray[indiceEncontrado] = "X"; // Marcar como usado
        }
      }
    }
    
    return { bulls, cows };
  };

  // Validar palpite
  const validarPalpite = (palpite: string): boolean => {
    if (palpite.length !== 4) return false;
    if (!/^\d{4}$/.test(palpite)) return false;
    
    // Verificar se tem dígitos únicos
    const digitos = new Set(palpite.split(""));
    return digitos.size === 4;
  };

  // Fazer tentativa
  const fazerTentativa = () => {
    if (!validarPalpite(palpite)) {
      alert("Por favor, digite 4 dígitos únicos (0-9)");
      return;
    }

    const { bulls, cows } = calcularBullsECows(palpite, senhaSecreta);
    const novaTentativa: Tentativa = { palpite, bulls, cows };
    
    const novasTentativas = [novaTentativa, ...tentativas].slice(0, 10);
    setTentativas(novasTentativas);
    setNumeroTentativas(numeroTentativas + 1);
    
    // Verificar se ganhou
    if (bulls === 4) {
      setVenceu(true);
      setJogoTerminado(true);
    }
    // Verificar se perdeu (máximo de tentativas)
    else if (numeroTentativas + 1 >= maxTentativas) {
      setJogoTerminado(true);
    }
    
    setPalpite("");
  };

  // Reiniciar jogo
  const novoJogo = () => {
    setSenhaSecreta(gerarSenhaSecreta());
    setPalpite("");
    setTentativas([]);
    setJogoTerminado(false);
    setVenceu(false);
    setNumeroTentativas(0);
  };

  // Mostrar senha secreta
  const mostrarSenha = () => {
    alert(`Senha secreta atual: ${senhaSecreta}`);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gradient mb-4 flex items-center justify-center gap-3">
          <Gamepad2 className="w-10 h-10" />
          Jogo da Senha
        </h1>
        <p className="text-xl text-slate-600">
          Bulls and Cows - Descubra a senha de 4 dígitos únicos!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Como Jogar
          </h2>
          <div className="space-y-3 text-slate-600">
            <p>• Digite uma senha de 4 dígitos únicos (0-9)</p>
            <p>• <strong>Bulls</strong>: dígitos corretos na posição correta</p>
            <p>• <strong>Cows</strong>: dígitos corretos na posição errada</p>
            <p>• Você tem {maxTentativas} tentativas para descobrir a senha</p>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Fazer Tentativa
          </h2>
          
          {!jogoTerminado ? (
            <div className="space-y-4">
              <div>
                <Input
                  type="text"
                  value={palpite}
                  onChange={(e) => setPalpite(e.target.value)}
                  placeholder="Digite 4 dígitos únicos"
                  maxLength={4}
                  className="text-center text-lg font-mono"
                  disabled={jogoTerminado}
                />
              </div>
              
              <div className="flex gap-2">
                <Button 
                  onClick={fazerTentativa}
                  className="flex-1"
                  disabled={jogoTerminado}
                >
                  Tentar
                </Button>
                <Button 
                  onClick={mostrarSenha}
                  variant="outline"
                  size="icon"
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
              
              <p className="text-center text-slate-600">
                Tentativa {numeroTentativas + 1} de {maxTentativas}
              </p>
            </div>
          ) : (
            <div className="text-center space-y-4">
              {venceu ? (
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <Trophy className="w-6 h-6" />
                  <span className="text-xl font-semibold">Parabéns! Você venceu!</span>
                </div>
              ) : (
                <div className="text-red-600">
                  <p className="text-xl font-semibold">Que pena! Você perdeu.</p>
                  <p>A senha era: <strong>{senhaSecreta}</strong></p>
                </div>
              )}
              
              <Button onClick={novoJogo} className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                Novo Jogo
              </Button>
            </div>
          )}
        </Card>
      </div>

      {tentativas.length > 0 && (
        <Card>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Últimas Tentativas
          </h2>
          <div className="space-y-2">
            {tentativas.map((tentativa, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
              >
                <span className="font-mono text-lg font-semibold">
                  {tentativa.palpite}
                </span>
                <div className="flex gap-4">
                  <span className="text-green-600 font-semibold">
                    {tentativa.bulls} Bulls
                  </span>
                  <span className="text-orange-600 font-semibold">
                    {tentativa.cows} Cows
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default Jogo;
