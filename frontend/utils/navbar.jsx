import { FaGithub } from "react-icons/fa";
export default function Navbar(){
    return(
        <div className="w-screen md:w-xl lg:w-full bg-gray-100 min-h-12 rounded-4xl shadow-2xl flex items-center justify-between px-4">
            <div className="text-2xl font-semibold flex font-serif cursor-pointer tracking-tight"><div >Snap</div><div className="text-blue-500">Kit</div></div>
            <a href="https://github.com/avichal-08/SnapKit" target="_blank" rel="noopener noreferrer"><FaGithub size={35}/></a>
        </div>
    )
}