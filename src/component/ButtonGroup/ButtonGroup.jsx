import { useState } from 'react';
import './ButtonGroup.css'

import { Button, Modal } from 'flowbite-react';
import { Modals } from '../modal/modal';

function ButtonGroup() {
  //definition du texte qui sera afficher dans la boite modal 
  const textexp =`Nous sommes un cabinet de taille humaine établi à Yaoundé-Melen, regroupant des professionnels formés aux techniques en vigueur au sein des grands cabinets internationaux et bénéficiant, pour certains, d'une expérience opérationnelle en entreprise. Titulaire de mandats dans plusieurs secteurs d’activité nous souhaitons constituer une alternative crédible aux grands réseaux nationaux ou internationaux de professionnels auprès de votre entreprise en misant sur :
                • la qualité de la relation humaine, la disponibilité et la réactivité au service des dirigeants de ces entreprises et de leur état-major financier ;
                • la maîtrise des problématiques techniques liées aux secteurs des entités, l'expérience des domaines d'activité et l'utilisation d'outils informatisés de révision adaptés ;
                • la mobilisation d'équipes expérimentées pérennes sur le long terme ;
                • des honoraires raisonnables, au regard du niveau d'expérience des intervenants.`
const title ='expertive'
const [openModal,setOpenModal] =useState() //ce state nous permettra d'ouvrier la boite modal


const textDomain = `Notre approche professionnelle vous apportera une réelle valeur ajoutée. En effet, conformément aux évolutions réglementaires qui accordent une attention grandissante à la qualité du contrôle interne, notre approche d'audit fait une large place à la compréhension des différentes activités et des risques associés, puis à l'analyse des procédures (des traitements de l'information en particulier) et des points de contrôle interne intégrés.
                    En confiant ces diligences à des personnes expérimentées, nous sommes à même de formuler des recommandations qui prennent en compte la performance des contrôles et la performance économique de l’entité auditée.`
const titleDomaine = 'Notre approche du métier'
const [openModal2,setOpenModal2] =useState()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3  md:space-y-auto space-y-20 space-x-0 md:space-x-20 text-white font-semibold">
      <Modals openModal={openModal} body={textexp} title={title} setOpenModal={setOpenModal} ></Modals>
      <Modals openModal={openModal2} body={textDomain} title={titleDomaine} setOpenModal={setOpenModal2} ></Modals>
        
        <div className='' >
            <h5>Expertise</h5>
            <Button color='bg-primary' className='bg-primary  hover:bg-green-500 text-white' onClick={()=>{setOpenModal(true)}}>
            Decouvrir Le cabinet Hk
            </Button>
        </div>
        <div>
            <h5>
              Competence
            </h5>
            <Button color='bg-primary'className='bg-primary  hover:bg-green-500 text-white' onClick={()=>{setOpenModal2(true)}}>
                Nos domaine de competences
            </Button>
        </div>
        <div>
            <h5>
                Qui somme nous
            </h5>
            <Button color='bg-primary' className='bg-primary  hover:bg-green-500 text-white' href=''>
                En savoir plus
            </Button>
        </div>
      {/* <Button.Group outline className='space-x-4'>
        <Button color='bg-primary'color="gray">Profile</Button>
      
      </Button.Group> */}
   
    </div>
  );
}

export default ButtonGroup
