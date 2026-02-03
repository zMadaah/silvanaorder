import Image from 'next/image';

export default function Order() {
  return (
    <section className="relative min-h-screen bg-[#F3F3F3] py-16 md:py-24 px-6 md:px-24 text-[#1A1A1A] overflow-hidden flex flex-col items-center">
      
      {/* 1. Logo Responsiva: relativa no mobile para não atropelar o título */}
      <div className="flex justify-end w-full mb-8 md:mb-0 md:absolute md:top-12 md:right-12 z-20">
        <div className="w-20 md:w-32">
          <Image 
            src="/assets/logo.png" 
            alt="Riquíssimos" 
            width={120} 
            height={120}
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
        
        {/* 2. Cabeçalho Principal com Tipografia Ajustada */}
        <header className="border-b border-black/10 pb-10 text-center md:text-left">
          <h1 className="font-display italic font-normal text-6xl md:text-8xl tracking-tighter mb-4">
            Proposta Silvana
          </h1>
          <p className="font-sans font-bold text-[10px] md:text-sm uppercase tracking-[0.25em] opacity-80">
            Aniversário da filha de 15 anos
          </p>
        </header>

        {/* 3. Conteúdo da Proposta */}
        <article className="space-y-12">
          
          {/* O Conceito */}
          <div className="space-y-4">
            <h2 className="font-sans font-extrabold text-base md:text-lg uppercase tracking-wider">
              O Conceito: <span className="font-normal opacity-70 italic">Uma Celebração Encantadora e Única</span>
            </h2>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-pretty opacity-90">
              Celebrar 15 anos é viver um momento mágico, onde a personalidade da aniversariante precisa brilhar em cada detalhe. 
              Por isso, criamos para 2027 uma proposta super encantadora e delicada, pensada para ser luxuosa.
            </p>
          </div>

          {/* O Objetivo */}
          <div className="space-y-4">
            <p className="font-sans text-lg md:text-xl leading-relaxed text-pretty opacity-90">
              O nosso objetivo é criar uma atmosfera envolvente, onde tudo conversa entre si. 
              Acreditamos que uma festa verdadeiramente encantadora nasce da harmonia: quando a identidade visual, as flores e a cenografia se unem para contar a mesma história.
            </p>
          </div>

          {/* Experiência Completa - Card com bordas suaves */}
          <div className="bg-white p-8 md:p-14 rounded-[40px] md:rounded-[50px] shadow-sm border border-black/5">
            <h3 className="font-display italic text-2xl md:text-4xl mb-6 tracking-tight">
              Uma Experiência Completa (Do Início ao Fim)
            </h3>
            <p className="font-sans text-base md:text-lg leading-relaxed opacity-90">
              Para garantir esse resultado visual incrível e otimizar o seu investimento, nossa proposta abraça o evento como um todo. 
              Cuidamos desde a criação da marca da festa até o último detalhe da pista de dança. 
              Assim, garantimos sofisticação e tranquilidade para vocês, com um visual de alto impacto.
            </p>
          </div>

        </article>
      </div>
    </section>
  );
}