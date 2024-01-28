import PrincipalLayout from "@/components/PrincipalLayout";
import { GiGymBag, GiNotebook } from 'react-icons/gi'
import Link from "next/link";


export default function Home() {
  return (
    <PrincipalLayout title='Ejersicio, Nutrición y Salud'>
      <main className=' min-h-screen flex flex-col items-center px-2 gap-4 bg-gray-950 py-4 text-white'>
        <section className='w-full max-w-5xl flex flex-wrap gap-6  justify-center items-start lg:items-center
        lg:flex-nowrap'>
          <Link href='/ejercicioengym' className=' bg-gray-900 rounded-xl w-full max-w-sm p-6 flex flex-col items-center
          gap-4 text-center transition-all active:scale-95
          dev-list-mobile-animation-up'>
            <GiGymBag className='text-6xl'/>
            <h2 className='text-2xl'>Ejercicio en GYM</h2>
          </Link>
        </section>
      </main>
    </PrincipalLayout>
  )
}
