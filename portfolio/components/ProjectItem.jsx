import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const ProjectItem = ({title, backgroundImage, tech, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] z-0'>
        <Image className='rounded-xl group-hover:opacity-10 z-0' src={backgroundImage} alt='/' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
          <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
          <Link href={projectUrl}>
              <p className='text-center py-2 rounded-lg bg-white text-gray-700 font-bold text-small cursor-pointer hover:bg-[#5156e5] ease-in duration-500'>More Info</p>  
          </Link>  
        </div>  
    </div>
  )
}

export default ProjectItem