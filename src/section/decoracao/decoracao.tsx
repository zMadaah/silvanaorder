import Image from 'next/image';

// Unificamos as listas para permitir o balanceamento dinâmico
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
  // Cálculo para dividir a lista exatamente ao meio
  const meio = Math.ceil(todosItens.length / 2);
  const itensEsquerda = todosItens.slice(0, meio);
  const itensDireita = todosItens.slice(meio);

  return (
    <section className="relative min-h-screen bg-[#F5F5F5] py-16 md:py-24 px-6 md:px-24 text-[#1A1A1A]">
      
      {/* Ajuste da Logo: No mobile ela fica relativa (fluxo normal) para não atropelar o título */}
      <div className="flex justify-end md:absolute md:top-10 md:right-10 mb-8 md:mb-0">
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

      <div className="max-w-7xl mx-auto">
        <header className="max-w-3xl mb-12 md:mb-16">
          <h2 className="font-display italic font-normal text-6xl md:text-8xl mb-8 tracking-tighter">
            Decoração
          </h2>
          <div className="space-y-6 font-sans text-lg md:text-xl leading-relaxed opacity-90">
            <p>
              A decoração do evento será desenvolvida de forma integral, criando uma experiência visual impactante, 
              luxuosa e totalmente personalizada em todos os ambientes.
            </p>
            <p className="opacity-80">
              Todo o projeto seguirá a direção criativa do evento, unindo cenografia, produção floral, 
              iluminação e identidade visual para surpreender os convidados do início ao fim.
            </p>
          </div>
        </header>

        <h3 className="font-sans font-black text-sm uppercase tracking-[0.2em] mb-10 border-b border-black/10 pb-4">
          Itens Inclusos na Decoração:
        </h3>

        {/* Grid com colunas equilibradas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-3">
          <ul className="space-y-3">
            {itensEsquerda.map((item, idx) => (
              <li key={idx} className="flex items-start font-sans text-sm md:text-base opacity-85 leading-tight">
                <span className="mr-3 text-[#B89B5E]">•</span>
                {item}
              </li>
            ))}
          </ul>
          
          <ul className="space-y-3">
            {itensDireita.map((item, idx) => (
              <li key={idx} className="flex items-start font-sans text-sm md:text-base opacity-85 leading-tight">
                <span className="mr-3 text-[#B89B5E]">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="mt-20 pt-10 border-t border-black/5 text-center">
        <p className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-30">
          Excelência em Cenografia e Design • Riquíssimos Maison Experience
        </p>
      </footer>
    </section>
  );
}