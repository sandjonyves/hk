
import React from 'react'
import {useForm} from 'react-hook-form'
// import * as yup from "yup"
// import {yupResolver} from "@hookform/resolvers/yup"
import { Button, Checkbox, Label, Modal, TextInput,Textarea } from 'flowbite-react';





function Forms(props) {

const {handleSubmit,register,formState: {errors}} = useForm()
const onSubmit= (data)=>{
  console.log(data)

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
        <Modal.Header className='uppercase '>Formulaire de contact</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

   
<div >
<div className="mb-2 block">
  <Label htmlFor="Name" value="Your Name " />
</div>
<TextInput id="Name" type="text" placeholder="mr kemadjou" 
        {...register('Name',{
          required:true,
          maxLength:32,
          minLength:2,
        })} shadow />
    {errors.Name && <p className="text-red-300">Verifier ce chanmp </p>}
    {/* {errors.Name && errors.Name.types==="maxLength"  &&<p className="text-red-300">verifier ce champ </p>}      */}
</div>
<div>
<div className="mb-2 block">
  <Label htmlFor="Business" value="your bussness" />
</div>
<TextInput id="business" type="text" placeholder="hk audit comptable" 
   {...register('business',{
    required:true,
    maxLength:32,
    minLength:2,
  })}/>
          {errors.business && <p className="text-red-300">verifier ce champ </p>}
</div>

<div>
<div className="mb-2 block">
  <Label htmlFor="email2" value="Your email" />
</div>
<TextInput id="email2" type="email" placeholder="HuguetteKamadjou@gmail.com" 
 {...register("email",{
  required:true,
  pattern : /^[a-zA-Z0-9._%+-]+@+[a-zA-Z0-9]+.+[A-z]/
})}
/>
{errors.email && errors.email.type ==="pattern" &&(
     //  {veryf},
    <p className="text-red-300"> verifier l'adresse email</p>)}
  {errors.email && errors.email.type ==="required" &&<p className="text-red-300"> champ vide</p>}
</div>
<div>
<div className="mb-2 block">
  <Label htmlFor="Number" value="Your Number phone" />
</div>
<div className="flex flex-col mb-2 ">
         <label htmlFor="what is your number phone" className=""> Numero de telephone</label>
         {errors.name && <p className="text-red-300">Champ vide </p>}
         <TextInput type='text' 
           {...register("number", {
            required: true,
            maxLength:9 ,
            pattern:/^6[0-9]/ ,
            minLength:9
          
          })}
           
           />
            {errors.number && errors.number.type ==="maxLength" ?(
               //  {veryf},
              <p className="text-red-300"> Verifier le numero</p>):
              errors.number && errors.number.type ==="minLength" ?(
               //  {veryf},
              <p className="text-red-300"> Numeros incomplet </p>):
              true
              }
              {errors.number && errors.number.type ==="pattern" &&(
               //  {veryf},
              <p className="text-red-300"> Le numeros doit commencer par 6</p>)}
            {errors.number && errors.number.type ==="required" &&<p className="text-red-300"> champ vide</p>}
      </div>
</div>
<div className="max-w-md">
<div className="mb-2 block">
<Label htmlFor="description" value="Your message" />
</div>
<Textarea id="description" placeholder="description "  rows={4} 
{...register("descrption", {
  required: true,
  maxLength:128 ,
})}
 />
 {errors.description && errors.description.type ==="maxLength" ?(
               //  {veryf},
              <p className="text-red-300"> le nombre max de caractere est de 128</p>):
              errors.number && errors.description.type ==="required" ?(
               //  {veryf},
              <p className="text-red-300"> Numeros incomplet </p>):
              true
              }
</div>
<Modal.Footer  className='flex justify-center'>
          <Button  type='submit' color='bg-green-500' className='bg-green-500 text-white' >Send your mail</Button>
         
        </Modal.Footer>
</form>
            </p>
          </div>
        </Modal.Body>
       
      </Modal>
  </di>  
  );



}


export default Forms
