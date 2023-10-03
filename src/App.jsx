import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import './App.scss'
import { useState } from 'react'
function App() {
  const handleEvent=(e)=>{
    const btn_clk=e.currentTarget.getAttribute('data-name');
    
    if(btn_clk==='left'){
      const index=imgURL.indexOf(currentImg);
      if(index===0){
        setCurrentImg(imgURL[imgURL.length-1])
      }
      else{
        setCurrentImg(imgURL[index-1])
      }
    }
    else{
      const index=imgURL.indexOf(currentImg);
      if(index===imgURL.length-1){
        setCurrentImg(imgURL[0])
      }
      else{
        setCurrentImg(imgURL[index+1])
      }
    }
    
  }
  const imgURL=[
    "https://source.unsplash.com/Z8dtTatMVMw",

    "https://source.unsplash.com/9dmycbFE7mQ",

    "https://source.unsplash.com/m7K4KzL5aQ8",
  ]
   const [currentImg, setCurrentImg] = useState(imgURL[0])
  
  return (
    <>
    <div className="h-[100svh]  bg-black">
      <div className="relative w-full h-full opacity-50">
      <img src={currentImg} className='absolute h-full w-full'/>
      </div>

    </div>


    <div className="
    absolute bottom-4 inset-x-0
    w-28 h-12 mx-auto 
    flex justify-around items-center">
      <button onClick={(e)=>{handleEvent(e)}} data-name='left'><BsFillArrowLeftCircleFill className='w-8 h-8 text-slate-200'/></button>
      <button onClick={(e)=>{handleEvent(e)}} data-name='right'><BsFillArrowRightCircleFill className='w-8 h-8 text-slate-200' /></button>
    </div>
    </>
  )
}

export default App
