export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
      <head>
      <meta name="description" content="Like Blog é um blog de tecnologia e dicas, oferecendo informações atualizadas sobre as últimas tendências tecnológicas, gadgets e aplicativos. Com uma abordagem concisa e fácil de entender, nosso objetivo é ajudar os leitores a aproveitarem ao máximo a tecnologia em suas vidas diárias. De análises de produtos a guias passo a passo, nosso conteúdo abrange uma ampla gama de tópicos, incluindo smartphones, dispositivos domésticos inteligentes, segurança cibernética, inteligência artificial e muito mais" />
        <meta name="keywords" content="tecnologia, gadgets, aplicativos, análises, guias, smartphones, dispositivos domésticos inteligentes, segurança cibernética, inteligência artificial." />
        <title>Like Blog - Home</title>
      </head>
          {children}
    </>
  )
}
