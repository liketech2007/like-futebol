import { ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";


export function HeaderSecond() {
    return (
        <header className="p-2 flex justify-start md:w-[60%] lg:w-[80%]">
            <Link href="/home" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">
                <ArrowLeft size={64} />
            </Link>
        </header>
    )
}