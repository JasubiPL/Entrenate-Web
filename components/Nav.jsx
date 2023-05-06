import Link from "next/link";
import { SiFacebook } from 'react-icons/si'

export default function Nav() {
  return (
    <nav className='w-full bg-gray-900 py-2 px-4 flex justify-between items-center'>
      <Link href='/' className=''>
        <h1 className='text-white text-2xl lg:text-4xl'>Piñeyro-Fit</h1>
      </Link>
      <section className=''>
        <a href='https://www.facebook.com/entrenate' target="_blanck">
          <SiFacebook className='text-xl lg:text-2xl hover:scale-110 transition-all'/>
        </a>
      </section>
    </nav>
  );
};
