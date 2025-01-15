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
import HyperText from '../components/ui/hyper-text'
import SparklesText from '@/components/ui/sparkles-text'

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
          <SparklesText className="text-green-500 text-7xl"  text="Programar igual de facil que Respirar." />
          <HyperText> Software Engineer</HyperText>
          <p className='text-white py-4 '>Como ingeniero full-stack experimentado, me apasiona dar vida a ideas creativas a través de aplicaciones web innovadoras. Explore mis últimos proyectos y artículos, que muestran mi experiencia en desarrollo web.</p>
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