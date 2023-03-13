import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { useState } from 'react'
import './App.scss'
function App() {
  const imgURL=[
    "https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg?w=2000",

    "https://img.freepik.com/free-photo/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-10.jpg",

    "https://media.istockphoto.com/id/1254508881/photo/woman-holding-sale-shopping-bags-consumerism-shopping-lifestyle-concept.jpg?s=612x612&w=0&k=20&c=wuS3z6nPQkMM3_wIoO67qQXP-hfXkxlBc2sedwh-hxc=",

    "https://www.shutterstock.com/image-photo/cheerful-happy-woman-enjoying-shopping-260nw-1417347668.jpg"
  ]
  const [index,SetIndex]=useState(0)
  const [disabled,setDisabled]=useState(false);
  const image=(value)=>{
    
    if(index+value<imgURL.length && index+value>=0)
    {
      console.log(index+value);
      SetIndex(index+value);
    }
  }
  return (
    <div className="App">
      <div className="Slider" style={{ transform:`translateX(-${index * 100}vw)`}}>
          {
            imgURL.map((url,key)=>{
              return(
                <div className="slide"key={key}>
                  <img src={url} alt="" loading="eager"/>
                </div>
              )
            })
          }
      </div>
      <div className="btnContainer">
        <ArrowBack className={index===0?"disabled Arrow":'Arrow'}  onClick={()=>{
          image(-1)
        }}/>
        <ArrowForward className={index===imgURL.length-1?"disabled Arrow":'Arrow'} onClick={()=>{image(1)
        }}/>
      </div>
    </div>
  )
}

export default App
