import Image from 'next/image';

export default function CandySection() {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5] py-16 md:py-24 px-6 md:px-24 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* TÍTULO NO TOPO */}
        <header className="max-w-3xl mb-8 md:mb-12 text-center mx-auto">
          <h2 className="font-display italic font-normal text-6xl md:text-8xl mb-6 md:mb-8 tracking-tighter leading-none">
            Doces Finos
          </h2>
        </header>

        {/* CONTEÚDO PRINCIPAL: Estrutura diferente para mobile vs desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24">
          {/* MOBILE: Imagem entre título e texto */}
          <div className="lg:hidden mb-8">
            <div className="relative h-[400px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5">
              <Image
                src="/assets/doce.png"
                alt="Exibição de Doces Finos"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* DESKTOP: Coluna Esquerda - Texto */}
          <div className="space-y-8 z-10 order-2 lg:order-1 text-center lg:text-left">
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

            {/* Lista Técnica de Composição */}
            <div className="pt-8 border-t border-black/10">
              <h3 className="font-sans font-black text-sm uppercase tracking-[0.2em] mb-6">
                Composição dos Doces:
              </h3>
              <ul className="space-y-3 font-sans text-base opacity-90 text-left">
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  Total de 1.000 doces para até 100 pessoas
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  300 doces finos
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  400 doces tradicionais
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  300 doces modelados de luxo (tema 15 anos)
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  1.000 forminhas de doces em tecido luxo
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  150 bem-vividos personalizados
                </li>
              </ul>
            </div>
          </div>

          {/* DESKTOP: Coluna Direita - Imagem */}
          <div className="hidden lg:block relative h-[500px] lg:h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5 order-1 lg:order-2">
            <Image
              src="/assets/doce.png"
              alt="Exibição de Doces Finos"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* FOOTER (se necessário) */}
        <footer className="mt-20 pt-10 border-t border-black/5 text-center px-4">
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-30">
            Excelência em Confeitaria • Riquíssimos Maison Experience
          </p>
        </footer>
      </div>
    </section>
  );
}