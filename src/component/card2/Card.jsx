
'use client';

import { Card } from 'flowbite-react';
import  './card.css'
import { useEffect, useRef, useState } from 'react';
function Cards2() {

  const newsletterRef = useRef()
  const [show,setShow] =useState()
  // useEffect(()=>{
  //   const observer  = new IntersectionObserver(entrie=>{
  //     if(entrie[0].isIntersecting){
  //       setShow(true)
  //       //const footer =document.querySelector("#footer").setAttribute('class','text-2xl  text-gray-900 dark:text-gray-800 animate-flip-up animate-ease-in')
  //       //  observer.unobserve(newsletterRef.current)
  //     }else{
  //       setShow(false)
  //     }
  //   })
  // observer.observe(newsletterRef.current)  
  // },[])
  return (
    <Card  className="border-x-4 border-y-4 mb-20 md:m-5 m-0 drop-shadow-lg"  >

        <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        CABINET HK AUDIT & CONSEILS
            
        </h4>
        
      
        <h5  className={`${show?'font-bold  flex justify-start animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in':'font-bold '}`}>        1. Gamme complète de services

     
      permet à votre entreprise de bénéficier des 
      compétences et de l'expertise
      d’un Directeur Administratif et Financier
      </h5>
      <p  className={`flex justify-start}`}> 
      
      Dirigeant de PME/TPE, gérant d’association ou créateur 
      d’entreprise, si vous souhaitez être accompagné dans 
      votre gestion financière par un professionnel 
      expérimenté et indépendant, HK peut intervenir 
      dans votre entreprise quelques jours par mois ou
      plusieurs jours par semaine en fonction de vos besoins.
      </p>
    </Card>
  );
}
export default Cards2
