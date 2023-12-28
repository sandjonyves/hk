

import { Button, Card } from 'flowbite-react';

import { useTranslation } from 'react-i18next';
function Cards() {

  const {t} = useTranslation()
  return (
    <div className="bg-trasparent  max-w-xl min-w-lg  justify-align-center ">
      <h5 className=" text-3xl font-bold tracking-tight  text-green-500 sapce-y-3">
      {t('s2Title')}
      </h5>
      <p className="font-normal text-2xl text-gray-700 dark:text-gray-400">
            {/* <Typewriter
            words={['Directeur Administraif et Finencier a tempspartage partenaire de votre gestion finaciere']}
            loop={5}
            cursor
            cursorStyle='_'
            
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1000}
            
            ></Typewriter> */}
            {t('s2Text1')}
            {/* <span>
                <Cursor cursorStyle='<' cursorColor='green'></Cursor>
            </span> */}
                 
      </p>
      <p>
        <Button  >
        {t('s2Btn')}
        </Button>
      </p>
    </div>
  );
}
export default Cards
