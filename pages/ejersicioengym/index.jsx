import PrincipalLayout from "@/components/PrincipalLayout";
import { GiAbdominalArmor } from 'react-icons/gi'
import Link from "next/link";

export default function GymExcercisesPage() {
  return (
    <PrincipalLayout title="Ejersicios en GYM">
      <main className="min-h-screen flex items-center bg-gray-950 py-4 flex-col text-white">
        <h2 className="w-full lg:max-w-5xl text-xl lg:text-4xl py-2 px-2">Ejersicios para Gym</h2>
        <section className="w-full max-w-5xl gap-6 p-4">
          <ul className="w-full flex flex-wrap justify-evenly gap-5">
            <li>
              <Link href='/ejersicioengym/abdomen' className="group rounded-full bg-slate-900 aspect-square flex 
              flex-col items-center justify-center gap-2 w-36 border-2 border-slate-900 lg:hover:border-green-500 
              lg:hover:scale-110 transition-all lg:active:scale-95">
                <GiAbdominalArmor className="text-5xl group-hover:text-green-500"/>
                <h2 className="text-xl">Abdominales</h2>
              </Link>
            </li>
            <li>
              <Link href='/ejersicioengym/pecho' className="group rounded-full bg-slate-900 aspect-square flex 
              flex-col items-center justify-center gap-2 w-36 border-2 border-slate-900 lg:hover:border-green-500 
              lg:hover:scale-110 transition-all lg:active:scale-95">
                <GiAbdominalArmor className="text-5xl group-hover:text-green-500"/>
                <h2 className="text-xl">Pecho</h2>
              </Link>
            </li>
            <li>
              <Link href='/ejersicioengym/espalda' className="group rounded-full bg-slate-900 aspect-square flex 
              flex-col items-center justify-center gap-2 w-36 border-2 border-slate-900 lg:hover:border-green-500 
              lg:hover:scale-110 transition-all lg:active:scale-95">
                <GiAbdominalArmor className="text-5xl group-hover:text-green-500"/>
                <h2 className="text-xl">Espalda</h2>
              </Link>
            </li>
            <li>
              <Link href='/ejersicioengym/hombros' className="group rounded-full bg-slate-900 aspect-square flex 
              flex-col items-center justify-center gap-2 w-36 border-2 border-slate-900 lg:hover:border-green-500 
              lg:hover:scale-110 transition-all lg:active:scale-95">
                <GiAbdominalArmor className="text-5xl group-hover:text-green-500"/>
                <h2 className="text-xl">Hombros</h2>
              </Link>
            </li>
            <li>
              <Link href='/ejersicioengym/brazo' className="group rounded-full bg-slate-900 aspect-square flex 
              flex-col items-center justify-center gap-2 w-36 border-2 border-slate-900 lg:hover:border-green-500 
              lg:hover:scale-110 transition-all lg:active:scale-95">
                <GiAbdominalArmor className="text-5xl group-hover:text-green-500"/>
                <h2 className="text-xl">Brazo</h2>
              </Link>
            </li>
            <li>
              <Link href='/ejersicioengym/pierna' className="group rounded-full bg-slate-900 aspect-square flex 
              flex-col items-center justify-center gap-2 w-36 border-2 border-slate-900 lg:hover:border-green-500 
              lg:hover:scale-110 transition-all lg:active:scale-95 min-[]:">
                <GiAbdominalArmor className="text-5xl group-hover:text-green-500"/>
                <h2 className="text-xl">Pierna</h2>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </PrincipalLayout>
  );
};
