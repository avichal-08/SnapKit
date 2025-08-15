import { motion } from "motion/react"
export default function Bolt(){
    return(
        <div className="relative">
            <div className="mt-[20%] ml-[40%] absolute">
                <motion.svg  
                xmlns="http://www.w3.org/2000/svg"  
                width="60"  
                height="60"  
                viewBox="0 0 24 24"  
                fill="none"  
                stroke="currentColor"  
                stroke-width="1.3"  
                stroke-linecap="round"  
                stroke-linejoin="round"  
                class="icon icon-tabler icons-tabler-outline icon-tabler-bolt">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <motion.path
                initial={{pathLength:0,fill:"var(--color-neutral-50)"}}
                animate={{pathLength:1,fill:"var(--color-pink-300)"}}
                transition={{
                    duration:2,
                    repeat:Infinity,
                    repeatType:"reverse",
                    // repeatType:"loop" <=Give it a try
                }}
                d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" /></motion.svg>
            </div>
        </div>
    )
}