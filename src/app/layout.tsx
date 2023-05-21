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
        __html: ``}}></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3683016587498358"
     crossOrigin="anonymous"></script>
         <link rel="icon" type="image/x-icon" href={logo.src} /> 
         <title>Like Futebol - Aplicação</title>
      </head>
      <body className='bg-primary text-textP dark:bg-secondary dark:text-textS flex flex-col lg:justify-center lg:items-center md:justify-center md:items-center'>
        <noscript dangerouslySetInnerHTML={{
       __html: ``}}></noscript>
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