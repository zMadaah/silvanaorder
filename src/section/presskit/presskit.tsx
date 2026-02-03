import Image from 'next/image';

export default function PresskitSection() {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5] py-16 md:py-24 px-8 md:px-24 text-[#1A1A1A] flex flex-col items-center overflow-hidden">
      
      {/* CONTAINER DA LOGO: Centralizado no Mobile, Absoluto no Desktop */}
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
        
        {/* Coluna do Conteúdo: Agora aparece primeiro no Mobile para definir o contexto */}
        <div className="space-y-8 z-10 order-1 lg:order-2 text-center lg:text-left">
          {/* Título com Logo ao Lado Adaptado para Mobile */}
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
             <h2 className="font-display italic font-normal text-6xl md:text-8xl tracking-tighter leading-none">
                PressKit
             </h2>
             <div className="w-12 h-12 md:w-16 md:h-16 relative">
                <Image 
                  src="/assets/logo.png" 
                  alt="Icone" 
                  fill 
                  className="object-contain opacity-80"
                />
             </div>
          </div>

          <div className="space-y-6 font-sans text-[#1A1A1A]">
            <p className="text-lg md:text-xl leading-relaxed opacity-90 text-pretty">
              As lembranças do evento serão desenvolvidas como uma experiência exclusiva e memorável para os adolescentes. 
              A proposta principal é a criação de um press kit luxuoso, pensado para ser usável e inteligente.
            </p>
            <p className="text-base opacity-70 italic">
              O press kit encontra-se em fase de formatação e atualização, sendo desenvolvido especialmente para esta festa.
            </p>
          </div>

          {/* Lista Técnica - Alinhada ao centro no mobile */}
          <div className="pt-8 border-t border-black/10">
            <h3 className="font-sans font-black text-sm uppercase tracking-[0.2em] mb-6">
              Proposta de Lembranças:
            </h3>
            <ul className="space-y-3 font-sans text-base opacity-90 text-left inline-block lg:block">
              <li>• Press kit luxuoso como proposta principal</li>
              <li>• Formatação e desenvolvimento em andamento</li>
              <li>• Possibilidade de ajustes conforme preferência</li>
              <li>• Produção de caixa luxuosa e personalizada</li>
              <li>• Conteúdo interno usável e criativo</li>
              <li>• Personalização individual para cada adolescente</li>
              <li>• Acabamento sofisticado de alto padrão</li>
            </ul>
          </div>
        </div>

        {/* Coluna das Imagens: Aparece depois do texto no Mobile */}
        <div className="flex flex-col gap-6 order-2 lg:order-1 w-full">
          <div className="relative h-[300px] md:h-[400px] w-full rounded-[30px] overflow-hidden shadow-lg border border-black/5">
            <Image 
              src="/assets/presskit.png" 
              alt="Detalhe Presskit"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="relative h-[300px] md:h-[400px] w-full rounded-[30px] overflow-hidden shadow-lg border border-black/5">
            <Image 
              src="/assets/presskit2.jpeg" 
              alt="Experiência Presskit"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}