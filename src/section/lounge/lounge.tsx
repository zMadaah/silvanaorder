import Image from 'next/image';


import lounge from "../../../public/assets/lounge.png"

export default function LoungeSection() {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5] flex items-center py-20 px-8 md:px-24 overflow-hidden">
      
      {/* Logo Padrão no Canto Superior Direito (Consistência em todas as telas) */}
      <div className="absolute top-10 right-10 w-24 md:w-28 z-20">
       
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Coluna da Esquerda: Imagem do Lounge */}
        <div className="relative h-[500px] md:h-[700px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5 order-2 lg:order-1">
          <Image 
            src="/assets/lounge.png" // Certifique-se de ter esta imagem na pasta public/assets
            alt="Cenografia de Lounge Luxuosa"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
        </div>

        {/* Coluna da Direita: Texto e Logo ao lado do Título */}
        <div className="space-y-8 z-10 order-1 lg:order-2">
          <header className="space-y-6">
            <div className="flex items-center gap-6">
              <h2 className="font-display italic font-normal text-6xl md:text-8xl text-[#1A1A1A] tracking-tight">
                Lounge
              </h2>
              {/* Logo ao lado do título conforme solicitado */}
              <div className="w-16 h-16 relative">
                <Image 
                  src="/assets/logo.png"  
                  alt="Icone Riquíssimos" 
                  fill 
                  className="object-contain opacity-90"
                />
              </div>
            </div>

            <div className="space-y-6 font-sans text-lg md:text-xl leading-relaxed text-[#333] opacity-90 text-pretty">
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

          {/* Destaque sutil de rodapé interno */}
          <div className="pt-8 border-t border-black/10">
            <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] opacity-50">
              Conforto • Integração • Sofisticação
            </p>
          </div>
        </div>

      </div>

      {/* Marca d'água de fundo (Opcional, seguindo o estilo Moodboard) */}
      <div className="absolute right-[-100px] bottom-10 rotate-[-90deg] opacity-[0.03] select-none pointer-events-none">
        <span className="font-display italic text-9xl tracking-tighter uppercase text-black">
          Atmosphere
        </span>
      </div>
      
    </section>
  );
}