
'use client';

import { Card } from 'flowbite-react';
import  './card.css'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
function Cards2() {
  const {t} = useTranslation()

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
        {t("s3Title")}
            
        </h4>
        
      
        <h5  className={`${show?'font-bold  flex justify-start animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in':'font-bold '}`}>

        {t("s3Text1")}
      </h5>
      <p  className={`flex justify-start}`}> 
      
      {t("s3Text2")}
      </p>
    </Card>
  );
}
export default Cards2
