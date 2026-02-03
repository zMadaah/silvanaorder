import Image from 'next/image';

export default function BarSection() {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5] flex flex-col lg:flex-row items-center py-16 md:py-24 px-8 md:px-24 overflow-hidden">
      
      {/* CONTAINER DA LOGO: Centralizado no Mobile, Absoluto à direita no Desktop */}
      <div className="flex justify-center md:justify-end w-full mb-10 md:mb-0 md:absolute md:top-10 md:right-10 z-20">
        <div className="w-24 md:w-28">
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
        
        {/* Coluna da Esquerda: Imagem */}
        <div className="relative h-[400px] md:h-[600px] lg:h-[800px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5">
          <Image 
            src="/assets/bar.PNG"
            alt="Cenografia Bar de Luxo"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
        </div>

        {/* Coluna da Direita: Conteúdo */}
        <div className="space-y-8 z-10 text-center md:text-left">
          <header className="space-y-8">
            <h2 className="font-display italic font-normal text-6xl md:text-8xl text-[#1A1A1A] tracking-tighter leading-none">
              Bar de Luxo
            </h2>

            <div className="space-y-8 font-sans text-lg md:text-xl leading-relaxed text-[#333] opacity-95 text-pretty">
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
          </header>

          <div className="pt-4">
            <span className="font-sans font-bold text-[10px] uppercase tracking-[0.4em] opacity-40">
              Cenografia • Operação • Design
            </span>
          </div>
        </div>
      </div>

      {/* Marca d'água */}
      <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 -rotate-90 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <span className="font-display italic text-9xl tracking-widest uppercase text-black">
          Exclusive
        </span>
      </div>
    </section>
  );
}