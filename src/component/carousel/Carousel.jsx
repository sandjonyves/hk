import {  Carousel } from 'flowbite-react';
import React from 'react'

import './carousel.css'

import  image1 from '../../assets/image3.jpg'
import  image2 from '../../assets/logo.png'
import  image3 from '../../assets/image1.jpg'
import  image4 from '../../assets/image2.jpg'
export default function Carousels() {

    const Image = [image1,image2,image3,image4]
  return (<>


<div className="h-56 sm:h-64 xl:h-80 2xl:min-h-[70vh]">
      <Carousel leftControl="left" rightControl="right">
        {Image.map((img,i) => <img src={img} key={i} className='h-full'></img>)}
      </Carousel>
    </div>
 </> )
}
