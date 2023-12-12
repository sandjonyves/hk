
'use client';

import { Button, Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../../assets/logo.png'
import { PiInstagramLogoBold, PiWhatsappLogoThin } from 'react-icons/pi';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { SiGmail, SiYahoo } from "react-icons/si";
function Footter() {
  return (
    <Footer container className='mt-10'>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="#"
              src={logo}
              alt="cabinet hk"
              name="Cabinet HK"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Cabinet hk</Footer.Link>
                <Footer.Link href="#">DG</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Watsapp</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link>          <div color='bg-transparent' className=' ' href='tel:\\6242007263'><span className='text-primary  hover:text-green-500 ' ><FaPhoneAlt color='  '/> (+237)6242007263</span></div>
                </Footer.Link>
                {/* <Footer.Link>
                <div color='bg-transparent' className='bg-primary  hover:bg-green-500 ' href='tel:\\6222222292'><FaPhoneAlt color='blue'/> <span className='text-white' >(+237)6222222292</span></div>

                </Footer.Link> */}
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Cabinet HK™" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <PiWhatsappLogoThin color='green' size={40} cursor='pointer'/>
              <FaSquareFacebook color='blue' size={40} cursor='pointer'/>
              <PiInstagramLogoBold color='red' size={40} cursor='pointer'/>
              <SiGmail color='red' size={40} cursor='pointer' />
              <SiYahoo color='violet' size={40} cursor='pointer'/>

             
          </div>

        </div>
      </div>
    </Footer>
  );
}

export default Footter