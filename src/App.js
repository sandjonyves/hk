import logo from './logo.svg';
import './App.css';
import {Button, Footer} from "flowbite-react"
import Component from "./component/navbar/Navbar"

import Home from './page/Home';
import Carousels from './component/carousel/Carousel';
import Footter from './component/Footter/Footter';
import About from './page/About';
import { Modals } from './component/modal/modal';
import { useEffect, useRef, useState } from 'react';
import ButtonGroup from './component/ButtonGroup/ButtonGroup';
function App() {

  // intersection observer sert a faire des animation

  const newsletterRef = useRef()
  const [show,setShow] =useState()
  useEffect(()=>{
    const observer  = new IntersectionObserver(entrie=>{
      if(entrie[0].isIntersecting){
        // const footer =document.querySelector("#footer").setAttribute('class','')
        setShow(true)
        // observer.unobserve(newsletterRef.current)
      }else{
        setShow(false)
      }
    })
  observer.observe(newsletterRef.current)  
  },[])

  return (
    <div className="App ">
      {/* <Component></Component> */}
    
      <section >
      <Home></Home>
   
</section> 
{/* <div class='image2' >
    <div class='btnG' id="btnGroup">
      <ButtonGroup>
      </ButtonGroup>
    </div>
  </div> */}

  {/* <Carousels className='animate-jump-in animate-delay-300 animate-once'></Carousels> */}
   

      


    <div >
          <About></About>
    </div>
          
    <footer ref={newsletterRef} className={`${show?'animate-jump-in animate-once animate-duration-[2000ms] animate-ease-in':''}`}>
        <Footter ></Footter>
    </footer>

 

    </div>
  
  )
}

export default App;
