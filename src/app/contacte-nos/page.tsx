"use client"
import { FooterHome } from "@/components/footerHome";
import { HeaderSecond } from "@/components/headerSecond";

export default function ContacteNos() {
    return (
        <>
            <HeaderSecond />
            <main className="p-4 min-h-[70vh] md:w-[50%] lg:w-[70%] flex-col">
                <h1 className="text-3xl font-bold my-4 ml-6">Contacte-nos</h1>
                <p className="ml-8">
                Entre em Contato

                Ficamos felizes em receber sua mensagem. Se você tiver alguma dúvida, comentário ou solicitação, por favor, entre em contato conosco pelos meios a seguir:
                <br />

                E-mail: liketech2007@gmail.com
                <br />
                Telefone: 946 703 116
                <br />

                Estamos disponíveis durante o horário comercial para atender às suas necessidades. Agradecemos sua interação e aguardamos ansiosamente para ajudá-lo(a).

                </p>
            </main>
            <FooterHome />
        </>
    )
}