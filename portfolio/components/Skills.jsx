import React from 'react'
import Image from 'next/image'

import HTMLLogo from '../public/assets/skills/html.png'
import CSSLogo from '../public/assets/skills/css.png'
import ReactLogo from '../public/assets/skills/react.png'
import JSLogo from '../public/assets/skills/javascript.png'
import AngularLogo from '../public/assets/skills/angular.png'
import Mysql from '../public/assets/skills/mysql.png'
import Nextjs from '../public/assets/skills/nextjs.png'
import Node from '../public/assets/skills/node.png'
import Tailwind from '../public/assets/skills/tailwind.png'
import PostgreSQL from '../public/assets/skills/postgre.svg'
import Firebase from '../public/assets/skills/firebase.png'
import Github from '../public/assets/skills/github1.png'
import Java from '../public/assets/skills/java.png'

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <h2 className='text-xl tracking-widest uppercase text-[#5156e5]'>Skills</h2>
            <h2 className='py-2'>What Can I do?</h2>
           
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={HTMLLogo}
                                alt='/'
                                width='64px'
                                height='64px'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={CSSLogo}
                                alt='/'
                                width='64px'
                                height='64px'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={ReactLogo}
                                alt='/'
                                width='64px'
                                height='64px'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>                        
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={JSLogo}
                                alt='/'
                                width='64px'
                                height='64px'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Java Script</h3>
                        </div>
                    </div>
                </div>                        
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={Node}
                                alt='/'
                                width='64px'
                                height='64px'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Node</h3>
                        </div>
                    </div>
                </div>                      
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={Nextjs}
                                alt='/'
                                width='64px'
                                height='64px'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Next js</h3>
                        </div>
                    </div>
                </div>            
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={AngularLogo}
                                alt='/'
                                width='64px'
                                height='64px'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Angular</h3>
                        </div>
                    </div>
                </div>                        
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={Mysql}
                                alt='/'
                                width='64px'
                                height='64px'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MySQL</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={PostgreSQL}
                                alt='/'
                                width='64px'
                                height='64px'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>PostgreSQL</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={Tailwind}
                                alt='/'
                                width='64px'
                                height='64px'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={Firebase}
                                alt='/'
                                width='64px'
                                height='64px'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Firebase</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={Github}
                                alt='/'
                                width='64px'
                                height='64px'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                                src={Java}
                                alt='/'
                                width='64px'
                                height='64px'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Java</h3>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Skills