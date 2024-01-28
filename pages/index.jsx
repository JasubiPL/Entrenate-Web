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
          gap-4 text-center hover:scale-105 hover:shadow-red-200 transition-all active:scale-95
          dev-list-mobile-animation-up'>
            <GiGymBag className='text-6xl'/>
            <h2 className='text-2xl'>Ejercicio en GYM</h2>
            <p className="text-sm font-light">
              En el gimnasio, puedes disfrutar de una amplia gama de actividades físicas y 
              entrenamientos personalizados según tus objetivos. Desde levantamiento de 
              pesas hasta entrenamiento funcional, hay algo para todos.
            </p>
          </Link>
        </section>
      </main>
    </PrincipalLayout>
  )
}
