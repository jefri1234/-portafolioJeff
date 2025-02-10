import React from 'react'
import Link from 'next/link'
function Page() {
  return (
    <div className='h-screen flex flex-col gap-3 justify-center items-center'>
        <p>Upss Pagina no valida regresa al inicio...</p>
        <Link className='bg-green-500 rounded-md p-2' href="/">Inicio</Link>
    </div>
  )
}

export default Page