
'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export function Modals(props) {


  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal show={props.openModal} onClose={() => props.setOpenModal(false)}>
        <Modal.Header className='uppercase '>{props.title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {props.header}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {props.body}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer  className='flex justify-center'>
          <Button color='bg-green-500' className='bg-green-500 text-white' onClick={() => props.setOpenModal(false)}>okay</Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}
