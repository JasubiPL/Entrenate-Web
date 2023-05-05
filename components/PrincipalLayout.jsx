import Head from "next/head";
import Nav from "./Nav";

export default function PrincipalLayout({title, children}) {
  return (
    <>
      <Head>
        <title>{ title }</title>

      </Head>
      <header>
        <Nav />
      </header>
      <main>
        {children}
      </main>
    </>
  );
};
