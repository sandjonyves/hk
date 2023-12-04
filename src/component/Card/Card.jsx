

import { Card } from 'flowbite-react';
import { Typewriter,Cursor } from 'react-simple-typewriter';
function Cards() {
  return (
    <Card  className=" border-x-4 border-green-500 max-w-xl min-w-sm ">
      <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sapce-y-3">
      CABINET HK AUDIT & CONSEILS
      </h5>
      <p className="font-normal text-2xl text-gray-700 dark:text-gray-400">
            <Typewriter
            words={['Directeur Administraif et Finencier a tempspartage partenaire de votre gestion finaciere']}
            loop={5}
            cursor
            cursorStyle='_'
            
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1000}
            
            ></Typewriter>
            <span>
                <Cursor cursorStyle='<' cursorColor='green'></Cursor>
            </span>
                 
      </p>
    </Card>
  );
}
export default Cards
