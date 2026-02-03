"use client";
import Image from 'next/image';

export default function Hero() {
  const scrollToInvestment = () => {
    const section = document.getElementById('investiment');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-[#1A1A1A] text-[#e5e2d9]">
      
      {/* Background de Imagem com Filtro Preto e Branco */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/bg_hero.jpg" // Substitua pelo caminho correto da sua imagem
          alt="Background"
          fill
          priority
          className="object-cover grayscale brightness-50" // grayscale transforma em P&B e brightness-50 escurece para dar leitura
        />
      </div>

      <div className="container mx-auto px-8 md:px-24 z-10 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Coluna Esquerda: Logo e Link */}
        <div className="flex flex-col items-center md:items-start space-y-6 w-full md:w-1/2">
          <div className="w-48 md:w-64 lg:w-80">
            <Image
              src="/assets/logowhite.png"
              alt="Riquíssimos Logo"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>

          <button
            onClick={scrollToInvestment}
            className="mt-4 bg-[#666666] text-white px-10 py-3 rounded-full font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-all shadow-lg active:scale-95 border border-white/10"
          >
            PROPOSTA DOS SONHOS
          </button>
        </div>

        {/* Linha Divisora Vertical */}
        <div className="hidden md:block w-[1px] h-64 bg-white/20"></div>

        {/* Coluna Direita: Informações do Evento */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 w-full md:w-1/2">
          
          <h1 className="font-display italic font-normal text-6xl md:text-8xl lg:text-9xl leading-tight tracking-tighter text-white">
            Aniversário
          </h1>

          <div className="bg-white/10 backdrop-blur-sm px-6 py-2 border border-white/10">
            <p className="font-display italic font-normal text-2xl md:text-4xl lg:text-5xl font-light tracking-wide text-white whitespace-nowrap">
              15 anos, Julia
            </p>
          </div>

          <div className="space-y-1 font-sans text-[10px] md:text-xs tracking-[0.15em] uppercase opacity-80 pt-4 text-white">
            <p>Cliente Silvana | 05 de Março de 2027 | Brasília DF</p>
            <p>Maison Givanchy em Águas Claras</p>
          </div>
        </div>
      </div>
    </section>
  );
}