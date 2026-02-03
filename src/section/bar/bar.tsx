import Image from 'next/image';

export default function BarSection() {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5] py-16 md:py-24 px-6 md:px-24 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* TÍTULO NO TOPO */}
        <header className="max-w-3xl mb-8 md:mb-12 text-center mx-auto">
          <h2 className="font-display italic font-normal text-6xl md:text-8xl mb-6 md:mb-8 tracking-tighter leading-none">
            Bar de Luxo
          </h2>
        </header>

        {/* CONTEÚDO PRINCIPAL: Estrutura diferente para mobile vs desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24">
          {/* DESKTOP: Coluna Esquerda - Imagem (mantendo à esquerda conforme solicitado) */}
          <div className="hidden lg:block relative h-[500px] lg:h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5 order-1">
            <Image
              src="/assets/bar.PNG"
              alt="Cenografia Bar de Luxo"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
          </div>

          {/* MOBILE: Imagem entre título e texto */}
          <div className="lg:hidden mb-8">
            <div className="relative h-[400px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5">
              <Image
                src="/assets/bar.PNG"
                alt="Cenografia Bar de Luxo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* DESKTOP & MOBILE: Coluna Direita - Texto */}
          <div className="space-y-8 z-10 order-2 text-center lg:text-left">
            <div className="space-y-6 font-sans text-lg md:text-xl leading-relaxed opacity-95 text-pretty">
              <p>
                O bar será desenvolvido como um elemento cenográfico de destaque do evento, 
                unindo sofisticação, funcionalidade e personalização total.
              </p>
              <p>
                Com módulos grandes e estruturados para atender até 100 pessoas, o bar será 
                inteiramente pensado dentro da direção criativa da Júlia, com fundo personalizado, 
                estampas exclusivas, monograma e identidade visual alinhados ao conceito da festa.
              </p>
              <p className="text-base md:text-lg opacity-80 border-l-2 border-black/10 pl-6 italic text-left">
                Toda a produção, decoração e operação do bar serão de responsabilidade da 
                Riquíssimos Produções, garantindo alto padrão em cada detalhe.
              </p>
            </div>

            <div className="pt-4">
              <span className="font-sans font-bold text-[10px] uppercase tracking-[0.4em] opacity-40">
                Cenografia • Operação • Design
              </span>
            </div>
          </div>
        </div>

      

        {/* FOOTER */}
        <footer className="mt-20 pt-10 border-t border-black/5 text-center px-4">
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-30">
            Sofisticação e Funcionalidade • Riquíssimos Maison Experience
          </p>
        </footer>
      </div>
    </section>
  );
}