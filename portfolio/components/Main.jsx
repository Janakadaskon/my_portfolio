import React from 'react'
import { AiOutlineAim, AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image'

import Profile from '../public/assets/my.png'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'> 
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
            <div>
                <div className='waivy'>
                <div>
                    <h2 className='text-[#bf57d6]'>
                        Hola...!
                        </h2>
                    </div>

                </div>
                <p className='header uppercase text-sm tracking-widest text-gray-600'>
                    LET'S BUILD SOMETHING TOGETHER
                </p>
                <div className='rounded-full flex justify-center items-center'>
                    <Image 
                        src={Profile}
                        alt='/'
                        width='125'
                        height='50'
                        className='cursor-pointer rounded-full'
                    
                    />
                </div>
                <h1 className='py-2 text-gray-700'>
                    Hi, I'm <span className='first-name text-[#2d4d93]'>Janaka </span> <span className='second-name text-[#c8a13e]'> Daskon</span>
                </h1>
                <h1 className='role py-2 text-gray-700'>Full-Stack Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                Welcome to my digital space, where innovation meets functionality! I'm a passionate and results-driven Full Stack Developer with a knack for transforming ideas into seamless, user-centric experiences. Explore my portfolio to witness the fusion of creativity and technical prowess that defines my journey in the world of web development.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>
                </div>
                
            </div>
        </div>
        <style jsx>{`
            @keyframes loading{
                0% {
                    opacity: 0;
                }
                50% {
                    opacity: 50%;
                }
                100% {
                    opacity: 100%;
                }
            }

            @keyframes shine {
                0% {
                    background-position: 0;
                }

                100% {
                    background-position: 500%;
                }
            }

                .waivy h2{
                    animation: loading 5s infinite;
                }

            
        `}</style>
    </div>
  )
}

export default Main