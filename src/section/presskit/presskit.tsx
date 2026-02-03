import Image from 'next/image';

export default function PresskitSection() {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5] py-20 px-8 md:px-24 text-[#1A1A1A] flex items-center">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Coluna da Esquerda: Duas Imagens Empilhadas */}
        <div className="flex flex-col gap-6">
          <div className="relative h-[300px] md:h-[400px] w-full rounded-[30px] overflow-hidden shadow-lg">
            <Image 
              src="/assets/presskit.png" // Substituir pela sua imagem na pasta assets
              alt="Detalhe Presskit"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[300px] md:h-[400px] w-full rounded-[30px] overflow-hidden shadow-lg">
            <Image 
              src="/assets/presskit2.jpeg" // Substituir pela sua imagem na pasta assets
              alt="Experiência Presskit"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Coluna da Direita: Conteúdo Textual */}
        <div className="space-y-8">
          {/* Título com Logo ao Lado */}
          <div className="flex items-center gap-6">
             {/* Logo específica ao lado do título conforme solicitado */}
             <div className="w-16 h-16 relative">
                <Image 
                  src="/assets/logo.png" 
                  alt="Icone" 
                  fill 
                  className="object-contain opacity-80"
                />
             </div>
             <h2 className="font-display italic font-normal text-6xl md:text-8xl tracking-tight">
                PressKit
             </h2>
          </div>

          <div className="space-y-6">
            <p className="font-sans text-lg md:text-xl leading-relaxed opacity-90 text-pretty">
              As lembranças do evento serão desenvolvidas como uma experiência exclusiva e memorável para os adolescentes. 
              A proposta principal é a criação de um press kit luxuoso, pensado para ser usável, inteligente e alinhado ao universo dos 15 anos.
            </p>
            <p className="font-sans text-base opacity-75">
              O press kit encontra-se em fase de formatação e atualização, sendo desenvolvido especialmente para esta festa, 
              com adaptação total à identidade, conceito e direção criativa do evento.
            </p>
          </div>

          {/* Lista Técnica - Proposta de Lembranças */}
          <div className="pt-8 border-t border-black/10">
            <h3 className="font-sans font-black text-sm uppercase tracking-[0.2em] mb-6">
              Proposta de Lembranças:
            </h3>
            <ul className="space-y-3 font-sans text-base opacity-85 text-right lg:text-left">
              <li>• Press kit luxuoso como proposta principal</li>
              <li>• Formatação e desenvolvimento em andamento</li>
              <li>• Possibilidade de ajustes conforme preferência do cliente</li>
              <li>• Produção de caixa luxuosa e personalizada</li>
              <li>• Conteúdo interno usável, criativo e atrativo</li>
              <li>• Personalização individual para cada adolescente</li>
              <li>• Acabamento sofisticado, moderno e de alto padrão</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}