import React from 'react'
import Image from 'next/image'

import Background from '../public/assets/back.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='flex flex-col justify-center col-span-2 text-center'>
                 <h2 className='py-2'>About Me</h2>
                 <p>Greetings! I&apos;m a versatile and passionate full-stack software developer specializing in Java and a spectrum of other languages. With a foundation built on innovation and a commitment to excellence, I bring a unique blend of technical expertise and creative problem-solving to the world of software development.</p>

            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-500'>
                <Image
                    src={Background}
                    alt='/'
                    width='500'
                    height='350'
                />
            </div>
        </div>
        
    </div>
  )
}

export default About