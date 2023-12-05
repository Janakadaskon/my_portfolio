import React from 'react'
import Image from 'next/image'
import ContactImg from '../public/assets/contact.jpg'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineAim, AiOutlineMail } from 'react-icons/ai'


const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                Contact
            </p>
            <h2 className='py-4'>Get In Touch with Me</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left side */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div>
                        <Image
                            className='rounded-xl hover:scale-105 ease-in duration-300'
                            src={ContactImg}
                            alt='/'
                        />
                    </div>
                    <div>
                        <h2 className='py-2'>Janaka Daskon</h2>
                        <p>Full-Stack Developer</p>
                        <p className='py-4'>
                            I am available for full-time Positions & freelancing projects. Contact me and
                            let&apos;s talk. 
                        </p>
                    </div>
                    <div>
                        <p className='uppercase pt-8'>Connect with me</p>
                    </div>
                    <div className='flex items-center justify-center py-4'>
                        
                        <div className='flex items-center justify-between py-4'>
                            <a 
                            href="https://www.linkedin.com/in/janaka-daskon-ab570b1a7"
                            target='_blank'
                            rel='noreferrer'
                            >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                            </a>
                        </div>
                        <div className='flex items-center justify-between py-4'>
                            <a 
                            href="https://github.com/Janakadaskon"
                            target='_blank'
                            rel='noreferrer'
                            >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                            </a>
                        </div>
                        {/* <div className='flex items-center justify-between py-4'>
                            <a 
                            href="https://github.com/Janakadaskon"
                            target='_blank'
                            rel='noreferrer'
                            >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                            </a>
                        </div> */}
                        <div className='flex items-center justify-between py-4'>
                            
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div>
                    <div>
                        <form 
                            action="https://getform.io/f/db7c4e2c-361a-4d74-b706-00077357c986"
                            method='POST'
                            encType=''
                        
                        
                        ></form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact