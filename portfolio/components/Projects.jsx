import React from 'react'
import ProjectItem from './ProjectItem'
import colorImg from '../public/assets/projects/color/3.png'
import google from '../public/assets/projects/google/google.png'
import posImg1 from '../public/assets/projects/pos/1.png'
import portfolio from '../public/assets/projects/portfolio/portfolio.png'
import cafeImg from '../public/assets/projects/cafe/cafe.png'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'


const Projects = () => {
  return (
    <div id='projects' className='w-full z-0'>
        <div className='max-w-[1280px] mx-auto px-2 py-16'>
            <h2 className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</h2>
            <h3 className='py-4'>Let&apos;s see What I&apos;ve Built...!</h3>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='flex flex-col justify-center items-center hover:scale-105 ease-in duration-300'>
                <ProjectItem 
                    title='Color Picker' 
                    backgroundImage={colorImg} 
                    projectUrl='/'  
                    tech='Java fx Java'  
                        
                />
                  <div style={{marginTop: '15px'}}>
                    <h3>Color Picker</h3>
                    <a 
                            href="https://github.com/Janakadaskon/Color_Picker.git"
                            target='_blank'
                            rel='noreferrer'
                          >
                        <div className='rounded-full flex justify-center shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                        </div>
                    </a>
                  </div>
              </div>
              
              <div className='flex flex-col justify-center items-center hover:scale-105 ease-in duration-300'>
                <ProjectItem 
                    title='Smart POS System' 
                    backgroundImage={posImg1} 
                    projectUrl='/'  
                    tech='Java fx 
                            Java'         
                />
                  <div style={{marginTop: '15px'}}>
                    <h3>Smart POS System</h3>
                    <a 
                            href="https://github.com/Janakadaskon/Smart_POS.git"
                            target='_blank'
                            rel='noreferrer'
                          >
                        <div className='rounded-full flex justify-center shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                        </div>
                    </a>
                  </div>
              </div>

              <div className='flex flex-col justify-center items-center hover:scale-105 ease-in duration-300'>
                <ProjectItem 
                    title='Grandpa&apos;s Kitchen' 
                    backgroundImage={cafeImg} 
                    projectUrl='/'  
                    tech='Java fx 
                            Java'         
                />
                  <div style={{marginTop: '15px'}}>
                    <h3>Grandpa&apos;s Kitchen</h3>
                    <a 
                            href="https://github.com/Janakadaskon/Grandpa-s-Kitchen.git"
                            target='_blank'
                            rel='noreferrer'
                          >
                        <div className='rounded-full flex justify-center shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                        </div>
                    </a>
                  </div>
              </div>

              <div className='flex flex-col justify-center items-center hover:scale-105 ease-in duration-300 '>
                <ProjectItem 
                    title='Google' 
                    backgroundImage={google} 
                    projectUrl='/'  
                    tech='HTML CSS'         
                />
                  <div style={{marginTop: '15px'}}>
                    <h3>Google</h3>
                    <a 
                            href="https://github.com/Janakadaskon/Google-design-clone.git"
                            target='_blank'
                            rel='noreferrer'
                          >
                        <div className='rounded-full flex justify-center shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                        </div>
                    </a>
                  </div>
              </div>
              <div className='flex flex-col justify-center items-center hover:scale-105 ease-in duration-300 '>
                <ProjectItem 
                    title='Personal Portfolio' 
                    backgroundImage={portfolio} 
                    projectUrl='/'  
                    tech='HTML CSS'         
                />
                  <div style={{marginTop: '15px'}}>
                    <h3>Personal Portfolio</h3>
                    <a 
                            href="https://github.com/Janakadaskon/my_portfolio.git"
                            target='_blank'
                            rel='noreferrer'
                          >
                        <div className='github rounded-full flex justify-center shadow-lg shadow-gray-400 p-2  cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                        </div>
                    </a>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects