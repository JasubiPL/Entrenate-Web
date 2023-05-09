import PrincipalLayout from "@/components/PrincipalLayout";

export default function About() {
  return (
    <PrincipalLayout title="Acerca De">
      <main className=" min-h-screen flex p-2 bg-slate-950 text-white justify-center">
        <section className="w-full lg:max-w-5xl dev-animation-up">
          <h2 className="text-3xl lg:text-5xl my-4">Fuentes de información</h2>
          <ul>
            <li>
              <ol className="grid gap-2">
                <label className="text-md lg:text-2 xl">Enciclopedia De Ejercicios De Musculacion</label>
                <li className="text-sm lg:text-lg font-light">
                  <span className="font-semibold">Autor: </span>
                  Óscar Morán Esquerdo  
                </li>
                <li className="text-sm lg:text-lg font-light">
                  <span className="font-semibold">Fecha de publicación: </span>
                  2008
                </li>
                <li className="text-sm lg:text-lg font-light">
                  <span className="font-semibold">Enlace: </span>
                  <a className="text-blue-300" href="https://www.amazon.com.mx/Enciclopedia-Ejercicios-Musculacion-%C3%93scar-Esquerdo/dp/8495353636" target="_blanck">
                    Amazone Book's
                  </a>
                </li>
                <li>
                  <img src="/image/Enciclopedia-de-ejercicos-de-musculación-Poster.jpg" alt="Portada de referncia" />
                </li>
              </ol>
              <ol>

              </ol>
            </li>
          </ul>
        </section>
      </main>
    </PrincipalLayout>
  );
};
