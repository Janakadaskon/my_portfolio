import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContactImg from '../public/assets/contact.jpg'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineAim, AiOutlineMail } from 'react-icons/ai'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'


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
                        <div className='flex items-center justify-between py-4'>
                            
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                        </div>
                    </div>
                </div>
                {/* right side */}
            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                <div className='p-4'>
                    <form 
                            action="https://getform.io/f/db7c4e2c-361a-4d74-b706-00077357c986"
                            method='POST'
                            encType='multipart/form-data'
                    >
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>Name</label>
                            <input
                                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                                    type="text" 
                                    name="name" 
                            />
                        </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>
                                        Phone Number
                                </label>
                                <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type="text" 
                                        name="phone"     
                                />

                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>
                                    Email
                            </label>
                            <input
                                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                                    type="email" 
                                    name="email"     
                            />

                        </div>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>
                                    Subject
                            </label>
                            <input
                                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                                    type="text" 
                                    name="subject"     
                            />

                        </div>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>
                                    Message
                            </label>
                            <textarea 
                                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                                    rows='10' 
                                    name="message" 
                            ></textarea>

                        </div>
                        <button className='w-full p-4 text-gray-100 mt-4'>
                            Send Message
                        </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-10'>
                <Link href='/'>
                    
                        <div className='flex justify-center rounded-full shadow-lg items-center shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp
                                className='text-[#5651e5]'
                                size={30}
                        />
                        </div>
                    
                </Link>

            </div>
        </div>
    </div>
  )
}

export default Contact