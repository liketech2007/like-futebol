"use client"
import { FooterHome } from "@/components/footerHome";
import { HeaderSecond } from "@/components/headerSecond";

export default function PoliticaDePrivacidade() {
    return (
        <>
             <HeaderSecond />
             <main className="p-4 min-h-[70vh] md:w-[50%] lg:w-[70%] flex-col">
                <h1 className="text-3xl font-bold my-4 ml-6">Política de Privacidade</h1>
                <p className="ml-8">
                    Bem-vindo(a) à nossa página de Política de Privacidade. Nesta seção, informamos que somente armazenamos o tema do site, sem coletar informações pessoais dos usuários. Respeitamos sua privacidade e garantimos que suas informações permanecerão confidenciais. Se tiver alguma dúvida ou preocupação, por favor, entre em contato conosco através dos dados fornecidos em nossa página de contato. Agradecemos por escolher nosso site.
                </p>
                
             </main>
            <FooterHome />
        </>
    )
}