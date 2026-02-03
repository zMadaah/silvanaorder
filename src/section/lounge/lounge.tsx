import Image from 'next/image';

export default function LoungeSection() {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5] flex flex-col items-center py-16 md:py-24 px-8 md:px-24 overflow-hidden">
      
      {/* CONTAINER DA LOGO: Centralizado no Mobile, Absoluto no Desktop */}
      

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Coluna da Imagem: Ordem ajustada para mobile (aparece primeiro) */}
        <div className="relative h-[400px] md:h-[600px] lg:h-[700px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5 order-1 lg:order-1">
          <Image 
            src="/assets/espaco.PNG" 
            alt="Cenografia de Lounge Luxuosa"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
        </div>

        {/* Coluna do Texto: Centralizada no Mobile */}
        <div className="space-y-8 z-10 order-2 lg:order-2 text-center lg:text-left text-[#1A1A1A]">
          <header className="space-y-6">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
              <h2 className="font-display italic font-normal text-6xl md:text-8xl text-[#1A1A1A] tracking-tighter leading-none">
                Lounge
              </h2>
              {/* Ícone ao lado do título (fica abaixo do título no mobile para manter o eixo central) */}
             
            </div>

            <div className="space-y-6 font-sans text-lg md:text-xl leading-relaxed text-[#1A1A1A] opacity-90 text-pretty">
              <p>
                O lounge será um espaço de convivência criado para oferecer conforto, integração 
                e sofisticação aos adolescentes, funcionando como um ponto de encontro elegante dentro da festa.
              </p>
              <p>
                Pensado de forma intuitiva e moderna, o ambiente valoriza a experiência dos convidados 
                por meio de uma cenografia luxuosa e cuidadosamente planejada.
              </p>
            </div>
          </header>

          <div className="pt-8 border-t border-black/10">
            <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] opacity-50">
              Conforto • Integração • Sofisticação
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}