import { useNavigate } from "react-router-dom"
export default function Home(){
    const navigate=useNavigate();
    return(
        <div className="flex flex-wrap gap-3 pt-10">
            <button className="bg-blue-500 text-white w-[48%] py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 cursor-pointer" onClick={()=>navigate('/compress')}>Image Compressor</button>
            <button className="bg-blue-500 text-white w-[48%] py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 cursor-pointer" onClick={()=>navigate('/bgremove')}>Background Remover</button>
            <button className="bg-blue-500 text-white w-[48%] py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 cursor-pointer" onClick={()=>navigate('/format')}>Format Convertor</button>
        </div>
    )
}