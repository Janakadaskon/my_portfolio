import React from 'react'
import { AiOutlineAim, AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import Typed from "react-typed"
import { motion } from "framer-motion"

import Profile from '../public/assets/fav.jpeg'


const Main = () => {

  const handleResume = () => {
    const resumePath = '/assets/cv/cv.pdf';

    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Janaka_Daskon_cv.pdf';
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div id= '/' className='w-full min-h-screen text-center z-1'> 
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
            <div className='text-container'>
                <div className='waivy'>
                <div>
                    <h2 className='text-[#101010]'>
                        Hola...!
                        </h2>
                    </div>
                </div>
                
                <div className='rounded-full flex justify-center items-center'>
                    <div className='ring' style={{marginTop: '150px'}}/>
                    <Image 
                        src={Profile}
                        alt='/'
                        width='150'
                        height='150'
                        className='cursor-pointer rounded-full'
                        style={{marginTop: '150px'}}
                    
                    />
                
                    
                </div>
                <p className='build-text orbit header uppercase text-sm p-2 tracking-widest text-gray-600 '>
                    LET&apos;S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-2 text-gray-700'>
                    Hi, I&apos;m <span className='build-text first-name text-[#2d4d93] '>Janaka </span> <span className='build-text second-name text-[#c8a13e]'> Daskon</span>
                </h1>
                {/* <h1 className='role py-2 text-gray-700'>Full-Stack Developer</h1> */}
                <motion.h1
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{ duration:0.3, delay: 0.9}}
                    className="text-md dark:text-black capitalize sm:text-2xl"
                    >
                        <Typed 
                            strings={[
                                "software engineer",
                                "UI/UX designer",
                                "Full-Stack developer"
                                
                            ]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                        />
                    </motion.h1>
                <p className='py-2 text-gray-600 max-w-[70%] m-auto'>
                    Welcome to my digital space, where innovation meets functionality! I&apos;m a 
                    passionate and results-driven Full Stack Developer with a knack for transforming 
                    ideas into seamless, user-centric experiences. Explore my portfolio to witness 
                    the fusion of creativity and technical prowess that defines my journey in the 
                    world of web development.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-2'>
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
                    <Link href='/#contact'>
                        <div 
                            className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                    </Link>
                    <Link href='/#contact'>
                        <div 
                            className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </Link>
                    
                </div>
                <button className='p-4 text-lg text-gray-100 mt-4' onClick={handleResume} >Download Resume</button>
                
            </div>
        </div>
        <style jsx>{`


            .text-container{
                max-width:100%;
                padding: 0 20px;
                
            }
            

            @keyframes shine,orbit {
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
                    width:155px;
                    height:155px;
                    border: 5px solid transparent;
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