
'use client';
import'./cardImg.css'

import { Card } from 'flowbite-react';

function CardImg(props) {
  return (
    <div  class='card'>
    <Card className="mb-20" imgSrc={props.image} >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {props.text.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.text.body}
      </p>
    </Card>
  </div>
    
  );
}

export default CardImg