import { useNavigate } from "react-router-dom";
import Navbar from "../utils/navbar";
import Footer from "../utils/footer";
export default function Home(){
    const navigate=useNavigate();
    return(
        <div>
        <Navbar/>
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-3 pt-15">
            <button className="bg-blue-500 text-white w-full p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 cursor-pointer" onClick={()=>navigate('/compress')}>Image Compressor</button>
            <button className="bg-blue-500 text-white w-full p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 cursor-pointer" onClick={()=>navigate('/bgremove')}>Background Remover</button>
            <button className="bg-blue-500 text-white w-full p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 cursor-pointer" onClick={()=>navigate('/format')}>Format Converter</button>
            <button className="bg-blue-500 text-white w-full p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 cursor-pointer" onClick={()=>navigate('/object_remove')}>Object Remover</button>
        </div>
        <Footer/>
        </div>
    )
}