"usec client";

import { motion } from "framer-motion";

import { useRouter } from "next/navigation"

export default function Hero(){
    const router = useRouter();
    
    return (
        <motion.section 
        initial={{opacity: 0, y: 40}}
        animate={{opacity:1, y:0}}
        transition={{duration: 0.6}}        
        className="h-screen flex flex-col items-center text-center">
            <h1 className="text-5xl font-bold">Hi, I'm Rafue Karim Islam</h1>
            <p className="mt-4 text-xl text-gray-600">Full-Stack Developer</p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" onClick={()=> {
                router.push("/projects")
            }}>View My Work</button>
        </motion.section>
    )
}