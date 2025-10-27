import { useEffect } from "react"

export default function Footer(){
    
    return (
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            >
                © {new Date().getFullYear()} Rafue. All rights reserved.
            </a>
      </footer>
    )
}
