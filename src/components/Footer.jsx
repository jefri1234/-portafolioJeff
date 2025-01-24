import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
    return (
        <>
            <div className='bg-gray-900 flex justify-center items-center h-20 text-white gap-10'>
                <p>�� 2022 Jeff. All rights reserved.</p>

                <div className="flex justify-center items-center">
                    <Link href="https://github.com/jefri1234" target="_blank" rel="noopener noreferrer">
                        <Image src="/icons/github.png" alt="GitHub" width="40" height="40" />
                    </Link>
                </div>

                <div className="flex justify-center items-center gap-3">
                    <Link href="https://www.linkedin.com/in/jefferson-obregon-mejia-2245842b0/" target="_blank" rel="noopener noreferrer">
                        <Image src="/icons/icon-linkeding.png" alt="LinkedIn" width="40" height="40" />
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Footer