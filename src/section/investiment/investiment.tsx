import Image from 'next/image';

export default function InvestimentoSection() {
  return (
    <section id="investiment" className="relative min-h-screen bg-[#F5F5F5] py-16 md:py-24 px-8 md:px-24 text-[#1A1A1A] flex flex-col justify-center overflow-hidden">
      
      {/* Logo Responsiva: relativa no mobile, absoluta no desktop */}
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

      <div className="max-w-6xl mx-auto w-full space-y-12">
        {/* Título Principal CENTRALIZADO com tipografia ajustada */}
        <div className="text-center">
          <h2 className="font-display italic font-normal text-6xl md:text-9xl tracking-tighter mb-4">
            Investimento
          </h2>
        </div>

        {/* Card de Valor Principal */}
        <div className="relative group">
          <div className="bg-[#222] rounded-full py-6 md:py-10 px-12 text-center border-4 border-[#B89B5E]/30 shadow-2xl">
            <span className="font-sans font-bold text-3xl md:text-6xl text-white tracking-widest">
              R$ 79.900,00
            </span>
          </div>
          <div className="absolute inset-0 bg-[#B89B5E] opacity-10 blur-3xl -z-10 group-hover:opacity-20 transition-opacity" />
        </div>

        {/* Seção Extensão Premium com DEGRADÊ ROXO (#a3779d) */}
        <div className="bg-gradient-to-br from-[#999999] via-[#b2b2b2] to-[#cccccc] rounded-[50px] p-8 md:p-16 shadow-2xl border border-white/10">
          <header className="text-center mb-12 border-b border-white/20 pb-8 text-white">
            <h3 className="font-sans font-black text-sm md:text-lg uppercase tracking-[0.3em] mb-2 text-white">
              Extensão Premium
            </h3>
            <p className="font-display italic text-xl md:text-2xl opacity-90 tracking-tight">
              No fechamento da proposta disponibilizaremos como cortesia:
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Cortesia 1: Audiovisual */}
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-[30px] overflow-hidden shadow-lg border border-white/10">
                <Image 
                  src="/assets/visual.jpeg" 
                  alt="Projeto Audiovisual"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center md:text-left text-white">
                <h4 className="font-sans font-bold text-xl mb-1 italic">Projeto AudioVisual</h4>
                <p className="font-sans opacity-80 italic text-sm md:text-base">com drone (filme da festa)</p>
              </div>
            </div>

            {/* Cortesia 2: Limousine */}
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-[30px] overflow-hidden shadow-lg border border-white/10">
                <Image 
                  src="/assets/limousine.png" 
                  alt="Limousine Exclusiva"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center md:text-left text-white">
                <h4 className="font-sans font-bold text-xl mb-1 italic">Limousine Exclusiva</h4>
                <p className="font-sans opacity-80 italic text-sm md:text-base">Para o momento de chegada da debutante</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé Final sutil */}
        {/* <footer className="text-center pt-8">
          <p className="font-sans text-[10px] tracking-[0.5em] opacity-30 uppercase">
            riquissimosoficial.com.br
          </p>
        </footer> */}
      </div>
    </section>
  );
}