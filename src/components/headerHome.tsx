"use client"
import Link from "next/link";
import { List, Moon, SunDim, X } from "@phosphor-icons/react"
import { useState } from "react"
import { ContextTheme } from "../contexts/contextTheme"
import { useContext } from "react";
import logo from "../assets/logo.png"
import logoDark from "../assets/logo-dark.png"


export function HeaderHome() {
  const [openMenu, setOpenMenu] = useState(false)
  const {theme,setTheme} = useContext(ContextTheme)
  return (
    <header className="p-4 flex justify-between  md:w-[60%] lg:w-[80%]">
      <Link href="/home">
       {
        theme === "" ?  <img src={logo.src} className="max-w-[100px]" alt="Logo do like blog"/> :  <img src={logoDark.src} className="max-w-[100px]"  alt="Logo do like blog"/>
       }
      </Link>
      <div>
        <nav className="hidden md:block">
          <ul className="flex gap-6  items-center justify-between">
            <li>
              <Link href="/list-posts" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Blog</Link>
            </li>
            <li>
              <Link href="/sobre-nos" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Sobre nós</Link>
            </li>
            <li>
                    <Link href="/contacte-nos" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Contacte nós</Link>
              </li>
            <li>
              <Link href="/politica-de-privacidade" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Política de <br /> Privacidade</Link>
            </li>
            <li>
              <button className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center" onClick={() => {
              }}>
               { theme === "" ? <Moon size={32} onClick={() => {
                      localStorage.setItem("theme", "dark")
                      setTheme("dark")
                    }}/> : <SunDim size={32} onClick={() => {
                      localStorage.setItem("theme", "")
                      setTheme("")
                      }}/>}
              </button>
            </li>
            <li>
              <Link href="/" className="dark:bg-white dark:text-button bg-button text-white hover:bg-white hover:text-button dark:hover:bg-button dark:hover:text-white transition-all py-1 px-6 rounded-lg flex justify-center items-center">Aplicação</Link>
            </li>
          </ul>
        </nav>
        <div className={openMenu === false ? "z-50 flex justify-end items-end gap-4 flex-col md:hidden" :  "absolute top-2 right-2 flex justify-end items-end gap-4 flex-col md:hidden bg-gray-300 dark:bg-[#1E1E1F] p-4 rounded-lg drop-shadow-2xl"}>
          <div>
          { 
            openMenu === true ? ( <X size={64} className="text-button dark:text-white transition-all" onClick={() => setOpenMenu(false)}/>) : ( <List size={64} className="text-button dark:text-white transition-all" onClick={() => setOpenMenu(true)}/>)
          }
          </div>
          {
            openMenu && <ul className="flex gap-4 justify-center items-center flex-col">
                    <li>
                    <Link href="/list-posts" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Blog</Link>
                  </li>
                  <li>
                    <Link href="/sobre-nos" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Sobre nós</Link>
                  </li>
                  <li>
                    <Link href="/contacte-nos" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Contacte nós</Link>
                  </li>
                  <li>
                    <Link href="/politica-de-privacidade" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Política de <br /> Privacidade</Link>
                  </li>
                  <li>
                    <button className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center" onClick={() => {
                
              }}>
                    { theme === "" ? <Moon size={32} onClick={() => {
                      localStorage.setItem("theme", "dark")
                      setTheme("dark")
                    }}/> : <SunDim size={32} onClick={() => {
                      localStorage.setItem("theme", "")
                      setTheme("")
                      }}/>}
                    </button>
                  </li>
                  <li>
                    <Link href="/" className="dark:bg-white dark:text-button bg-button text-white hover:bg-white hover:text-button dark:hover:bg-button dark:hover:text-white transition-all py-1 px-6 rounded-lg flex justify-center items-center">Aplicação</Link>
                  </li>
            </ul>
          }
        </div>
      </div>
    </header>
  )
}