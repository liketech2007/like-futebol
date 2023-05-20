"use client"
import './globals.css'
import { useState,useEffect } from "react"
import { ContextTheme } from '../contexts/contextTheme'
import { client } from "../utils/apolloClient"
import { ApolloProvider } from "@apollo/client"
import { Ads } from '@/components/ads'
import logo from "../assets/logo.png"
import { Cookie } from '@/components/cookie'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme,setTheme] = useState("dark")
  useEffect(() => {
    const getTheme = localStorage.getItem("theme")
    setTheme(getTheme === null ? theme : getTheme)
  },[])
  return (
      <html lang="pt" className={theme}>
      <head>
      <script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KGQ6KK9');`}}></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3683016587498358"
     crossOrigin="anonymous"></script>
         <link rel="icon" type="image/x-icon" href={logo.src} /> 
         <title>Like Blog - Aplicação</title>
      </head>
      <body className='bg-primary text-textP dark:bg-secondary dark:text-textS flex flex-col lg:justify-center lg:items-center md:justify-center md:items-center'>
        <noscript dangerouslySetInnerHTML={{
       __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGQ6KK9"
       height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
      <ApolloProvider client={client}>
      <ContextTheme.Provider value={{theme,setTheme}}>
        <Cookie />
          {children}
          <Ads />
          </ContextTheme.Provider>
        </ApolloProvider>
      </body>
    </html>
  )
}