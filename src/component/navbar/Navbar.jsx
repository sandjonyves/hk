
'use client';

import { Button, Dropdown, Navbar } from 'flowbite-react';
import logo from "../../assets/logo.png" 
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from 'react';
import { Modals } from '../modal/modal';
import { PiFacebookLogoLight, PiFacebookLogoThin, PiInstagramLogoBold, PiWhatsappLogoThin } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import { FaSquareFacebook } from "react-icons/fa6";
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import i18n from '../../i18n.js/i18n';
export default function Component() {
  const [openModal,serOpenMo1dal] = useState(false)
  const {t}=useTranslation()
 const onChangeLangage = (e)=>{
  i18n.changeLanguage(e.target.value)
  alert(e.target.value)
  
 }
  return (
  
    <>
    <Navbar fluid rounded className='opacity-90 '>
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="bus tiket " />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Comptable</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        
{/* 
        <p onClick={serOpenMo1dal(true)}>HJHJHJHJHJ</p> */}
        
      <Button  color='green' className='bg-primary' href='tel:\\699852502' ><FaPhoneAlt color='white'/><span className='text-white' >(+237)699852502</span></Button>
      {/* <Button  color='green' className='bg-green-400' href='tel:\\677795125'> <span className='text-white' >(+237)677795125</span></Button> */}  
     <div>
        <select onChange={onChangeLangage}>
            <option value='fr'>
              fr
            </option>
            <option value='en'>
              en
            </option>
        </select>
     </div>
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link >
          <Link
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
          Service
        </Link>
      </Navbar.Link>
        <Navbar.Link href=""><Link
                                  activeClass="active"
                                  to="about"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={1000}
                              >
                              About
                              </Link>
        </Navbar.Link>
       
        <Navbar.Link href="#"  >   <Dropdown label="Contact"  inline placement='left' >
      <Dropdown.Item className='mr-[200px]' ><PiWhatsappLogoThin color='green' size={40}/>Whatsappa</Dropdown.Item>
    </Dropdown></Navbar.Link>
      </Navbar.Collapse>

    </Navbar>
    <Modals openModal={openModal}></Modals>

    </>
  );
}
