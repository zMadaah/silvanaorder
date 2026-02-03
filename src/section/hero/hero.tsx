"use client";
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#1A1A1A] text-[#e5e2d9]">

      {/* Background de Imagem com Filtro */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/capa.png"
          alt="Background"
          fill
          priority
          className="object-cover brightness-[0.4]"
        />
      </div>

      {/* Conteúdo Central: Logo e Título lado a lado */}
      <div className="container mx-auto px-8 md:px-12 z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        
        {/* Logo Centralizada */}
        <div className="w-40 md:w-64 lg:w-80 transition-transform duration-700">
          <Image
            src="/assets/logowhite.png"
            alt="Riquíssimos Logo"
            width={350}
            height={350}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Linha Divisora Vertical (Só aparece no desktop) */}
        <div className="hidden md:block w-[1px] h-40 bg-white/30"></div>

        {/* Informações do Evento */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h1 className="font-display italic font-normal text-6xl md:text-8xl lg:text-9xl leading-tight tracking-tighter text-white">
            Aniversário
          </h1>

          <div className="bg-white/5 backdrop-blur-md px-6 py-2 border border-white/10 rounded-sm">
            <p className="font-display italic text-2xl md:text-4xl lg:text-5xl tracking-wide text-white whitespace-nowrap">
              15 anos, Julia
            </p>
          </div>

          <div className="font-sans text-[8px] md:text-xs tracking-[0.2em] uppercase opacity-70 pt-4 text-white leading-loose">
            <p>Cliente Silvana • 05 de Março de 2027 • Brasília DF</p>
            <p>Maison Givanchy em Águas Claras</p>
          </div>
        </div>
      </div>

      {/* RODAPÉ: Mensagem Institucional (Antigo botão) */}
      <div className="absolute bottom-10 left-0 w-full z-10 px-8 text-center">
        <div className="max-w-4xl mx-auto border-t border-white/10 pt-6">
          <p className="font-sans font-bold text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-white/60 leading-relaxed">
            Assinamos e executamos projetos completos, pensados em cada detalhe, 
            <span className="block md:inline"> do conceito à entrega final. <strong className="text-white/90">Riquíssimos.</strong></span>
          </p>
        </div>
      </div>

    </section>
  );
}