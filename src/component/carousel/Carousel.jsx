import { Button, Card, Carousel } from 'flowbite-react';
import React from 'react'
import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/image2.jpg"
import './carousel.css'
import Cards from '../Card/Card';
import CardImg from '../cardImage/CardImg';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
export default function Carousels() {

    const Image = [image1,
        image2 ,
        image3]
    const text = [{'title':'dg','body':'bonjour'},{'title':'dg','body':'bonjour'},{'title':'dg','body':'bonjour'}]            
  return (<>


    <div class='.color-overlay' className="carousel-container grid h-56 grid-cols-full gap-6 sm:h-64 xl:h-80 2xl:h-96 ">
       
           
        <Carousel slideInterval={2000} className=''>
        {/* {Image.map((img,index)=> <CardImg image={img} text={text[index]}/> )} */}
{/* 
        <div className='bg-red-400'>
    <div class='btnG'>
    <ButtonGroup>

    </ButtonGroup>
    </div>
    </div> */}

    <Card class='card' imgSrc={image1} horizontal>
       <div>
        popopropero
       </div>
       <div>fd;;dsl;</div>
    </Card>
{/* 
    <div class='image21'>
    <div class='btnG'>
    <ButtonGroup>

    </ButtonGroup>
    </div>
    </div>
    <div class='image22'>
    <div class='btnG'>
    <ButtonGroup>

    </ButtonGroup>
    </div>
    </div> */}
        
        </Carousel>
        {/* <h3>
            hello word
        </h3> */}

    </div>
 </> )
}
