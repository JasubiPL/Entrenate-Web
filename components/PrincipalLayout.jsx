import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import { SiFacebook } from 'react-icons/si'

export default function PrincipalLayout({title, children}) {
  return (
    <>
      <Head>
        <title>{ `${title} | Entrenate` }</title>
        <link rel="shortcut icon" href="/entrenate_logo.png" type="image/x-icon" />

      </Head>
      <header>
        <Nav />
      </header>
      {children}
      <Footer />
    </>
  );
};
