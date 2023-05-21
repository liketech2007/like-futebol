"use client"
import { FooterHome } from "@/components/footerHome";
import { HeaderSecond } from "@/components/headerSecond";

export default function SobreNos() {
    return (
        <>
            <HeaderSecond />
            <main className="p-4 min-h-[70vh] md:w-[50%] lg:w-[70%] flex-col">
                <h1 className="text-2xl font-bold my-4 ml-6">Like Futebol</h1>

                <p className="ml-8">
                Bem-vindo ao Like Futebol, seu destino definitivo para todas as coisas relacionadas ao futebol. Aqui você encontrará uma coleção abrangente de artigos, notícias e análises sobre as últimas novidades e tendências do mundo do futebol. Comandado por apaixonados por futebol, nosso site oferece informações valiosas para ajudar você a se manter atualizado e aprofundar seu conhecimento sobre o esporte mais popular do mundo.

                Nossos especialistas compartilham insights exclusivos sobre táticas, desempenho de jogadores, transferências, competições e muito mais. Quer você seja um torcedor ávido em busca de análises detalhadas sobre partidas, um treinador que deseja aprimorar suas estratégias ou apenas um entusiasta do futebol em busca de notícias emocionantes, o Like Futebol é o seu guia confiável.

                Explore nossa ampla seleção de artigos empolgantes e mergulhe no mundo do futebol com uma perspectiva única. Junte-se a nós nessa jornada apaixonante e aproveite ao máximo sua paixão pelo jogo bonito.
                </p>
            </main>
            <FooterHome />
        </>
    )
}