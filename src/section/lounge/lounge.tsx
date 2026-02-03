import Image from 'next/image';

export default function LoungeSection() {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5] py-16 md:py-24 px-6 md:px-24 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* TÍTULO NO TOPO */}
        <header className="max-w-3xl mb-8 md:mb-12 text-center mx-auto">
          <h2 className="font-display italic font-normal text-6xl md:text-8xl mb-6 md:mb-8 tracking-tighter leading-none">
            Lounge
          </h2>
        </header>

        {/* CONTEÚDO PRINCIPAL: Estrutura diferente para mobile vs desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24">
          {/* DESKTOP: Coluna Esquerda - Texto */}
          <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-6 font-sans text-lg md:text-xl leading-relaxed opacity-90 text-pretty">
              <p>
                O lounge será um espaço de convivência criado para oferecer conforto, integração 
                e sofisticação aos adolescentes, funcionando como um ponto de encontro elegante dentro da festa.
              </p>
              <p>
                Pensado de forma intuitiva e moderna, o ambiente valoriza a experiência dos convidados 
                por meio de uma cenografia luxuosa e cuidadosamente planejada.
              </p>
            </div>

            <div className="pt-8 border-t border-black/10">
              <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] opacity-50">
                Conforto • Integração • Sofisticação
              </p>
            </div>
          </div>

          {/* MOBILE: Imagem entre título e texto */}
          <div className="lg:hidden mb-8">
            <div className="relative h-[400px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5">
              <Image
                src="/assets/espaco.PNG"
                alt="Cenografia de Lounge Luxuosa"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* DESKTOP: Coluna Direita - Imagem */}
          <div className="hidden lg:block relative h-[500px] lg:h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5 order-1 lg:order-2">
            <Image
              src="/assets/espaco.PNG"
              alt="Cenografia de Lounge Luxuosa"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-20 pt-10 border-t border-black/5 text-center px-4">
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-30">
            Experiência de Convivência • Riquíssimos Maison Experience
          </p>
        </footer>
      </div>
    </section>
  );
}