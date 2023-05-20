import react from "react"

interface IcontextTheme  {
    theme: string,
    setTheme: (theme: string) => void,
}

const contextTheme: IcontextTheme = {
    theme: "",
    setTheme(theme) {
        
    },
}

export const ContextTheme = react.createContext<IcontextTheme>(contextTheme)