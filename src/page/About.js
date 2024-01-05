import  { useRef, useState } from 'react'
import { Card } from 'flowbite-react'
import { useTranslation } from 'react-i18next'
export default function About() {

  const {t} = useTranslation()
  const newsletterRef = useRef()
  const [show,setShow] =useState()
  // useEffect(()=>{
  //   const observer  = new IntersectionObserver(entrie=>{
  //     if(entrie[0].isIntersecting){
  //       setShow(true)
  //       //const footer =document.querySelector("#footer").setAttribute('class','text-2xl  text-gray-900 dark:text-gray-800 animate-flip-up animate-ease-in')
  //       // observer.unobserve(newsletterRef.current)
  //     }else{
  //       setShow(false)
  //     }
  //   })
  // observer.observe(newsletterRef.current)  
  // },[])
  return (
    <div name='about'>

        <Card  className="border-x-4 border-green-500 mb-10 md:m-40 m-0 drop-shadow-lg"  >

            <h4  className={`font-bold  text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-start animate-flip-up animate-ease-in'}`} >
           {t("s5Title")}
            </h4>
            <h5  className={`${show?'font-bold  flex justify-start animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in':'font-bold '}`} >

            {t("s5Text1")}  
            </h5>
     
            <Card className='md:pl-20 pl-0   '>
            {/* <h4 ref={newsletterRef} className={`${show?'font-bold  flex justify-start animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in':'font-bold '}`}>        1. Gamme complète de services
                    Historiquement présent sur plusieurs métiers :  </h4 >
                    <span className='ml-4 flex justify-start'>    • l’audit légal et contractuel,  </span>
                    <p  className={`${show?'flex justify-start animate-flip-up animate-ease-in animate-duration-[2000ms]':'flex justify-start'}`}>    • l’expertise comptable            ,</p>
                    <p  className={`${show?'flex justify-start animate-flip-up animate-ease-in animate-duration-[2000ms]':'flex justify-start'}`}>    • le conseil comptable et financier,</p>
                    <p  className={`${show?'flex justify-start animate-flip-up animate-ease-in animate-duration-[2000ms]':'flex justify-start'}`}>    • l’assistance comptable et fiscale,</p>
                    <p  className={`${show?'flex justify-start animate-flip-up animate-ease-in animate-duration-[2000ms]':'flex justify-start'}`}>    • la restructuration des organisations,</p>
                    <p  className={`${show?'flex justify-start animate-flip-up animate-ease-in animate-duration-[2000ms]':'flex justify-start'}`}>    • la formation, </p>
                    
            */}
          
            <h4 ref={newsletterRef} className={`  flex justify-start  font-bold '`} >
            {t("s5Text2")}      </h4>
            
               <h4  className={`${show?'font-bold  flex justify-start animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in':'font-bold '}`}> {t("s5Title2")} </h4>    

          
                    <div className=' flex justify-start'>
              
                    <p className=' flex justify-start'>
                        
                    {t("s5Text3")}     </p>
                    </div>
                 
               

                
                
                <h4 ref={newsletterRef} className={`${show?'font-bold  flex justify-start animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in':'font-bold '}`}>  {t("s5Title3")}  </h4> 
                <p className=' flex justify-start'>
                {t("s5Text4")} 
                </p>
           
            
            </Card>
        
    </Card>
   
</div>

  )
}
