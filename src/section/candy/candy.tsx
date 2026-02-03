import Image from 'next/image';

export default function CandySection() {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5] flex flex-col items-center py-16 md:py-24 px-8 md:px-24 overflow-hidden">
      
      {/* Container da Logo */}
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Coluna do Texto: Forçando a cor escura explicitamente */}
        <div className="space-y-8 z-10 order-2 lg:order-1 text-[#1A1A1A]">
          <header>
            <h2 className="font-display italic font-normal text-6xl md:text-8xl text-[#1A1A1A] mb-6 tracking-tighter leading-none">
              Doces Finos
            </h2>
            <div className="space-y-4 font-sans text-lg md:text-xl leading-relaxed text-[#1A1A1A]/90 text-pretty">
              <p>
                A mesa de doces será cuidadosamente pensada para atender até 100 convidados, 
                unindo variedade, sofisticação e alto padrão estético.
              </p>
              <p>
                Cada detalhe será desenvolvido dentro da direção criativa do evento, 
                garantindo harmonia visual, acabamento impecável e uma experiência doce 
                à altura da celebração.
              </p>
            </div>
          </header>

          {/* Lista Técnica de Composição com cor reforçada */}
          <div className="pt-8 border-t border-black/10 text-[#1A1A1A]">
            <h3 className="font-sans font-black text-sm uppercase tracking-[0.2em] mb-6 text-[#1A1A1A]">
              Composição dos Doces:
            </h3>
            <ul className="space-y-3 font-sans text-base opacity-90 text-[#1A1A1A]">
              <li>• Total de 1.000 doces para até 100 pessoas</li>
              <li>• 300 doces finos</li>
              <li>• 400 doces tradicionais</li>
              <li>• 300 doces modelados de luxo (tema 15 anos)</li>
              <li>• 1.000 forminhas de doces em tecido luxo, estampadas conforme a identidade</li>
              <li>• 150 bem-vividos personalizados, com estampas e cores exclusivas</li>
            </ul>
          </div>
        </div>

        {/* Coluna da Imagem */}
        <div className="relative h-[400px] md:h-[600px] lg:h-[700px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5 order-1 lg:order-2">
          <Image
            src="/assets/doce.png" 
            alt="Exibição de Doces Finos"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

      </div>

      {/* Marca d'água */}
      <div className="absolute left-[-50px] bottom-20 rotate-90 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <span className="font-display italic text-8xl tracking-widest uppercase text-black">
          Gastronomia
        </span>
      </div>
      
    </section>
  );
}