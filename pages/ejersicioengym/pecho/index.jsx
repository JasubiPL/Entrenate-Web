import PrincipalLayout from "@/components/PrincipalLayout";
import fs from "fs/promises"
import Link from "next/link";
import path from "path";
import { GiGymBag } from 'react-icons/gi'

export default function ChestExcercisesMenu({ excercises }) {

  return (
    <PrincipalLayout title='Ejersicios para pecho'>
      <main className="w-full flex min-h-screen justify-center bg-slate-950">
        <section className="w-full max-w-5xl p-2">
          <h2 className="text-3xl lg:text-5xl flex gap-3 my-4">
            Ejercicios para Pecho <GiGymBag /> 
          </h2>
          <ul className="w-full max-w-5xl flex flex-col gap-3">
            {excercises.map(excercise =>{
              return (
                <Link key={excercise.id} href={`/ejersicioengym/pecho/${excercise.id}`}>
                  <li className="w-full h-16 flex gap-2 bg-slate-900 rounded-md overflow-hidden">
                    <div className="h-full aspect-square flex">
                      <img src={excercise.img} alt={excercise.title} 
                      className="w-full object-cover"
                      />
                    </div>
                    <div >
                      <h3>{excercise.name}</h3>
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








