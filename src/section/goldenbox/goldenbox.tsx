import Image from 'next/image';

export default function GoldenBoxSection() {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5] flex flex-col items-center py-16 md:py-24 px-8 md:px-24 overflow-hidden">
      
      {/* CONTAINER DA LOGO: Centralizado no Mobile, Absoluto no Desktop */}
     

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Coluna do Texto: Centralizada no Mobile */}
        <div className="space-y-8 z-10 order-2 lg:order-1 text-center lg:text-left">
          <header className="space-y-8">
            <div>
              <h2 className="font-display italic font-normal text-5xl md:text-7xl lg:text-8xl text-[#1A1A1A] leading-tight tracking-tighter">
                Golden Box <br/>
                <span className="text-3xl md:text-4xl lg:text-5xl opacity-70 block mt-2">O Início da Experiência</span>
              </h2>
            </div>

            <div className="space-y-8 font-sans text-lg md:text-xl leading-relaxed text-[#1A1A1A] opacity-95 text-pretty">
              <p>
                Para oficializar o início da nossa jornada, cerca de 25 dias após o fechamento do contrato, 
                a Silvana receberá em seu endereço a nossa exclusiva Golden Box.
              </p>
              
              <p>
                Esta entrega simboliza o nosso compromisso e carinho, contendo dois itens especiais:
              </p>

              {/* Itens de destaque mantidos com alinhamento à esquerda para leitura */}
              <div className="space-y-6 pt-4 text-left max-w-lg mx-auto lg:mx-0">
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

        {/* Coluna da Imagem */}
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
    </section>
  );
}