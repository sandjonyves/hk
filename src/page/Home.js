import React, { useEffect, useState } from "react";
import { Button, Card, Dropdown } from "flowbite-react";
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
import image from './logo192.png'
import { Link } from "react-scroll";
import imgabeBackgound from '../assets/back/image9.jpg'



export default function Home() {

  //text parlent de hk

  const newsletterRef = useRef()
   const [show,setShow] =useState()
  // useEffect(()=>{
  //   const observer  = new IntersectionObserver(entrie=>{
  //     if(entrie[0].isIntersecting){
  //       // const footer =document.querySelector("#footer").setAttribute('class','')
  //       setShow(true)
  //       observer.unobserve(newsletterRef.current)
  //       console.log('entreier',entrie[0])
  //     }else{
  //       setShow(false)
  //     }
  //   })
  // observer.observe(newsletterRef.current)  
  // console.log('obsever',observer)
  // },[])

 
  return (
      
<div>
<header class="header" > <Component class="header"></Component></header>

  <section className="">
  <div class="grid grid-cols-1 md:grid-cols-2  max-w-screen-4xl md:pt-0 lg:pl-24 md:flex-row mx-auto md:pr-0 flex flex-col mr-0">
      <div class="flex-1 flex justify-center flex-col px-4 lg:-mr-24">
      <div class="text-gray-900"><ul id="breadcrumbs" class="mt-6 lg:pt-0 flex text-xs space-x-1"><li><Link to="/" class="hover:underline active">
        Home
      </Link></li><li><span class="font-semibold">Déposez vos impôts

      </span></li></ul></div><div class="flex-1 flex flex-col justify-center flex-shrink lg:mr-20 lg:pr-6 h-full pb-6">
        <h1 class="text-3xl font-bold pt-6 md:pt-0 pr-16 tracking-snug md:leading-none md:whitespace-pre-line text-hrbgreen-600 lg:text-5xl">
        CABINET HK AUDIT & CONSEILS</h1><h2 class="pt-3 md:pt-6 md:whitespace-pre-line text-gray-900  text-xl pr-8">
        Que vous souhaitiez déclarer vos impôts auprès d'un expert dans un bureau, à distance ou le faire vous-même, nous vous proposons plusieurs façons de déclarer.

            </h2><div class="flex flex-col md:flex-row"><div class="flex flex-col md:flex-row pt-5 md:pt-6"><div class="md:flex items-center justify-start w-full md:w-min"><div class="CTA flex inline whitespace-nowrap  w-full md:w-max"><div class="relative w-full ">
              <button href="/file-with-an-expert/"
               class="text-white flex mx-auto md:mx-0 outline-none focus:outline-black border-transparent border-2 text-black bg-green-300 no-underline hover:bg-green-100 leading-none w-full md:w-auto justify-center inline-flex font-medium items-center px-4 py-5 md:py-4 lg:px-6 border-transparent 
                       leading-6 focus:outline-black transition ease-in-out duration-150">
                conctacter un expert </button></div></div></div></div><div class="flex flex-col md:flex-row pt-5 md:pt-6">
                  <div class="md:flex items-center justify-start w-full md:w-min"><div class="px-2 text-gray-900">
                    </div><div class="CTA flex inline whitespace-nowrap  w-full md:w-max"><div class="relative w-full ">
                      <Link href="/file-your-taxes/online-tax-software/"
                         class="flex mx-auto md:mx-0 outline-none focus:outline-black border-transparent border-2 text-white
                          bg-black hover:bg-gray-800 leading-none w-full md:w-auto justify-center inline-flex 
                          font-medium items-center px-4 py-5 md:py-4 lg:px-6 border border-transparent text-base leading-6 
                          focus:outline-black transition ease-in-out duration-150">
                          prendre rendez vous</Link></div></div></div></div></div></div>
      </div>
      <div class="flex-2 mt-1 relative text-left ">
      <div class="w-full md:w-full h-full ">
        <div class="w-full h-full inset-0 flex items-center justify-center overflow-hidden relative ">
          <img src={imgabeBackgound} alt="Getty Images 1152308719" class="object-contain w-full h-full  lg:block "></img>
          </div></div>
    </div>
    </div>


    <div>

    </div>
  {/* <div class="image" >

        

      <div className="absolute insert-x-0 bottom-0 bg-green-100 grid grid-cols-5" >
          <PiWhatsappLogoFill  color='green' size={40}/>
          <FaSquareFacebook color='blue' size={40}/>
          <PiInstagramLogoBold color='red' size={40}/>
          <SiGmail color='red' size={40} cursor='pointer' />
          <SiYahoo color='violet' size={40} cursor='pointer'/>
        </div>
    </div> */}


  </section>

  <section>
    <div class="flex md:flex-wrap overflow-hidden max-w-screen-2xl px-0 md:px-20 md:py-10 flex-col md:flex-row mx-auto">
    <div class="flex w-full flex-col md:px-0 text-center px-6">
    <h2 class="md:px-8 text-3xl md:text-4xl py-8 font-bold text-black w-11/12 md:w-5/6 lg:w-8/12 xl:w-1/2 mx-auto">Travailler avec un Expert  Comptable.</h2>
    <div class="py-3 md:px-8 mx-auto text-xl md:w-8/12 textColor">
    <p> Directeur Administraif et Finencier a temps partage partenaire de votre gestion finaciere.</p>
    </div>

    <div class='grid md:grid-cols-3 grid-cols-1 -md:justify-ceenter '>
       <div>
       <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Experts-comptables
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Nous vous  offrons une gamme de services aux entreprises et aux particuliers. 
      Outre la tenue des comptes et la préparation des états financiers, des conseils en matière de fiscalité, 
      d'optimisation fiscale, de gestion financière, de planification successorale, d'évaluation d'entreprise, de conformité réglementaire, 
      de conseil en matière de fusion et acquisition, et bien d'autres services liés à la gestion financière.
      </p>
  
    </Card>
       </div>
       <div>
       <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Commissaire au compte
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Nos commissaires aux comptes prennent la peinne de respecter la confidentialité 
      des informations qu'il obtient lors de son audit Et est soumis à un devoir de secret professionnel
       et ne peut divulguer ces informations qu'en cas d'obligation légale ou avec le consentement de l'entreprise.
      </p>
      {/* <Button>
        Read more
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button> */}
    </Card>
       </div>
       <div>
         <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         Audit comptable
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Par nos Audits comptables  vous avez plusieurs avantages. le renforcement de la confiance des parties prenantes, 
      telles que les actionnaires, les créanciers et les investisseurs, envers les informations financières de l'entreprise. 
      Il aide également les dirigeants à détecter et à corriger les erreurs, les fraudes ou les pratiques comptables inappropriées.
       De plus, la contribuer à l'amélioration  des processus 
      et les contrôles internes de l'entreprise en identifiant les zones de risques et en proposant des recommandations pour les améliorer.
      </p>
      {/* <Button>
        Read more
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button> */}
    </Card>
       </div>
       
         <button  className="m-4 flex mx-auto md:mx-0 outline-none focus:outline-green border-transparent border-2 text-white
                          bg-green-500 hover:bg-green-800 leading-none w-full md:w-auto justify-center inline-flex 
                          font-medium items-center px-4 py-5 md:py-4 lg:px-6 border border-transparent text-base leading-6 
                          focus:outline-green transition ease-in-out duration-150">
           Nous Conctacter 
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
    
    {/* <div class="flex justify-center flex-wrap flex-col md:flex-row w-full space-x-1 space-y-4">
    
    <div alt="Produire à un bureau" class="overflow-hidden w-full md:w-1/3 items-center text-center bg-white flex panel-content flex-col py-8 md:px-8 md:py-8">
   
      <SiYahoo class="mx-auto w-16 h-16 g-image g-image--lazy g-image--loading"></SiYahoo>
     
    <div><h2 class="pt-6 font-bold tracking-snug leading-none text-2xl text-black">Produire à un bureau</h2>
    </div>
    <div class="text-xl flex-grow pt-4 text-black">
    <p>Il y a (presque) toujours un Pro de l’impôt près de chez vous. Prenez un rendez-vous en ligne ou par téléphone ou passez dans un bureau près de chez vous.</p>
    </div><div class="pt-4 space-y-1 items-center text-center flex justify-center items-center text-center"><div class="mx-2"><div class="CTA flex justify-center ">
    <div class="relative w-full ">
      
      <Link class="flex mx-auto md:mx-0 
    outline-none focus:outline-black border-transparent border-2 text-white bg-black hover:bg-gray-800 leading-none w-full md:w-auto
    justify-center inline-flex font-medium items-center px-4 py-5 md:py-4 lg:px-6 border border-transparent text-base leading-6 focus:outline-black 
    transition ease-in-out duration-150">Produire à un bureau</Link>

    </div>
    </div>
    </div>
    </div>
    </div>


    <div alt="Dépôt des documents" class="overflow-hidden w-full md:w-1/3 items-center text-center bg-white flex panel-content flex-col py-8 md:px-8 md:py-8">
    <SiYahoo class="mx-auto w-16 h-16 g-image g-image--lazy g-image--loading"></SiYahoo>
   
   <div><h2 class="pt-6 font-bold tracking-snug leading-none text-2xl text-black">Dépôt des documents</h2></div><div class="text-xl flex-grow pt-4 text-black">
    <p>Tout ce que vous avez à faire, c’est déposer vos documents pendant les heures d’ouverture. Un Pro de l’impôt vous appellera ensuite pour produire votre déclaration et discuter des prochaines étapes.
      </p></div>
      <div class="pt-4 space-y-1 items-center text-center flex justify-center items-center text-center"><div class="mx-2">
        <div class="CTA flex justify-center "><div class="relative w-full ">
          
          <Link href="/fr/faites-votre-declaration/produire-a-un-bureau/depot-pratique/" 
          class="flex mx-auto md:mx-0 outline-none focus:outline-black border-transparent border-2 text-white bg-black hover:bg-gray-800 leading-none w-full md:w-auto justify-center inline-flex font-medium items-center px-4 py-5 md:py-4 lg:px-6 border border-transparent text-base leading-6 focus:outline-black transition ease-in-out duration-150">Profiter du Dépôt pratique</Link></div></div></div></div></div><div alt="Pro de l’impôt à distance" class="overflow-hidden w-full md:w-1/3 items-center text-center bg-white flex panel-content flex-col py-8 md:px-8 md:py-8">
          <SiYahoo class="mx-auto w-16 h-16 g-image g-image--lazy g-image--loading">
            </SiYahoo><div>
            
            <h2
               class="pt-6 font-bold tracking-snug leading-none text-2xl text-black">Pro de l’impôt à distance</h2></div>
               <div class="text-xl flex-grow pt-4 text-black"><p>Téléversez vos documents en toute sécurité. Un Pro de l’impôt à distance H&amp;R Block<sup>MC</sup> va ensuite préparer et produire votre déclaration.</p>
               </div><div class="pt-4 space-y-1 items-center text-center flex justify-center items-center text-center"><div class="mx-2">
                <div class="CTA flex justify-center "><div class="relative w-full ">

                  <Link href="/fr/faites-votre-declaration/pro-de-limpot-a-distance/" 
                  class="flex mx-auto md:mx-0 outline-none focus:outline-black border-transparent border-2 text-white bg-black hover:bg-gray-800 
                  leading-none w-full md:w-auto justify-center inline-flex font-medium items-center px-4 py-5 md:py-4 lg:px-6 border border-transparent 
                  text-base leading-6 focus:outline-black transition ease-in-out duration-150">Produire à distance</Link>


                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div> */}
                  </div>
                  </div>
  </section>
  
{/* <section >
    <div class="max-w-screen-2xl md:pt-0 lg:pl-24 md:flex-row mx-auto md:pr-0 flex flex-col">
      <div class="flex-1 flex justify-center flex-col px-4 lg:-mr-24">
      <div class="text-gray-900"><ul id="breadcrumbs" class="mt-6 lg:pt-0 flex text-xs space-x-1"><li><Link href="/" class="hover:underline active">
        Home
      </Link></li><li><span class="font-semibold">File Your Taxes</span></li></ul></div><div class="flex-1 flex flex-col justify-center flex-shrink lg:mr-20 lg:pr-6 h-full pb-6"><h1 class="text-3xl font-bold pt-6 md:pt-0 pr-16 tracking-snug md:leading-none md:whitespace-pre-line text-hrbgreen-600 lg:text-5xl">Simple ways to file your taxes.</h1><h2 class="pt-3 md:pt-6 md:whitespace-pre-line text-gray-900  text-xl pr-8">Whether you want to file your taxes with an expert in an office, remotely, or do it yourself, we’ve got you covered with multiple ways to file.</h2><div class="flex flex-col md:flex-row"><div class="flex flex-col md:flex-row pt-5 md:pt-6"><div class="md:flex items-center justify-start w-full md:w-min"><div class="CTA flex inline whitespace-nowrap  w-full md:w-max"><div class="relative w-full "><Link href="/file-with-an-expert/" class="flex mx-auto md:mx-0 outline-none focus:outline-black border-transparent border-2 text-black bg-goldenrod-300 no-underline hover:bg-goldenrod-100 leading-none w-full md:w-auto justify-center inline-flex font-medium items-center px-4 py-5 md:py-4 lg:px-6 border-transparent text-base leading-6 focus:outline-black transition ease-in-out duration-150">File with an expert</Link></div></div></div></div><div class="flex flex-col md:flex-row pt-5 md:pt-6"><div class="md:flex items-center justify-start w-full md:w-min"><div class="px-2 text-gray-900"></div><div class="CTA flex inline whitespace-nowrap  w-full md:w-max"><div class="relative w-full "><Link href="/file-your-taxes/online-tax-software/" class="flex mx-auto md:mx-0 outline-none focus:outline-black border-transparent border-2 text-white bg-black hover:bg-gray-800 leading-none w-full md:w-auto justify-center inline-flex font-medium items-center px-4 py-5 md:py-4 lg:px-6 border border-transparent text-base leading-6 focus:outline-black transition ease-in-out duration-150">File yourself</Link></div></div></div></div></div></div>
      </div>
      <div class="flex-1 -mt-2 relative text-left md:pb-halfwidthFourByThree pb-square">
      <div class="w-full md:w-halfwidth h-full absolute overflow-hidden">
        <div class="w-full h-full inset-0 flex items-center justify-center overflow-hidden relative">
          <img src={image} alt="Getty Images 1152308719" class="object-contain w-full h-full  lg:block"></img>
          </div></div>
    </div>
    </div>
    <div class="flex-1 -mt-2 relative text-left md:pb-halfwidthFourByThree pb-square">
      <div class="w-full md:w-halfwidth h-full absolute overflow-hidden">
        <div class="w-full h-full inset-0 flex items-center justify-center overflow-hidden relative">
          <img src={image} alt="Getty Images 1152308719" class="object-contain w-full h-full  lg:block"></img>
          </div></div>
    </div>
    <div class="flex-1 -mt-2 relative text-left md:pb-halfwidthFourByThree pb-square">
      <div class="w-full md:w-halfwidth h-full absolute overflow-hidden">
        <div class="w-full h-full inset-0 flex items-center justify-center overflow-hidden relative">
          <img src={image} alt="Getty Images 1152308719" class="object-contain w-full h-full  lg:block"></img>
          </div></div>
    </div>
</section>
  */}
 
  <div class="card2 "   className={`m-4 flex justify-center  align-item-center`}>
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
