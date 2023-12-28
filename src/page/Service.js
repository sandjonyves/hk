import { Card } from 'flowbite-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Service() {

  const {t} = useTranslation()
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
        {t("s4Title")}
            
        </h4>


        <h4  className={`'font-bold  flex justify-start'font-bold '`}>  {t("s4Text1")}  </h4 >
                    <span className='flex justify-start'>   {t("s4Text2")}   </span>
                    <p  className={`'flex justify-start'`}>   {t("s4Text3")}   </p>
                    <p  className={`'flex justify-start'`}>    {t("s4Text4")}  </p>
                    <p  className={`'flex justify-start'`}>   {t("s4Text5")}  </p>
                    <p  className={`'flex justify-start'`}>  {t("s4Text6")}  </p>
                    <p  className={`'flex justify-start'`}> {t("s4Text7")}   </p>
                    
</Card>
      
    </div>
  )
}
