import Link from "next/link";
import { SiFacebook } from 'react-icons/si'
import { FcSportsMode } from 'react-icons/fc'

export default function Nav() {
  return (
    <nav className='w-full bg-gray-900 py-2 px-4 flex justify-between items-center'>
      <Link href='/' className='flex items-center gap-2'>
        <h1 className='text-white text-2xl lg:text-4xl'>Piñeyro-Fit</h1>
        <FcSportsMode className="text-3xl"/>
      </Link>
      <section className=''>
        <a href='https://www.facebook.com/entrenate' target="_blanck">
          <SiFacebook className='text-2xl hover:scale-110 transition-all text-white'/>
        </a>
      </section>
    </nav>
  );
};
