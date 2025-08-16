import './App.css'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import React,{ lazy} from 'react';
const Compress =React.lazy(()=>import('../pages/compress'));
const Bgremove =React.lazy(()=>import('../pages/bgremove'));
const FormatChange =React.lazy(()=>import('../pages/formatChange'));
const Home =React.lazy(()=>import('../pages/home'));

function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen w-full bg-blue-100 lg:pl-32 pt-10 flex justify-center items-start">
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/compress' element={<Compress />}/>
      <Route path='/bgremove' element={<Bgremove/>}/>
      <Route path='/format' element={<FormatChange/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
