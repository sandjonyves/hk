import React, { useEffect, useState } from "react";
import { Button, Dropdown } from "flowbite-react";
import Carousels from "../component/carousel/Carousel";

import './style/home.css'

import Cards from "../component/Card/Card";
import Cards2 from "../component/card2/Card";
import ButtonGroup from "../component/ButtonGroup/ButtonGroup";
import Component from "../component/navbar/Navbar";


import Service from "./Service";
import { CSSTransition } from "react-transition-group";
import { Transition } from 'react-transition-group';
import { useRef } from 'react';
import Section from "./Test";
import { PiInstagramLogoBold, PiWhatsappLogoFill, PiWhatsappLogoThin } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail, SiYahoo } from "react-icons/si";





export default function Home() {

  //text parlent de hk

  const newsletterRef = useRef()
  const [show,setShow] =useState()
  useEffect(()=>{
    const observer  = new IntersectionObserver(entrie=>{
      if(entrie[0].isIntersecting){
        // const footer =document.querySelector("#footer").setAttribute('class','')
        setShow(true)
        observer.unobserve(newsletterRef.current)
        console.log('entreier',entrie[0])
      }else{
        setShow(false)
      }
    })
  observer.observe(newsletterRef.current)  
  console.log('obsever',observer)
  },[])

    
  return (
      
<div>
 
  <section>
   {/* <img src={image} alt="My image"></img>  */}
    <div class="image" >
    <header class="header" > <Component class="header"></Component></header>

        <div ref={newsletterRef} className={`${show?' flex justify-center mt-[100px] align-item-center animate-jump-in animate-once animate-duration-[2000ms] animate-ease-in':'flex justify-center mt-[100px] align-item-center'}`}>
        <Cards/>

      </div>
      <div className="bg-green-100 grid grid-cols-5 mt-20" >
          <PiWhatsappLogoFill  color='green' size={40}/>
          <FaSquareFacebook color='blue' size={40}/>
          <PiInstagramLogoBold color='red' size={40}/>
          <SiGmail color='red' size={40} cursor='pointer' />
          <SiYahoo color='violet' size={40} cursor='pointer'/>
        </div>
    </div>
  </section>
  

  <div class="card2" ref={newsletterRef}  className={`${show?'h-full animate-jump-in animate-once animate-duration-[2000ms] animate-ease-in':'flex justify-center mt-[100px] align-item-center'}`}>
    <Cards2>

    </Cards2>
  </div>

  <div class='image2' >
    <div class='btnG' id="btnGroup">
      <ButtonGroup>
      </ButtonGroup>
    </div>
  </div>


<div id="service" >
        <Service></Service>
     
</div>

</div>
        
   
  )
}
