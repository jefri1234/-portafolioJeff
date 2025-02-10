"use client"
import React from 'react'
import Image from 'next/image'
import { VelocityScroll } from '../components/ui/scroll-based-velocity'
import { RainbowButton } from '@/components/ui/rainbow-button'
import TextRevealByWord from '../components/ui/text-reveal'
import HyperText from '../components/ui/hyper-text'
import SparklesText from '@/components/ui/sparkles-text'
import Link from 'next/link'
import Profile from '@/components/Profile';

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
    <div className='bg-gray-900 w-full'>
      <div className='flex flex-col md:flex-row justify-center items-center container mx-auto'>
        <div className='p-5 w-full md:w-1/2'>
          <Image
            src={'/alien.png'}
            width={720}
            height={720}
            alt='alien'
            className="w-full h-auto object-contain"
          />
        </div>
        <div className='container mx-auto px-10 w-full md:w-1/2'>
          <SparklesText className="text-green-500 text-3xl sm:text-4xl md:text-5xl lg:text-7xl" text="MAX OBREGON MEJIA" />
          <HyperText className="text-xl sm:text-2xl">Software Engineer</HyperText>
          <p className='text-white py-4 text-sm sm:text-base md:text-lg'>
            Como ingeniero full-stack experimentado, me apasiona dar vida a ideas creativas a través de aplicaciones web innovadoras. Explore mis últimos proyectos y artículos, que muestran mi experiencia en desarrollo web.
          </p>
          <Link href="/projects">
            <RainbowButton className="text-sm sm:text-base">Proyectos</RainbowButton>
          </Link>
        </div>
      </div>
      <div>
        <Profile/>
      </div>

      <div className='flex justify-center items-center '>
        <TextRevealByWord text="Si lo Puedes Imaginar Lo Puedes Programar..." />
      </div>
      

    </div>
  )
}

export default Home
