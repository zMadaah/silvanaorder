import Image from 'next/image';

export default function PistaDanca() {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5] flex flex-col items-center py-16 md:py-24 px-8 md:px-24 overflow-hidden">
      
      {/* Container da Logo: Ajustado para ser proporcional e não sobrepor no mobile */}
      <div className="flex justify-end w-full mb-8 md:mb-0 md:absolute md:top-10 md:right-10 z-20">
        <div className="w-20 md:w-28">
          <Image 
            src="/assets/logo.png"  
            alt="Riquíssimos" 
            width={110} 
            height={110} 
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Coluna da Esquerda: Imagem de Impacto da Pista */}
        <div className="relative h-[400px] md:h-[600px] lg:h-[800px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5 order-1 lg:order-1">
          <Image 
            src="/assets/pista.jpeg" 
            alt="Cenografia Pista de Dança e LED"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
        </div>

        {/* Coluna da Direita: Conteúdo */}
        <div className="space-y-8 z-10 order-2 lg:order-2">
          <header className="space-y-8">
            <h2 className="font-display italic font-normal text-6xl md:text-8xl text-[#1A1A1A] tracking-tighter leading-none">
              Pista de Dança
            </h2>

            <div className="space-y-8 font-sans text-lg md:text-xl leading-relaxed text-[#333] opacity-95 text-pretty">
              <p>
                A pista de dança será o epicentro da energia do evento, projetada para ser um 
                espetáculo visual à parte. Unimos tecnologia e design para criar um ambiente 
                imersivo e instagramável.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-sans font-bold text-sm uppercase tracking-[0.2em] text-[#a3779d]">Destaques Tecnológicos:</h4>
                <ul className="space-y-3 font-sans text-base md:text-lg opacity-80">
                  <li>• Painéis de LED de alta definição com conteúdos exclusivos</li>
                  <li>• Piso personalizado com o monograma da Júlia</li>
                  <li>• Estrutura de iluminação computadorizada sincronizada</li>
                  <li>• Cenografia aérea integrada para preenchimento do espaço</li>
                </ul>
              </div>

              <p className="text-base md:text-lg opacity-80 border-l-2 border-[#a3779d] pl-6 italic">
                Toda a comunicação visual da pista seguirá rigorosamente o branding do evento, 
                garantindo que cada foto e vídeo tenha a identidade da marca Julia XV.
              </p>
            </div>
          </header>

          <div className="pt-4">
            <span className="font-sans font-bold text-[10px] uppercase tracking-[0.4em] opacity-40">
              Technology • Energy • Visual Design
            </span>
          </div>
        </div>

      </div>

      {/* Marca d'água lateral sutil */}
      <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 -rotate-90 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <span className="font-display italic text-9xl tracking-widest uppercase text-black">
          Experience
        </span>
      </div>
      
    </section>
  );
}