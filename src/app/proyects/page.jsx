import React from 'react'
import BoxRevealDemo from './components/BoxRevealDemo'
import { MagicCardDemo } from './components/MagicCardDemo'

function Proyects() {
  return (
    <>
      <BoxRevealDemo />
      <div className='w-3/6 container mx-auto p-10'>
        <MagicCardDemo />
      </div>
    </>
  )
}

export default Proyects