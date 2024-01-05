
import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
// import * as yup from "yup"
// import {yupResolver} from "@hookform/resolvers/yup"
import axios from 'axios';
import { Button, Checkbox, Label, Modal, TextInput,Textarea,Select, Alert} from 'flowbite-react';
import { useTranslation } from 'react-i18next';
import { json } from 'react-router-dom';
import Loading from '../Loading/Loading';




function Forms(props) {
const {t}= useTranslation()

const [verifData,setVerifData] = useState(0)
const {handleSubmit,register,formState: {errors}} = useForm()

const [isLoading,setIsLoading] = useState(false)

const message =() =>{


}

// async function fetchData() {
//   try {
//     const response = await fetch('http://localhost:5000/api/data/');
//     if (!response.ok) {
//       throw new Error('Erreur lors de la requête');
//     }
//     const data = await response.json();
//     // Utilisez les données récupérées ici
//     console.log(data);
//   } catch (error) {
//     // Gérez les éventuelles erreurs ici
//     console.error(error);
//   }
// }

// fetchData();


var counter =5;
var intervalId = null;
function finish() {
  clearInterval(intervalId);
  window.location.reload();
}
function bip() {
    counter--;
    if(counter == 0) finish();
    else {	
       setVerifData(1)
      
    }	
}
function start(){
  intervalId = setInterval(bip, 1000);
}	
const  onSubmit= async (data)=>{

      // const datas = await fetch('http://localhost:5000/api/data/') 
      // .then(()=>alert(datas))
      // .catch(()=>alert('bard'))

  //     fetch('http://localhost:2000/api/data/')
 
  // .then(data => {
  //   // Utilisez les données récupérées ici
  //   console.log(data);
  // })
 

      //  await fetch("http://localhost:5000/api/postData/",
      //  {
      //   method:"post",
      //   headers:{
      //     'Content-Type' : "application/json"

      //   },
      //   body: JSON.stringify( {
      //     'name':data.Name,
      //     'business':data.business,
      //     'email':data.email,
          
      //     'number':data.number,
      //     'subject':data.subject,
      //     'description':data.description
      //   })
      //  })
      //  .then(response => {
      //   if (!response.ok) {
      //     throw new Error('La requête a échoué avec le code de statut : ' + response.status);
      //   }
      //   return response.json();
      // })
      // .then(data => {
      //   console.log(data);
      // })
      // .catch(error => {
      //   console.error(error);
      // });
  
// fetch('http://localhost:5000/api/data', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     'name':data.Name,
//     'business':data.business,
//     'email':data.email,
    
//     'number':data.number,
//     'subject':data.subject,
//     'description':data.description
//   }),
// })
//   .then(response => response.json())
//   .then(data => {
//     alert('bonjour')
//     // Utiliser les données de la réponse
//   })
//   .catch(error => {
//     alert('erreyr')
//     // Gérer les erreurs
//   });


// view the loading
setIsLoading(true)


  axios.post('http://localhost:5000/api/data',{
 
       'name':data.Name,
       'business':data.business,
       'email':data.email,
       
       'number':data.number,
       'subject':data.subject,
       'description':data.description
    
 }).then((res) =>{
  //clase loading
    setIsLoading(false)
    
     
  //open the message to certify your mail
    
  start()
    //  alert('good')
    //  alert(isLoading)
    // document.getElementById('submit').setAttribute('disabled')
    // setVerify(true)
    
 }).catch((res) =>{
    
   //close loading
  
    setIsLoading(false)
    setVerifData(2)
   
    

  //  clearTimeout(x)
 })

// const elm=true
//  if (verifData) {
//   axios.get('api/data/verif')
//   .then((res)=>{
//   elm=res.json()
//   elm=elm.verif
//   }).catch(()=> alert('bard'))
  

   
//  }

//  alert(verifData)
}
// const schema = {

//   name : yup
//   .string()
//   .max(32)
//   .required("verifier ce champ "),
//   email : yup
//   .string()
//   .email('vefier votre adresse email ')
//   .required('verifier ce champ '),

  
// }
  return (
    <di>
    
        
    <Modal show={props.openModal} onClose={() => props.setOpenModal(false)}>
        <Modal.Header className='uppercase '>{t('form')}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

   
<div >
<div className="mb-2 block">
  <Label htmlFor={t('nom')}value={t('nom')} />
</div>
<TextInput id="Name" type="text" placeholder="mr kemadjou" 
        {...register('Name',{
          required:true,
          maxLength:32,
          minLength:2,
        })} shadow />
    {errors.Name && <p className="text-red-500">{t('requiered')}</p>}
    {/* {errors.Name && errors.Name.types==="maxLength"  &&<p className="text-red-500">verifier ce champ </p>}      */}
</div>
<div>
<div className="mb-2 block">
  <Label htmlFor="Business" value={t('business')} />
</div>
<TextInput id="business" type="text" placeholder="hk audit comptable" 
   {...register('business',{
    required:true,
    maxLength:32,
    minLength:2,
  })}/>
          {errors.business && <p className="text-red-500">{t('requiered')} </p>}
</div>


<div>
<div className="mb-2 block">
  <Label htmlFor="email2" value={t('email')} />
</div>
<TextInput id="email2" type="email" placeholder="HuguetteKamadjou@gmail.com" 
 {...register("email",{
  required:true,
  pattern : /^[a-zA-Z0-9._%+-]+@+[a-zA-Z0-9]+.+[A-z]/
})}
/>
{errors.email && errors.email.type ==="pattern" &&(
     //  {veryf},
    <p className="text-red-500">{t('emailError')}</p>)}
  {errors.email && errors.email.type ==="required" &&<p className="text-red-500"> {t('requiered')}</p>}
</div>
<div>
<div className="mb-2 block">
  <Label htmlFor="Number" value={t('Number')} />
</div>
<div className="flex flex-col mb-2 ">

         {errors.name && <p className="text-red-500">{t('requiered')} </p>}
         <TextInput type='text'  placeholder='678727647'
           {...register("number", {
            required: true,
            maxLength:9 ,
            //pattern:/^(\6)(2[2368]|3[235679]|4[79]|5[5789]|6[89]|7[01234569]|8[1345679])(\d{7})$/,
            minLength:9
          
          })}
           
           />
            {errors.number && errors.number.type ==="maxLength" ?(
               //  {veryf},
              <p className="text-red-500"> {t('requiered')}</p>):
              errors.number && errors.number.type ==="minLength" ?(
               //  {veryf},
              <p className="text-red-500"> {t('NumberErreur1')}</p>):
              true
              }
              {/* {errors.number && errors.number.type ==="pattern" &&(
               //  {veryf},
              <p className="text-red-500"> {t('NumberErreur2')}</p>)} */}
            {errors.number && errors.number.type ==="required" &&<p className="text-red-500"> {t("requiered")}</p>}
      </div>
</div>
<div className="max-w-md">
<div className="mb-2 block">

<div>
<div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="subject" value={t('subject')} />
      </div>
      <Select id="subject" {...register("subject",{required:true})} >
      <option className='flex justify-start'>   {t("s4Text2")}   </option>
                    <option  className={`'flex justify-start'`}>   {t("s4Text3")}   </option>
                    <option  className={`'flex justify-start'`}>    {t("s4Text4")}  </option>
                    <option  className={`'flex justify-start'`}>   {t("s4Text5")}  </option>
                    <option  className={`'flex justify-start'`}>  {t("s4Text6")}  </option>
                    <option  className={`'flex justify-start'`}> {t("s4Text7")}   </option>
      </Select>
    </div>
</div>


<Label htmlFor="description" value={t('description')}/>
</div>
<Textarea id="description" placeholder="description "  rows={4} 
{...register("description", {
  required: true,
  maxLength:128 ,
})}
 />
 {errors.description && errors.description.type ==="maxLength" ?(
               //  {veryf},
              <p className="text-red-500"> {t('descriptionError')}</p>):
              errors.description && errors.description.type ==="required" ?(
               //  {veryf},
              <p className="text-red-500"> {t('requiered')} </p>):
              true
              }
</div>
<Modal.Footer  className='flex justify-center'>
          {verifData===2? <Button  type='submit' id="submit" color='bg-green-500' className='bg-green-500 text-white' >Send your mail</Button>
          :verifData==1?<Button disabled type='submit' id="submit" color='bg-green-500' className='bg-green-500 text-white' >Send your mail</Button>

                  :<Button  type='submit' id="submit" color='bg-green-500' className='bg-green-500 text-white' >Send your mail</Button>
          }
        </Modal.Footer>
</form>
            </p>
          </div>
              {/* compoment loading */}
              {isLoading===true &&  <Loading ></Loading>}
         
          {verifData===2 ? <Alert color='failure'> {t('bardMsg')} </Alert>:
          verifData==1?
                  <Alert color='green'> {t('goodMsg')} </Alert>:null}
        </Modal.Body>
         
      </Modal>
  </di>  
  );



}


export default Forms
