import Link from "next/link";
import { SiFacebook } from 'react-icons/si'

export default function Nav() {
  return (
    <nav className='w-full bg-gray-900 py-2 px-4 flex justify-between items-center'>
      <Link href='/' className='px-4'>
        <h1 className='text-white text-3xl'>Piñeyro-Fit</h1>
      </Link>
      <section className='p-4'>
        <a href='https://www.facebook.com/entrenate' target="_blanck">
          <SiFacebook className='text-xl'/>
        </a>
      </section>
    </nav>
  );
};
