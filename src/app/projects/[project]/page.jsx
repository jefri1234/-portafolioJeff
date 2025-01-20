"use client"
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'


function ProjectPage() {

    const params = useParams()
    const router = useRouter()
    console.log(params)

    return (
        <div className='flex justify-center items-center flex-col gap-5'>
            <p className='text-white'>The project is: {params.project}</p>
            <button type="button" onClick={() => router.back( )} className='bg-green-500 p-2 rounded-lg text-center flex justify-center items-center'>
                regresar
            </button>
        </div>
    )
}

export default ProjectPage
