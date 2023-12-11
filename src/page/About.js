import React, { useEffect, useRef, useState } from 'react'
import Cards2 from '../component/card2/Card'
import { Card } from 'flowbite-react'

export default function About() {


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

        <Card  className="border-x-4 border-green-500 mb-20 md:m-40 m-0 drop-shadow-lg"  >

            <h4  className={`${show?'font-bold  text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-start animate-flip-up animate-ease-in':''}`} >
            CABINET HK AUDIT & CONSEILS
            </h4>
            <h5  className={`${show?'font-bold  flex justify-start animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in':'font-bold '}`} >

            Notre cabinet est présent sur son marché depuis 1990 sous différentes structures, HK AUDIT & CONSEILS possède une longue expérience dans l’expertise comptable puisqu’elle a été l’une des premières à intégrer cette spéciapté. Le cabinet regroupe aujourd’hui 2 associés .
            Avec l’ambition de marquer clairement sa différence, notamment en termes de service, HK AUDIT & CONSEILS à la volonté de rester un cabinet indépendant.

            </h5>
     
            <Card className='md:pl-20 pl-0   '>
            <h4 ref={newsletterRef} className={`${show?'font-bold  flex justify-start animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in':'font-bold '}`}>        1. Gamme complète de services
                    Historiquement présent sur plusieurs métiers :  </h4 >
                    <span className='ml-4 flex justify-start'>    • l’audit légal et contractuel,  </span>
                    <p  className={`${show?'flex justify-start animate-flip-up animate-ease-in animate-duration-[2000ms]':'flex justify-start'}`}>    • l’expertise comptable            ,</p>
                    <p  className={`${show?'flex justify-start animate-flip-up animate-ease-in animate-duration-[2000ms]':'flex justify-start'}`}>    • le conseil comptable et financier,</p>
                    <p  className={`${show?'flex justify-start animate-flip-up animate-ease-in animate-duration-[2000ms]':'flex justify-start'}`}>    • l’assistance comptable et fiscale,</p>
                    <p  className={`${show?'flex justify-start animate-flip-up animate-ease-in animate-duration-[2000ms]':'flex justify-start'}`}>    • la restructuration des organisations,</p>
                    <p  className={`${show?'flex justify-start animate-flip-up animate-ease-in animate-duration-[2000ms]':'flex justify-start'}`}>    • la formation, </p>
                    
           
          
            <h4 ref={newsletterRef} className={`${show?'font-bold  flex justify-start animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in':'font-bold '}`} >
                 HK AUDIT & CONSEILS possède tous les atouts - compétence des hommes, efficacité de son organisation - pour accompagner durablement l’entreprise.
                Afin de s'adapter à l’évolution des attentes du marché et permettre à ses cpents d’anticiper leurs choix stratégiques, 
                conseil qui répondent à des demandes plus spécifiques et nécessitent des compétences particupères.
            </h4>
            
               <h4 ref={newsletterRef} className={`${show?'font-bold  flex justify-start animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in':'font-bold '}`}>2. Etabpr des pens durables : proximité, disponibipté, confiance</h4> 

          
                    <div className=' flex justify-start'>
              
                    <p className=' flex justify-start'>
                        
                    Grâce à son organisation de taille humaine, HK AUDIT & CONSEILS, dans ses rapports avec ses cpents, possède une souplesse d’intervention qui permet de moduler son offre de services aux besoins usuels et spécifiques des entreprises.
                    L'engagement personnel de chaque associé et la grande permanence des équipes sont des atouts majeurs pour HK AUDIT & CONSEILS.
                    Tous les collaborateurs partagent une même culture de service qui permet d’alper réactivité, disponibipté et efficacité.
                    </p>
                    </div>
                 
               

                
                
                <h4 ref={newsletterRef} className={`${show?'font-bold  flex justify-start animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in':'font-bold '}`}>3. Compétences pées Aux Univers De Nos Cpents</h4> 
                <p className=' flex justify-start'>
               Notre présence auprès de PME-PMI, ainsi que notre très bonne connaissance du secteur des Organisations nous ont permis d'acquérir des compétences multiples et de faire de nos équipes des spéciapstes dans ces domaines.
         
                </p>
           
            
            </Card>
        
    </Card>
   
</div>

  )
}
