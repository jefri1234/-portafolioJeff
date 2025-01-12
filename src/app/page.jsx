"use client"
import React from 'react'
import Image from 'next/image'
import { VelocityScroll } from '../components/ui/scroll-based-velocity'
import { RainbowButton } from '@/components/ui/rainbow-button'
import MorphingText from '../components/ui/morphing-text'
import TextRevealByWord from '../components/ui/text-reveal'
import IconCloudDemo from '../components/iconAnimacion'
import { HeroVideoDialogDemo } from '../components/video'
import Tarjeta from '../components/ui/card'
import Head from 'next/head'
const texts = [
  "Hello",
  "Morphing",
  "Text",
  "Animation",
  "React",
  "Component",
  "Smooth",
  "Transition",
  "Engaging",
];


function Home() {
  return (
    <div className='bg-gray-900 w-full '>
      <Head>
        <title>My page title</title>
      </Head>
      <div className='flex justify-center items-center container mx-auto'>
        <div className='p-10 container '>
          <Image
            src={'/alien.png'}
            width={720}
            height={720}
            alt='alien'
          />
        </div>
        <div className=' container mx-auto p-10'>
          <h1 className='text-6xl  text-green-400 font-bold uppercase text-left'>Turning Vision Into Reality With Code. </h1>
          <p className='text-white text-3xl py-2 font-bold'>Software Engineer | Full-Stack Engineer</p>
          <p className='text-white py-4 '>As a skilled full-stack engineer, I am passionate about bringing creative ideas to life through innovative web applications. Explore my latest projects and articles, showcasing my expertise in web development.</p>
          <RainbowButton>Proyectos</RainbowButton>;

        </div>
      </div>
      <TextRevealByWord text="Si lo Puedes Imaginar Lo Puedes Programar..." />

      <HeroVideoDialogDemo />
      <VelocityScroll className="text-white">Code Jeff Dev</VelocityScroll>
      <div className='flex justify-center items-center container mx-auto gap-5 pt-10 w-2/3 flex-wrap'>
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
      </div>


      <div className='pt-10'>
        <div className='bg-gray-950 py-10 flex justify-center items-center'>
          <IconCloudDemo />
        </div>
      </div>
    </div>
  )
}

export default Home