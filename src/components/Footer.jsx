import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
    return (
        <>
            <div className='bg-gray-900 flex justify-center items-center h-20 text-white gap-5'>
                <p> 2025 Jeff. All rights reserved.</p>
                    <div className="flex justify-center items-center gap-3">
                        <Link href="https://www.tiktok.com/@devjef" target="_blank" rel="noopener noreferrer">
                           <Image src="/tiktok.svg" alt="GitHub" width="60" height="60" />
                        </Link>
                    </div>

                    <div className="flex justify-center items-center gap-3">
                        <Link href="https://www.linkedin.com/in/jefferson-obregon-mejia-2245842b0/" target="_blank" rel="noopener noreferrer">
                            <Image src="/linkeding.svg" alt="LinkedIn" width="50" height="50" />
                        </Link>
                    </div>
                

            </div>
        </>
    )
}

export default Footer