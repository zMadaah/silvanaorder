import Image from 'next/image';

const todosItens = [
  "Entrada e Hall", "Entrada cenográfica luxuosa", "Portal de entrada com estrutura cenográfica",
  "Produção floral com flores e folhagens", "Iluminação cênica", "Hall de entrada com painel instagramável personalizado",
  "Estrutura cenográfica com plotagem exclusiva", "LED com as iniciais do nome", "Salão Principal",
  "Carpetagem de luxo em todo o salão", "Mesas e cadeiras do próprio salão de festas", "Produção completa de mesa posta",
  "Souplá, guardanapo e porta-guardanapo", "Centros de mesa personalizados", "Cenografia de fechamento lateral para acabamento visual",
  "Mesa do Bolo | Área de Destaque", "Mesa do bolo cenográfica e de alto impacto", "Mobiliário exclusivo para a mesa do bolo",
  "Fundo cenográfico personalizado", "Carpetagem de luxo na área da mesa do bolo", "Jardim cenográfico com flores e folhagens",
  "Bolo cenográfico", "Composição com peças decorativas e doces", "Espaço luxuoso, intuitivo e instagramável para fotos",
  "Escadaria", "Produção cenográfica na escadaria", "Composição com flores e folhagens", "Lembranças | Press Kits",
  "Espaço exclusivo para retirada dos press kits", "Ambientação estilo loja moderna", "Decoração Geral",
  "Personalização da decoração em todos os ambientes", "Integração visual entre entrada, salão, bar, boate e áreas de convivência",
  "Execução completa da decoração sob responsabilidade da Riquíssimos Produções"
];

export default function DecoracaoSection() {
  const meio = Math.ceil(todosItens.length / 2);
  const itensEsquerda = todosItens.slice(0, meio);
  const itensDireita = todosItens.slice(meio);

  return (
    <section className="relative min-h-screen bg-[#F5F5F5] py-16 md:py-24 px-6 md:px-24 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* TÍTULO NO TOPO */}
        <header className="max-w-3xl mb-8 md:mb-12 text-center mx-auto">
          <h2 className="font-display italic font-normal text-6xl md:text-8xl mb-6 md:mb-8 tracking-tighter">
            Decoração
          </h2>
        </header>

        {/* CONTEÚDO PRINCIPAL: Estrutura diferente para mobile vs desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24">
          {/* MOBILE: Imagem entre título e texto */}
          <div className="lg:hidden mb-8">
            <div className="relative h-[400px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5">
              <Image
                src="/assets/decoracao.PNG"
                alt="Exibição de Decoração do Evento"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* DESKTOP: Coluna Esquerda - Descrição */}
          <div className="space-y-6 font-sans text-lg md:text-xl leading-relaxed opacity-90 order-2 lg:order-1">
            <p>
              A decoração do evento será desenvolvida de forma integral, criando uma experiência visual impactante,
              luxuosa e totalmente personalizada em todos os ambientes.
            </p>
            <p className="opacity-80">
              Todo o projeto seguirá a direção criativa do evento, unindo cenografia, produção floral,
              iluminação e identidade visual para surpreender os convidados do início ao fim.
            </p>
          </div>

          {/* DESKTOP: Coluna Direita - Imagem (alinhada à direita) */}
          <div className="hidden lg:block relative h-[500px] lg:h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5 order-1 lg:order-2">
            <Image
              src="/assets/decoracao.PNG"
              alt="Exibição de Decoração do Evento"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* LISTA DE ITENS EM 2 COLUNAS ABAIXO DE TUDO */}
        <div className="mt-8">
          <h3 className="font-sans font-black text-sm uppercase tracking-[0.2em] mb-10 border-b border-black/10 pb-4 text-center md:text-left">
            Itens Inclusos na Decoração:
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-3">
            <ul className="space-y-3">
              {itensEsquerda.map((item, idx) => (
                <li key={idx} className="flex items-start font-sans text-sm md:text-base opacity-85 leading-tight text-left">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <ul className="space-y-3">
              {itensDireita.map((item, idx) => (
                <li key={idx} className="flex items-start font-sans text-sm md:text-base opacity-85 leading-tight text-left">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-10 border-t border-black/5 text-center px-4">
        <p className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-30">
          Excelência em Cenografia e Design • Riquíssimos Maison Experience
        </p>
      </footer>
    </section>
  );
}