"use client"
import { FooterHome } from "@/components/footerHome";
import { HeaderSecond } from "@/components/headerSecond";

export default function SobreNos() {
    return (
        <>
            <HeaderSecond />
            <main className="p-4 min-h-[70vh] md:w-[50%] lg:w-[70%] flex-col">
                <h1 className="text-2xl font-bold my-4 ml-6">Like Blog</h1>

                <p className="ml-8">
                Bem-vindo ao mundo do Like Blog, um espaço dedicado a fornecer informações valiosas e inspiradoras sobre o uso da tecnologia para impulsionar o crescimento e a eficiência dos negócios. Liderado por Óscar Jeremias, um jovem empreendedor angolano de 16 anos, o blog é uma extensão da sua empresa de tecnologia, a Like Tech.

                No Like Blog, você encontrará uma variedade de artigos interessantes que abrangem as melhores práticas e as últimas tendências tecnológicas, tudo projetado para ajudar as empresas a alcançar seu máximo potencial. Óscar, com sua visão empreendedora e paixão pela tecnologia, compartilha insights valiosos sobre como as empresas podem aproveitar a tecnologia de forma inovadora para aprimorar suas atividades.

                Se você está buscando maneiras de impulsionar o crescimento dos seus negócios ou melhorar a eficiência operacional, o Like Blog é o lugar perfeito para começar. Explore nossos artigos inspiradores e descubra como as soluções inovadoras da Like Tech podem ajudar sua empresa a obter sucesso no mundo digital em constante evolução. Junte-se a nós nessa jornada de descoberta e aproveite ao máximo as oportunidades oferecidas pela tecnologia.
                </p>
            </main>
            <FooterHome />
        </>
    )
}