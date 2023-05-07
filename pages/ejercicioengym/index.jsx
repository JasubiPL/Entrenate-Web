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
              <Link href='/ejercicioengym/abdomen' className=" lg:w-56 dev-list-mobile-animation-up group rounded-xl bg-slate-900 aspect-square flex 
              flex-col items-center justify-center gap-2 lg:gap-4 w-36 border-2 border-slate-900 lg:hover:border-green-500 
              lg:hover:scale-110 transition-all lg:active:scale-95 group">
                <img src="/image/icons/abs-icon.png" alt="icono pectoral" 
                  className="w-1/2"
                />
                <h2 className="text-xl lg:text-3xl lg:group-hover:text-green-500">Abdominales</h2>
              </Link>
            </li>
            <li>
              <Link href='/ejercicioengym/pecho' className="dev-list-mobile-animation-up group rounded-xl bg-slate-900 aspect-square flex 
              flex-col items-center justify-center gap-1 w-36 border-2 border-slate-900 lg:hover:border-green-500 
              lg:hover:scale-110 transition-all lg:active:scale-95 lg:w-56 lg:gap-4 group" >
                <img src="/image/icons/chest-icon.png" alt="icono pectoral" 
                  className="w-1/2"
                />
                <h2 className="text-xl lg:text-3xl lg:group-hover:text-green-500">Pecho</h2>
              </Link>
            </li>
            <li>
              <Link href='/ejercicioengym/espalda' className="dev-list-mobile-animation-up group rounded-xl bg-slate-900 aspect-square flex 
              flex-col items-center justify-center gap-2 w-36 border-2 border-slate-900 lg:hover:border-green-500 
              lg:hover:scale-110 transition-all lg:active:scale-95 lg:w-56 lg:gap-4 group">
                <img src="/image/icons/back-icon.png" alt="icono pectoral" 
                  className="w-1/2"
                />
                <h2 className="text-xl lg:text-3xl lg:group-hover:text-green-500">Espalda</h2>
              </Link>
            </li>
            <li>
              <Link href='/ejercicioengym/hombros' className="dev-list-mobile-animation-up group rounded-xl bg-slate-900 aspect-square flex 
              flex-col items-center justify-center gap-2 w-36 border-2 border-slate-900 lg:hover:border-green-500 
              lg:hover:scale-110 transition-all lg:active:scale-95 lg:w-56 lg:gap-4 group">
                <img src="/image/icons/shoulders-icon.png" alt="icono pectoral" 
                  className="w-1/2"
                />
                <h2 className="text-xl lg:text-3xl lg:group-hover:text-green-500">Hombros</h2>
              </Link>
            </li>
            <li>
              <Link href='/ejercicioengym/brazo' className="dev-list-mobile-animation-up group rounded-xl bg-slate-900 aspect-square flex 
              flex-col items-center justify-center gap-2 w-36 border-2 border-slate-900 lg:hover:border-green-500 
              lg:hover:scale-110 transition-all lg:active:scale-95 lg:w-56 lg:gap-4 group">
                <img src="/image/icons/arm-icon.png" alt="icono pectoral" 
                  className="w-1/2"
                />
                <h2 className="text-xl lg:text-3xl lg:group-hover:text-green-500">Brazo</h2>
              </Link>
            </li>
            <li>
              <Link href='/ejercicioengym/pierna' className="dev-list-mobile-animation-up group rounded-xl bg-slate-900 aspect-square flex 
              flex-col items-center justify-center gap-2 w-36 border-2 border-slate-900 lg:hover:border-green-500 
              lg:hover:scale-110 transition-all lg:active:scale-95 lg:w-56 lg:gap-4 group">
                <img src="/image/icons/legs-icon.png" alt="icono pectoral" 
                  className="w-1/2"
                />
                <h2 className="text-xl lg:text-3xl lg:group-hover:text-green-500">Pierna</h2>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </PrincipalLayout>
  );
};
