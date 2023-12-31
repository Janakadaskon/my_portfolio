import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

import NavLogo from '../public/assets/alpha.png'


const Navbar = () => {

  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ffffff');
  const [linkColor, setLinkColor] = useState('#1f2937')

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90){
        setShadow(true);
      }else{
        setShadow(false);
      }
    };
    window.addEventListener('scroll' , handleShadow);
  }, []);

  return (
    <div 
      style={{backgroundColor: `${navBg}`}}
      className='fixed w-full h-20 shadow-xl z-10'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
          <Image 
            src={NavLogo}
            alt='/'
            width='120'
            height='50'
            className='cursor-pointer'
          
          />
          <div>
            <ul className='hidden md:flex'>
              <Link href='/' legacyBehavior>
                <li className='ml-10 text-sm uppercase hover:border-b'>HOME</li>
              </Link>
              <Link href='/#about' legacyBehavior>
                <li className='ml-10 text-sm uppercase hover:border-b'>ABOUT</li>
              </Link>
              <Link href='/#skills' legacyBehavior>
                <li className='ml-10 text-sm uppercase hover:border-b'>SKILLS</li>
              </Link>
              <Link href='/#projects' legacyBehavior>
                <li className='ml-10 text-sm uppercase hover:border-b'>PROJECTS</li>
              </Link>
              <Link href='/#contact' legacyBehavior>
                <li className='ml-10 text-sm uppercase hover:border-b'>CONTACT</li>
              </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden'>
              <AiOutlineMenu size={25} />
            </div>
          </div>
          
      </div>
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ""}>
        <div 
            className={
                nav 
                  ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                  : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
              } 
            >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src={NavLogo} width='87' height='35' alt='/' />
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Beyond the Bounderies</p>
            </div>
          </div>
          <div className='py-4 flex flex-col '>
            <ul className='uppercase'>
              <Link href='/' >
                <li className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/#about' >
                <li className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/#skills' >
                <li className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/#projects' >
                <li className='py-4 text-sm'>Projects</li>
              </Link>
              <Link href='/#contact' >
                <li className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&apos;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div 
                  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
                <div 
                  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
                <div 
                  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <Link href='/contact'>
                  <div 
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
                
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Navbar