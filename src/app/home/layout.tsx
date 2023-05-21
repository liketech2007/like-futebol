export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
      <head>
      <meta name="description" content="Bem-vindo ao Like Futebol, o seu guia completo para o mundo do futebol. Aqui, oferecemos informações atualizadas sobre as últimas notícias, jogos, jogadores e tendências no universo do futebol. Com uma abordagem concisa e envolvente, nosso objetivo é manter você informado e entretido com o melhor conteúdo futebolístico.

        Dos destaques dos jogos mais recentes aos perfis detalhados de jogadores talentosos, nosso site abrange uma ampla gama de tópicos para satisfazer a sua paixão pelo futebol. Além disso, oferecemos análises aprofundadas, estatísticas e opiniões dos especialistas para fornecer uma perspectiva única sobre o esporte.

        Se você é um torcedor apaixonado, um entusiasta do futebol ou apenas alguém que deseja ficar por dentro das novidades do mundo do esporte, o Like Futebol é o seu destino definitivo. Junte-se a nós e mergulhe na empolgação e na emoção do futebol enquanto exploramos os aspectos fascinantes desse esporte amado por milhões de pessoas em todo o mundo." />
        <meta name="keywords" content="futebol, esporte, notícias, jogos, jogadores, tendências, análises, estatísticas, campeonatos, equipes, ligas, transferências, treinadores, táticas, gols, habilidades, partidas, resultados, curiosidades, competições, histórias, paixão, aficionados, torcida, estádios, mundial, craques, rivalidades, clássicos, seleções, treinamentos, técnicas, dribles, chutes, defesas, goleiros, jogadas, fair play, cartões, lesões, arbitragem, VAR, futebol feminino, categorias de base, campeonato nacional, jogos internacionais, apostas esportivas, fantasy football, futebol de praia, futsal, craques do passado, futebol e cultura, hooligans." />
        <title>Like Futebol - Home</title>
      </head>
          {children}
    </>
  )
}
