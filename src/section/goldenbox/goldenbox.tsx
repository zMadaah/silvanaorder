import Image from 'next/image';

export default function GoldenBoxSection() {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5] py-16 md:py-24 px-6 md:px-24 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* TÍTULO NO TOPO */}
        <header className="max-w-3xl mb-8 md:mb-12 text-center mx-auto">
          <div>
            <h2 className="font-display italic font-normal text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tighter mb-4">
              Golden Box
            </h2>
            <span className="text-3xl md:text-4xl lg:text-5xl opacity-70 block">
              O Início da Experiência
            </span>
          </div>
        </header>

        {/* CONTEÚDO PRINCIPAL: Estrutura diferente para mobile vs desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24">
          {/* DESKTOP: Coluna Esquerda - Texto */}
          <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-6 font-sans text-lg md:text-xl leading-relaxed opacity-95 text-pretty">
              <p>
                Para oficializar o início da nossa jornada, cerca de 25 dias após o fechamento do contrato, 
                a Silvana receberá em seu endereço a nossa exclusiva Golden Box.
              </p>
              
              <p>
                Esta entrega simboliza o nosso compromisso e carinho, contendo dois itens especiais:
              </p>

              {/* Itens de destaque */}
              <div className="space-y-6 pt-4 text-left">
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
          </div>

          {/* MOBILE: Imagem entre título e texto */}
          <div className="lg:hidden mb-8">
            <div className="relative h-[400px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5">
              <Image
                src="/assets/kit.jpeg"
                alt="A Golden Box com Corrente de Ouro e iPad"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/5 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* DESKTOP: Coluna Direita - Imagem */}
          <div className="hidden lg:block relative h-[500px] lg:h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5 order-1 lg:order-2">
            <Image
              src="/assets/kit.jpeg"
              alt="A Golden Box com Corrente de Ouro e iPad"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/5 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-20 pt-10 border-t border-black/5 text-center px-4">
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-30">
            Experiência Exclusiva • Riquíssimos Maison Experience
          </p>
        </footer>
      </div>
    </section>
  );
}