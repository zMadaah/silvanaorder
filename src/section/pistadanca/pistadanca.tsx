import Image from 'next/image';

export default function PistaDanca() {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5] py-16 md:py-24 px-6 md:px-24 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* TÍTULO NO TOPO */}
        <header className="max-w-3xl mb-8 md:mb-12 text-center mx-auto">
          <h2 className="font-display italic font-normal text-6xl md:text-8xl mb-6 md:mb-8 tracking-tighter leading-none">
            Pista de Dança
          </h2>
        </header>

        {/* CONTEÚDO PRINCIPAL: Estrutura diferente para mobile vs desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24">
          {/* DESKTOP: Coluna Esquerda - Texto */}
          <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-6 font-sans text-lg md:text-xl leading-relaxed opacity-95 text-pretty">
              <p>
                A pista de dança será o epicentro da energia do evento, projetada para ser um 
                espetáculo visual à parte. Unimos tecnologia e design para criar um ambiente 
                imersivo e instagramável.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-sans font-bold text-sm uppercase tracking-[0.2em] text-[#a3779d]">Destaques Tecnológicos:</h4>
                <ul className="space-y-3 font-sans text-base md:text-lg opacity-80 text-left">
                  <li className="flex items-start">
                    <span className="mr-3 text-[#a3779d]">•</span>
                    Painéis de LED de alta definição
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[#a3779d]">•</span>
                    Piso personalizado com o monograma
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[#a3779d]">•</span>
                    Iluminação computadorizada sincronizada
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[#a3779d]">•</span>
                    Cenografia aérea integrada
                  </li>
                </ul>
              </div>

              <p className="text-base md:text-lg opacity-80 border-l-2 border-[#a3779d] pl-6 italic text-left">
                Toda a comunicação visual da pista seguirá rigorosamente o branding do evento, 
                garantindo que cada foto e vídeo tenha a identidade da marca Julia XV.
              </p>
            </div>

            <div className="pt-4">
              <span className="font-sans font-bold text-[10px] uppercase tracking-[0.4em] opacity-40">
                Technology • Energy • Visual Design
              </span>
            </div>
          </div>

          {/* MOBILE: Imagem entre título e texto */}
          <div className="lg:hidden mb-8">
            <div className="relative h-[400px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5">
              <Image
                src="/assets/pista.jpeg"
                alt="Cenografia Pista de Dança e LED"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* DESKTOP: Coluna Direita - Imagem */}
          <div className="hidden lg:block relative h-[500px] lg:h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5 order-1 lg:order-2">
            <Image
              src="/assets/pista.jpeg"
              alt="Cenografia Pista de Dança e LED"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-20 pt-10 border-t border-black/5 text-center px-4">
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-30">
            Tecnologia e Energia • Riquíssimos Maison Experience
          </p>
        </footer>
      </div>
    </section>
  );
}