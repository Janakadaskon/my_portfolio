import React from 'react'
import { AiOutlineAim, AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image'
import {useSpring, animated} from 'react-spring'

import Profile from '../public/assets/fav.jpeg'
import { fromJSON } from 'postcss'
import { transform } from 'next/dist/build/swc'

const Main = () => {

  return (
    <div className='w-full h-screen text-center'> 
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
            <div>
                <div className='waivy'>
                <div>
                    <h2 className='text-[#101010]'>
                        Hola...!
                        </h2>
                    </div>

                </div>
                <p className='build-text orbit header uppercase text-sm p-2 tracking-widest text-gray-600'>
                    LET'S BUILD SOMETHING TOGETHER
                </p>
                <div className='rounded-full flex justify-center items-center'>
                    <div className='ring' />
                    <Image 
                        src={Profile}
                        alt='/'
                        width='150'
                        height='150'
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
            

            @keyframes shine {
                0% {
                    background-position: 0;
                    opacity: 0.6;
                }
                10% {
                    background-position: 100%;
                    opacity: 0.7;
                }
                20% {
                    background-position: 200%;
                    opacity: 0.8;
                }
                30% {
                    background-position: 300%;
                    opacity: 0.9;
                }
                50% {
                    background-position: 500%;
                    opacity: 1;
                }
                70% {
                    background-position: 700%;
                    opacity: 0.9;
                }
                80% {
                    background-position: 800%;
                    opacity: 0.8;
                }
                90% {
                    background-position: 900%;
                    opacity: 0.7;
                }

                100% {
                    background-position: 1000%;
                    opacity: 0.6;
                }
            }

                .waivy h2{
                    animation: shine 5s infinite;
                    background: linear-gradient(90deg, #bf57d6, #2d4d93, #c8a13e, #bf57d6);
                    background-size: 200% 100%;
                    color: transparent;
                    -webkit-background-clip: text;
                    background-clip: text;
                    display: inline-block;
                }

                .orbit{
                    position: relative;
                }

                .ring{
                    position: absolute;
                    width:16%;
                    height:16%;
                    border: 4px solid transparent;
                    border-radius: 50%;
                    animation: orbit 4s linear infinite;
                }

            @keyframes orbit{
                0%{
                    border-top-color:#ff0000;
                    border-bottom-color:#00ff00;
                    transform: rotate(0deg)

                }
                50%{
                    border-top-color:#00ff00;
                    border-bottom-color:#ff0000;
                    transform: rotate(180deg)

                }
                100%{
                    border-top-color:#ff0000;
                    border-bottom-color:#00ff00;
                    transform: rotate(360deg)

                }
            }

                .build-text{
                    animation: fadeIn 3s ease-out;
                }
            @keyframes fadeIn{
                0%{
                    opacity: 0;
                    transform: translateY(-20px);
                }
                100%{
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            
        `}</style>
    </div>
  )
}

export default Main