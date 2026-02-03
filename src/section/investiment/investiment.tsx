import Image from 'next/image';

export default function InvestimentoSection() {
  return (
    <section id="investiment" className="relative min-h-screen bg-[#F5F5F5] py-16 md:py-24 px-6 md:px-24 text-[#1A1A1A] flex flex-col justify-center overflow-hidden">
      
      {/* Título Principal CENTRALIZADO */}
      <div className="max-w-6xl mx-auto w-full space-y-12">
        <div className="text-center">
          <h2 className="font-display italic font-normal text-6xl md:text-8xl tracking-tighter mb-4">
            Investimento
          </h2>
        </div>

        {/* Card de Valor Principal COM EFEITO BLUR NO HOVER */}
        <div className="relative group max-w-sm md:max-w-lg mx-auto w-full">
          <div className="relative bg-[#222] rounded-full py-6 md:py-8 px-8 md:px-12 text-center border-2 md:border-3 border-[#B89B5E]/20 shadow-lg transition-all duration-500 overflow-hidden">
            {/* Efeito de blur aplicado no hover */}
            <div className="transition-all duration-500 group-hover:blur-sm">
              <span className="font-display font-normal text-3xl sm:text-4xl md:text-5xl text-white tracking-[0.1em] md:tracking-[0.15em] whitespace-nowrap">
                Valores
              </span>
            </div>
            {/* Texto que aparece no hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <span className="font-sans font-bold text-xl md:text-2xl text-white/90 tracking-wider italic">
                R$ 79.900,00
              </span>
            </div>
          </div>
        </div>

        {/* Seção Extensão Premium - SEM EFEITOS DE BRILHO */}
        <div className="bg-gradient-to-br from-[#999999] via-[#b2b2b2] to-[#cccccc] rounded-[30px] md:rounded-[40px] p-6 md:p-12 shadow-lg border border-white/10">
          <header className="text-center mb-8 border-b border-white/20 pb-6 text-white">
            <h3 className="font-sans font-black text-sm md:text-base uppercase tracking-[0.3em] mb-2">
              Extensão Premium
            </h3>
            <p className="font-sans font-normal text-sm md:text-base opacity-90 tracking-wide">
              No fechamento da proposta será disponibilizada como cortesia:
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Cortesia 1: Audiovisual */}
            <div className="space-y-4">
              <div className="relative h-48 md:h-56 w-full rounded-[25px] overflow-hidden shadow-md border border-white/10 group">
                <Image 
                  src="/assets/visual.jpeg" 
                  alt="Projeto Audiovisual"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="text-center md:text-left text-white">
                <h4 className="font-sans font-bold text-lg md:text-xl mb-1 italic">Projeto AudioVisual</h4>
                <p className="font-sans opacity-80 italic text-xs md:text-sm">com drone (filme da festa)</p>
              </div>
            </div>

            {/* Cortesia 2: Limousine */}
            <div className="space-y-4">
              <div className="relative h-48 md:h-56 w-full rounded-[25px] overflow-hidden shadow-md border border-white/10 group">
                <Image 
                  src="/assets/limousine.png" 
                  alt="Limousine Exclusiva"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="text-center md:text-left text-white">
                <h4 className="font-sans font-bold text-lg md:text-xl mb-1 italic">Limousine Exclusiva</h4>
                <p className="font-sans opacity-80 italic text-xs md:text-sm">Para o momento de chegada da debutante</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}