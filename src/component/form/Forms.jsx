
import React from 'react'
import {useForm} from 'react-hook-form'

import { Button, Checkbox, Label, Modal, TextInput,Textarea } from 'flowbite-react';





function Forms(props) {

  return (
    <di>
    

    <Modal show={props.openModal} onClose={() => props.setOpenModal(false)}>
        <Modal.Header className='uppercase '>Formulaire de contact</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <form className="flex max-w-md flex-col gap-4">

   
<div>
<div className="mb-2 block">
  <Label htmlFor="Name" value="Your Name " />
</div>
<TextInput id="Name" type="text" placeholder="mr kemadjou" 
        required shadow />
        
</div>
<div>
<div className="mb-2 block">
  <Label htmlFor="Business" value="your bussness" />
</div>
<TextInput id="business" type="text" placeholder="hk audit comptable" required shadow />
</div>

<div>
<div className="mb-2 block">
  <Label htmlFor="email2" value="Your email" />
</div>
<TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
</div>
<div>
<div className="mb-2 block">
  <Label htmlFor="Number" value="Your Number phone" />
</div>
<TextInput id="Number" type="text" required shadow />
</div>
<div className="max-w-md">
<div className="mb-2 block">
<Label htmlFor="description" value="Your message" />
</div>
<Textarea id="description" placeholder="description" required rows={4} />
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

  const {handleSubmit,register,formState:{erros}} = useForm()

}


export default Forms
