import Image from 'next/image';

export default function BrandingSection() {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5] flex items-center justify-center py-24 px-8 overflow-hidden">
      
      {/* 1. Logo Riquíssimos no Canto Superior Direito */}
      {/* Conforme solicitado, posicionado fixamente nesta parte do código */}
      <div className="absolute top-12 right-12 w-24 md:w-32 z-20">
        <Image 
          src="/assets/logo.png" 
          alt="Riquíssimos Logo" 
          width={130} 
          height={130} 
          className="object-contain"
        />
      </div>

      {/* 2. Marca d'água "Moodboard" Vertical */}
      {/* Replicando o detalhe visual da lateral direita da imagem */}
      <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 rotate-90 select-none pointer-events-none">
        <span className="font-display italic text-[180px] leading-none text-black/[0.03] uppercase tracking-tighter">
          Moodboard
        </span>
      </div>

      {/* 3. Conteúdo Centralizado */}
      <div className="max-w-5xl w-full text-center z-10 space-y-10">
        
        {/* Título com Playfair Display Italic */}
        <h2 className="font-display italic font-normaltext-5xl md:text-9xl text-[#1A1A1A] leading-[1.1] tracking-tight">
          Branding do Evento
        </h2>
        
        {/* Descrição em Inter (Sans) */}
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-xl md:text-2xl leading-relaxed text-[#333] opacity-90 text-pretty">
            Concebemos o aniversário como uma marca de alto padrão. Uma identidade autoral, 
            criada para expressar sofisticação, traduzir a personalidade da aniversariante 
            e sustentar uma experiência visual consistente, elegante e memorável do início ao fim.
          </p>
        </div>

      </div>

      {/* 4. Rodapé sutil de referência (Opcional, seguindo o padrão das outras telas) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <span className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-30">
          Maison Experience
        </span>
      </div>
      
    </section>
  );
}