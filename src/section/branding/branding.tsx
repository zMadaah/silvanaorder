import Image from 'next/image';

export default function BrandingSection() {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center py-16 md:py-24 px-8 overflow-hidden">
      
      {/* 1. Logo: Centralizada no Mobile, Absoluta no Desktop */}
      <div className="flex justify-center md:justify-end w-full mb-10 md:mb-0 md:absolute md:top-12 md:right-12 z-20">
        <div className="w-24 md:w-32">
          <Image 
            src="/assets/logo.png" 
            alt="Riquíssimos Logo" 
            width={120} 
            height={120} 
            className="object-contain"
          />
        </div>
      </div>

      {/* 3. Conteúdo Centralizado */}
      <div className="max-w-5xl w-full text-center z-10 space-y-10">
        
        {/* Título com Playfair Display Italic e Tracking Ajustado */}
        <h2 className="font-display italic font-normal text-6xl md:text-9xl text-[#1A1A1A] leading-none tracking-tighter">
          Branding do Evento
        </h2>
        
        {/* Descrição em Inter (Sans) com ajuste de cor para legibilidade mobile */}
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-xl md:text-2xl leading-relaxed text-[#1A1A1A] opacity-90 text-pretty">
            Concebemos o aniversário como uma marca de alto padrão. Uma identidade autoral, 
            criada para expressar sofisticação, traduzir a personalidade da aniversariante 
            e sustentar uma experiência visual consistente, elegante e memorável do início ao fim.
          </p>
        </div>

      </div>

      {/* 4. Rodapé sutil de referência */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <span className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-30 text-[#1A1A1A]">
          Maison Experience
        </span>
      </div>
      
    </section>
  );
}