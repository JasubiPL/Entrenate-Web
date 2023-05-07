import PrincipalLayout from "@/components/PrincipalLayout";
import fs from "fs/promises"
import Link from "next/link";
import path from "path";
import { GiGymBag } from 'react-icons/gi'

export default function ChestExcercisesMenu({ excercises }) {

  return (
    <PrincipalLayout title='Ejersicios para pecho'>
      <main className="w-full flex min-h-screen justify-center bg-slate-950 text-white">
        <section className="w-full max-w-5xl p-2">
          <h2 className="text-3xl lg:text-5xl flex gap-3 my-4">
            Grupo Pectorales <GiGymBag className="text-green-500"/> 
          </h2>
          <section className=" rounded-xl mt-2 mb-5 overflow-hidden dev-list-mobile-animation">
            <img src="/image/gym-excercises/chest/grupo-pectorales.png" alt="" />
          </section>
          <h2 className="text-2xl lg:text-4xl">Ejercicios</h2>
          <ul className="w-full max-w-5xl flex flex-col gap-3 md:flex-row md:flex-wrap md:justify-evenly">
            {excercises.map(excercise =>{
              return (
                <Link key={excercise.id} href={`/ejercicioengym/pecho/${excercise.id}`}>
                  <li className="w-full h-20 flex gap-2 bg-slate-900 rounded-md overflow-hidden dev-list-mobile-animation
                  md:w-60 md:flex-col md:h-full lg:border-4 lg:hover:-translate-y-2 lg:rounded-xl lg:border-slate-950
                   lg:hover:border-green-500 transition-all">
                    <div className="h-full aspect-square lg:aspect-video flex md:h-auto md:w-full">
                      <img src={excercise.img} alt={excercise.title} 
                      className="w-full object-cover"
                      loading="lazy"
                      />
                    </div>
                    <div className="p-2">
                      <h3 className="md:text-xl">{excercise.name}</h3>
                      <p className="text-sm font-light">{excercise.muscles_involved.principal}</p>
                    </div>
                  </li>
                </Link>
              )
            })}
          </ul>
        </section>
      </main>
    </PrincipalLayout>
  );
};

export async function getStaticProps() {
  const dirPath = path.join(process.cwd(), './excercises/gym-excercises/chest');
  const fileNames = await fs.readdir(dirPath);

  const excercises = await Promise.all(fileNames.map(async (fileName) => {
    const filePath = path.join(dirPath, fileName);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const excercise = JSON.parse(fileContent);
    return excercise;
  }));

  //console.log(excercises)

  return {
    props: {
      excercises,
    },
  };
}








