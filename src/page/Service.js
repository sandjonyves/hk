import { Card } from 'flowbite-react'
import React, { useEffect, useRef, useState } from 'react'

export default function Service() {

  const newsletterRef = useRef()
  const [show,setShow] =useState()
  useEffect(()=>{
    const observer  = new IntersectionObserver(entrie=>{
      if(entrie[0].isIntersecting){
        setShow(true)
        //const footer =document.querySelector("#footer").setAttribute('class','text-2xl  text-gray-900 dark:text-gray-800 animate-flip-up animate-ease-in')
        //  observer.unobserve(newsletterRef.current)
      }else{
        setShow(false)
      }
    })
  observer.observe(newsletterRef.current)  
  },[])
  return (
    <div name='service'>

        <Card  className="border-x-4 border-green-500 my-20 md:mx-40 mx-0 drop-shadow-lg"  >

        <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Service 
            
        </h4>


        <h4 ref={newsletterRef} className={`${show?'font-bold  flex justify-start animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in':'font-bold '}`}>        1. Gamme complète de services
                    Historiquement présent sur plusieurs métiers :  </h4 >
                    <span className='ml-4 flex justify-start'>    • l’audit légal et contractuel,  </span>
                    <p ref={newsletterRef} className={`${show?'flex justify-start animate-flip-up animate-ease-in animate-duration-[2000ms]':'flex justify-start'}`}>    • l’expertise comptable            ,</p>
                    <p ref={newsletterRef} className={`${show?'flex justify-start animate-flip-up animate-ease-in animate-duration-[2000ms]':'flex justify-start'}`}>    • le conseil comptable et financier,</p>
                    <p ref={newsletterRef} className={`${show?'flex justify-start animate-flip-up animate-ease-in animate-duration-[2000ms]':'flex justify-start'}`}>    • l’assistance comptable et fiscale,</p>
                    <p ref={newsletterRef} className={`${show?'flex justify-start animate-flip-up animate-ease-in animate-duration-[2000ms]':'flex justify-start'}`}>    • la restructuration des organisations,</p>
                    <p ref={newsletterRef} className={`${show?'flex justify-start animate-flip-up animate-ease-in animate-duration-[2000ms]':'flex justify-start'}`}>    • la formation, </p>
                    
</Card>
      
    </div>
  )
}
