import Image from 'next/image';

export default function PistaDanca() {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5] flex flex-col items-center py-16 md:py-24 px-8 md:px-24 overflow-hidden">
      
      {/* CONTAINER DA LOGO: Centralizado no Mobile, Absoluto no Desktop */}
      

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Coluna da Imagem: Ordem ajustada para mobile (aparece primeiro) */}
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

        {/* Coluna do Conteúdo: Centralizado no Mobile */}
        <div className="space-y-8 z-10 order-2 lg:order-2 text-center lg:text-left">
          <header className="space-y-8">
            <h2 className="font-display italic font-normal text-6xl md:text-8xl text-[#1A1A1A] tracking-tighter leading-none">
              Pista de Dança
            </h2>

            <div className="space-y-8 font-sans text-lg md:text-xl leading-relaxed text-[#1A1A1A] opacity-95 text-pretty">
              <p>
                A pista de dança será o epicentro da energia do evento, projetada para ser um 
                espetáculo visual à parte. Unimos tecnologia e design para criar um ambiente 
                imersivo e instagramável.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-sans font-bold text-sm uppercase tracking-[0.2em] text-[#a3779d]">Destaques Tecnológicos:</h4>
                <ul className="space-y-3 font-sans text-base md:text-lg opacity-80 text-left inline-block lg:block">
                  <li>• Painéis de LED de alta definição</li>
                  <li>• Piso personalizado com o monograma</li>
                  <li>• Iluminação computadorizada sincronizada</li>
                  <li>• Cenografia aérea integrada</li>
                </ul>
              </div>

              <p className="text-base md:text-lg opacity-80 border-l-2 border-[#a3779d] pl-6 italic text-left">
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
    </section>
  );
}