import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Main from '@/components/Main'
import Image from 'next/image'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ProjectItem from '@/components/ProjectItem'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Janaka Daskon | Full-Stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <ProjectItem /> */}
    </div>
  )
}
