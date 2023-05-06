import PrincipalLayout from "@/components/PrincipalLayout";
import { TbHomeBolt } from 'react-icons/tb'
import { GiGymBag } from 'react-icons/gi'
import { TbTrees } from 'react-icons/tb'
import Link from "next/link";


export default function Home() {
  return (
    <PrincipalLayout title='Piñeyro Fit'>
      <main className=' min-h-screen flex justify-center bg-gray-950 py-4'>
        <section className='w-full max-w-5xl flex flex-wrap gap-6 p-4 justify-center items-start lg:items-center
        lg:flex-nowrap'>
          <Link href='/ejersicioencasa' className='bg-gray-900 rounded-xl w-full max-w-sm p-6 flex flex-col items-center
          gap-4 text-center border-2 border-gray-900 hover:border-red-500 
          hover:shadow-lg hover:shadow-red-200 transition-all active:scale-95'>
            <TbHomeBolt className='text-6xl'/>
            <h2 className='text-2xl'>Ejercicio en Casa</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Temporibus delectus sed omnis quia qui, rem, libero autem nam vero ducimus 
              maiores illo aliquam veritatis hic cumque, perspiciatis in quaerat! Ipsam
            </p>
          </Link>
          <Link href='/ejersicioengym' className='bg-gray-900 rounded-xl w-full max-w-sm p-6 flex flex-col items-center
          gap-4 text-center border-2 border-gray-900 hover:border-green-500 
          hover:shadow-lg hover:shadow-green-200 transition-all'>
            <GiGymBag className='text-6xl'/>
            <h2 className='text-2xl'>Ejercicio en GYM</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Temporibus delectus sed omnis quia qui, rem, libero autem nam vero ducimus 
              maiores illo aliquam veritatis hic cumque, perspiciatis in quaerat! Ipsam
            </p>
          </Link>
          <Link href='/ejersicioenarealibre' className='bg-gray-900 rounded-xl w-full max-w-sm p-6 flex flex-col items-center
          gap-4 text-center border-2 border-gray-900 hover:border-blue-500 
          hover:shadow-lg hover:shadow-blue-200 transition-all'>
            <TbTrees className='text-6xl' />
            <h2 className='text-2xl'>Ejercicio en Area Libre</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Temporibus delectus sed omnis quia qui, rem, libero autem nam vero ducimus 
              maiores illo aliquam veritatis hic cumque, perspiciatis in quaerat! Ipsam
            </p>
          </Link>
        </section>
      </main>
    </PrincipalLayout>
  )
}
