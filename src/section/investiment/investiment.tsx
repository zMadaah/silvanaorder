import Image from 'next/image';

export default function InvestimentoSection() {
  return (
    <section id="investiment" className="relative min-h-screen bg-[#F5F5F5] py-16 md:py-24 px-8 md:px-24 text-[#1A1A1A] flex flex-col justify-center overflow-hidden">
      
      {/* Título Principal CENTRALIZADO */}
      <div className="max-w-6xl mx-auto w-full space-y-12">
        <div className="text-center">
          <h2 className="font-display italic font-normal text-6xl md:text-9xl tracking-tighter mb-4">
            Investimento
          </h2>
        </div>

        {/* Card de Valor Principal AJUSTADO RESPONSIVAMENTE */}
        <div className="relative group max-w-md md:max-w-3xl mx-auto w-full">
          <div className="bg-[#222] rounded-full py-5 md:py-10 px-6 md:px-12 text-center border-4 border-[#B89B5E]/30 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <span className="font-sans font-bold text-2xl sm:text-3xl md:text-6xl text-white tracking-[0.15em] md:tracking-widest whitespace-nowrap">
              R$ 79.900,00
            </span>
          </div>
          {/* Brilho decorativo de fundo */}
          <div className="absolute inset-0 bg-[#B89B5E] opacity-10 blur-3xl -z-10 group-hover:opacity-20 transition-opacity" />
        </div>

        {/* Seção Extensão Premium */}
        <div className="bg-gradient-to-br from-[#99999] via-[#b2b2b2] to-[#cccccc] rounded-[40px] md:rounded-[50px] p-8 md:p-16 shadow-2xl border border-white/10">
          <header className="text-center mb-10 border-b border-white/20 pb-8 text-white">
            <h3 className="font-sans font-black text-sm md:text-lg uppercase tracking-[0.3em] mb-2">
              Extensão Premium
            </h3>
            <p className="font-sans font-normal text-sm md:text-base opacity-90 tracking-wide">
              No fechamento da proposta será disponibilizada como cortesia:
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Cortesia 1: Audiovisual */}
            <div className="space-y-6">
              <div className="relative h-60 md:h-64 w-full rounded-[30px] overflow-hidden shadow-lg border border-white/10 group">
                <Image 
                  src="/assets/visual.jpeg" 
                  alt="Projeto Audiovisual"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="text-center md:text-left text-white">
                <h4 className="font-sans font-bold text-xl mb-1 italic">Projeto AudioVisual</h4>
                <p className="font-sans opacity-80 italic text-sm">com drone (filme da festa)</p>
              </div>
            </div>

            {/* Cortesia 2: Limousine */}
            <div className="space-y-6">
              <div className="relative h-60 md:h-64 w-full rounded-[30px] overflow-hidden shadow-lg border border-white/10 group">
                <Image 
                  src="/assets/limousine.png" 
                  alt="Limousine Exclusiva"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="text-center md:text-left text-white">
                <h4 className="font-sans font-bold text-xl mb-1 italic">Limousine Exclusiva</h4>
                <p className="font-sans opacity-80 italic text-sm">Para o momento de chegada da debutante</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}