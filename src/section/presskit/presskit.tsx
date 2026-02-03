import Image from 'next/image';

export default function PresskitSection() {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5] py-16 md:py-24 px-6 md:px-24 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* TÍTULO NO TOPO */}
        <header className="max-w-3xl mb-8 md:mb-12 text-center mx-auto">
          <h2 className="font-display italic font-normal text-6xl md:text-8xl mb-6 md:mb-8 tracking-tighter leading-none">
            PressKit
          </h2>
        </header>

        {/* CONTEÚDO PRINCIPAL: Estrutura diferente para mobile vs desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24">
          {/* DESKTOP: Coluna Esquerda - Carrossel de Imagens (invertemos a ordem) */}
          <div className="hidden lg:flex flex-col gap-6 w-full order-1 lg:order-1">
            <div className="relative h-[400px] w-full rounded-[30px] overflow-hidden shadow-2xl border border-black/5">
              <Image 
                src="/assets/presskit.png" 
                alt="Detalhe Presskit"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="relative h-[400px] w-full rounded-[30px] overflow-hidden shadow-2xl border border-black/5">
              <Image 
                src="/assets/presskit2.jpeg" 
                alt="Experiência Presskit"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          {/* MOBILE: Imagem única entre título e texto */}
          <div className="lg:hidden mb-8">
            <div className="relative h-[400px] w-full rounded-[30px] overflow-hidden shadow-2xl border border-black/5">
              <Image
                src="/assets/presskit.png"
                alt="Detalhe Presskit"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="100vw"
              />
            </div>
          </div>

          {/* DESKTOP & MOBILE: Coluna Direita - Texto */}
          <div className="space-y-8 z-10 order-2 lg:order-2 text-center lg:text-left">
            <div className="space-y-6 font-sans">
              <p className="text-lg md:text-xl leading-relaxed opacity-90 text-pretty">
                As lembranças do evento serão desenvolvidas como uma experiência exclusiva e memorável para os adolescentes. 
                A proposta principal é a criação de um press kit luxuoso, pensado para ser usável e inteligente.
              </p>
              <p className="text-base opacity-70 italic">
                O press kit encontra-se em fase de formatação e atualização, sendo desenvolvido especialmente para esta festa.
              </p>
            </div>

            {/* Lista Técnica */}
            <div className="pt-8 border-t border-black/10">
              <h3 className="font-sans font-black text-sm uppercase tracking-[0.2em] mb-6">
                Proposta de Lembranças:
              </h3>
              <ul className="space-y-3 font-sans text-base opacity-90 text-left">
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  Press kit luxuoso como proposta principal
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  Formatação e desenvolvimento em andamento
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  Possibilidade de ajustes conforme preferência
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  Produção de caixa luxuosa e personalizada
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  Conteúdo interno usável e criativo
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  Personalização individual para cada adolescente
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  Acabamento sofisticado de alto padrão
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-20 pt-10 border-t border-black/5 text-center px-4">
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-30">
            Experiência Memorável • Riquíssimos Maison Experience
          </p>
        </footer>
      </div>
    </section>
  );
}