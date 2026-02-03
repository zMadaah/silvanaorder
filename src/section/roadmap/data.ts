export interface Step {
  number: number;
  title: string;
  content: string;
  recolhimento?: string;
}

export const steps: Step[] = [
  {
    number: 1,
    title: "Golden Box",
    content: "Entre 25 a 30 dias após o fechamento do contrato, você recebe em casa a Golden Box. Ela marca o início da nossa jornada e contém o seu presente exclusivo e o iPad de Gestão, que será sua ferramenta principal de acompanhamento."
  },
  {
    number: 2,
    title: "Sincronização e Acesso",
    content: "O acesso ao iPad não é automático para garantir a segurança dos seus dados. A Direção da Riquíssimos Produções enviará pessoalmente o seu Login e Senha exclusivos, permitindo que você explore o cronograma e os detalhes do projeto."
  },
  {
    number: 3,
    title: "Branding ",
    content: "Desenvolvimento da marca exclusiva da festa. Aqui criamos o monograma, selecionamos a tipografia e definimos toda a identidade visual que estará presente em todos os materiais, desde os convites até a pista de dança."
  },
  {
    number: 4,
    title: "Direção Criativa",
    content: "Definição do conceito artístico e atmosférico. Escolhemos o tema, a paleta de cores, as sensações e o estilo da festa, garantindo que haja uma coerência estética absoluta do início ao fim do evento."
  },
  {
    number: 5,
    title: "Arquitetura e Cenografia ",
    content: "A materialização visual do projeto. Desenvolvemos a planta baixa e as visualizações em 3D para que você consiga visualizar exatamente como cada ambiente será montado e como os convidados irão interagir com o espaço."
  },
  {
    number: 6,
    title: "Curadoria Gastronômica ",
    content: "Momento de definir os sabores e a estética da mesa de doces. Realizamos a degustação completa e a escolha criteriosa dos doces, forminhas luxuosas e os bem-vividos que comporão o cenário gastronômico."
  },
  {
    number: 7,
    title: "Design de Interiores e Tecnologia",
    content: "Com o projeto 3D aprovado, partimos para a seleção física e técnica de todos os elementos. Escolha de mobiliário, texturas, tecidos e a integração de tecnologias de iluminação e painéis de LED."
  },
  {
    number: 8,
    title: "Detalhes Finais",
    content: "Confecção e produção de todos os itens de experiência do convidado. Produzimos o PressKit, lembranças personalizadas e todos os detalhes rigorosamente alinhados ao branding aprovado anteriormente."
  },
  {
    number: 9,
    title: "O Grande Dia & Pós-Evento",
    content: "Realização da festa com acompanhamento integral da nossa equipe. Cuidamos de cada detalhe da execução para que você apenas desfrute o momento. O ciclo se encerra com a nossa logística reversa.",
    recolhimento: "5 dias após o evento, a equipe da Riquíssimos vai até o local indicado para recolher a Golden Box (iPad), encerrando o ciclo com total comodidade para o cliente."
  }
];