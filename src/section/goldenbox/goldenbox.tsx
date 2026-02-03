import Image from 'next/image';

export default function GoldenBoxSection() {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5] flex flex-col items-center py-16 md:py-24 px-8 md:px-24 overflow-hidden">
      
      {/* Container da Logo: Posicionamento Inteligente para Mobile */}
      <div className="flex justify-end w-full mb-8 md:mb-0 md:absolute md:top-10 md:right-10 z-20">
        <div className="w-20 md:w-28">
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
        
        {/* Coluna da Esquerda: Texto e Detalhes */}
        <div className="space-y-8 z-10 order-2 lg:order-1">
          <header className="space-y-8">
            <div>
              <h2 className="font-display italic font-normal text-5xl md:text-7xl lg:text-8xl text-[#1A1A1A] leading-tight tracking-tighter">
                Golden Box <br/>
                <span className="text-3xl md:text-4xl lg:text-5xl opacity-70 block mt-2">O Início da Experiência</span>
              </h2>
            </div>

            <div className="space-y-8 font-sans text-lg md:text-xl leading-relaxed text-[#333] opacity-95 text-pretty">
              <p>
                Para oficializar o início da nossa jornada, cerca de 25 dias após o fechamento do contrato, 
                a Silvana receberá em seu endereço a nossa exclusiva Golden Box.
              </p>
              
              <p>
                Esta entrega simboliza o nosso compromisso e carinho, contendo dois itens especiais:
              </p>

              <div className="space-y-6 pt-4">
                <div className="border-l-4 border-[#a3779d] pl-6">
                  <h4 className="font-bold text-[#a3779d] uppercase text-sm tracking-widest mb-2">O Presente Eterno:</h4>
                  <p className="text-base md:text-lg">
                    Uma corrente de ouro, um mimo da Riquíssimos que fica para a cliente como recordação do nosso vínculo.
                  </p>
                </div>

                <div className="border-l-4 border-[#a3779d] pl-6">
                  <h4 className="font-bold text-[#a3779d] uppercase text-sm tracking-widest mb-2">A Ferramenta de Gestão:</h4>
                  <p className="text-base md:text-lg">
                    Um iPad configurado exclusivamente para o acompanhamento do evento.
                  </p>
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* Coluna da Direita: Imagem da Golden Box */}
        <div className="relative h-[400px] md:h-[600px] lg:h-[700px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5 order-1 lg:order-2">
          <Image 
            src="/assets/kit.jpeg" 
            alt="A Golden Box com Corrente de Ouro e iPad"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/5 to-transparent pointer-events-none" />
        </div>

      </div>

      {/* Marca d'água lateral sutil */}
      <div className="absolute left-[-60px] top-1/2 -translate-y-1/2 -rotate-90 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <span className="font-display italic text-9xl tracking-widest uppercase text-black">
          Exclusive
        </span>
      </div>
      
    </section>
  );
}