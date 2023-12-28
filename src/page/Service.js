import { Card } from 'flowbite-react'
import React from 'react'

export default function Service() {

  // const newsletterRef = useRef()
  // const [show,setShow] =useState()
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
    <div name='service'>

        <Card  className="border-x-4 border-green-500 my-10 md:mx-40 mx-0 drop-shadow-lg"  >

        <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Services 
            
        </h4>


        <h4  className={`'font-bold  flex justify-start'font-bold '}`}> La Gamme complète de services
                    Historiquement présent sur plusieurs métiers :  </h4 >
                    <span className='flex justify-start'>   • l’audit légal et contractuel,  </span>
                    <p  className={`'flex justify-start'`}>    • l’expertise comptable            ,</p>
                    <p  className={`'flex justify-start'`}>    • le conseil comptable et financier,</p>
                    <p  className={`'flex justify-start'`}>    • l’assistance comptable et fiscale,</p>
                    <p  className={`'flex justify-start'`}>    • la restructuration des organisations,</p>
                    <p  className={`'flex justify-start'`}>    • la formation(Etudiants,stagers ...) </p>
                    
</Card>
      
    </div>
  )
}
