import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import { SiFacebook } from 'react-icons/si'

export default function PrincipalLayout({title, children}) {
  return (
    <>
      <Head>
        <title>{ `${title} | Piñeyro-Fit` }</title>

      </Head>
      <header>
        <section className="flex justify-center gap-2 py-2 text-green-500 text-sm font-light">
          Siguenos en 
          <a href='https://www.facebook.com/entrenate' target="_blanck">
            <SiFacebook className='text-xl text-green-500 hover:text-white transition-all'/>
          </a>        
        </section>
        <Nav />
      </header>
      {children}
      <Footer />
    </>
  );
};
