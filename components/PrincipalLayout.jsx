import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";

export default function PrincipalLayout({title, children}) {
  return (
    <>
      <Head>
        <title>{ `${title} | Piñeyro-Fit` }</title>

      </Head>
      <header>
        <Nav />
      </header>
      {children}
      <Footer />
    </>
  );
};
