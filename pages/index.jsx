import PrincipalLayout from "@/components/PrincipalLayout";
import { TbHomeBolt, TbTrees } from 'react-icons/tb'
import { GiGymBag } from 'react-icons/gi'
import Link from "next/link";


export default function Home() {
  return (
    <PrincipalLayout title='Piñeyro Fit'>
      <main className=' min-h-screen flex flex-col items-center px-2 gap-4 bg-gray-950 py-4 text-white'>
        <section className="w-full flex max-w-5xl h-36 lg:h-64 filter grayscale relative dev-animation-left">
          <img src="/image/banner.jpg" alt="banner principal" 
            className="object-cover rounded-xl"
          />
          <h2 className="absolute w-full h-full grid place-content-center text-5xl md:text-7xl">Cambia tu vida</h2>
        </section>
        <section className='w-full max-w-5xl flex flex-wrap gap-6  justify-center items-start lg:items-center
        lg:flex-nowrap'>
          <Link href='/ejercicioencasa' className='group bg-gray-900 rounded-xl w-full max-w-sm p-6 flex flex-col items-center
          gap-4 text-center border-2 border-gray-900 hover:border-green-500 
          hover:shadow-lg hover:shadow-green-200 transition-all active:scale-95
          dev-list-mobile-animation-up'>
            <TbHomeBolt className='text-6xl group-hover:text-green-500'/>
            <h2 className='text-2xl'>Ejercicio en Casa</h2>
            <p className="text-sm font-light">
              Con el ejercicio en casa, puedes personalizar tu rutina según tus 
              necesidades y preferencias, y no tienes que preocuparte por los horarios 
              del gimnasio. ¡Además, ahorras tiempo y dinero en desplazamientos!
            </p>
          </Link>
          <Link href='/ejercicioengym' className='group bg-gray-900 rounded-xl w-full max-w-sm p-6 flex flex-col items-center
          gap-4 text-center border-2 border-gray-900 hover:border-red-500 
          hover:shadow-lg hover:shadow-red-200 transition-all active:scale-95
          dev-list-mobile-animation-up'>
            <GiGymBag className='text-6xl group-hover:text-red-500'/>
            <h2 className='text-2xl'>Ejercicio en GYM</h2>
            <p className="text-sm font-light">
              En el gimnasio, puedes disfrutar de una amplia gama de actividades físicas y 
              entrenamientos personalizados según tus objetivos. Desde levantamiento de 
              pesas hasta entrenamiento funcional, hay algo para todos.
            </p>
          </Link>
          <Link href='/ejercicioenarealibre' className='group bg-gray-900 rounded-xl w-full max-w-sm p-6 flex flex-col items-center
          gap-4 text-center border-2 border-gray-900 hover:border-blue-500 
          hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95
          dev-list-mobile-animation-up'>
            <TbTrees className='text-6xl group-hover:text-blue-500' />
            <h2 className='text-2xl'>Ejercicio en Area Libre</h2>
            <p className="text-sm font-light">
              Desde correr hasta andar en bicicleta, calistenia y Además, puedes disfrutar del aire fresco y la vista mientras te ejercitas, lo que hace que el ejercicio al aire libre sea una experiencia más agradable.
            </p>
          </Link>
        </section>
      </main>
    </PrincipalLayout>
  )
}
