import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FcSportsMode } from 'react-icons/fc'
import { CgMenu } from 'react-icons/cg'

export default function Nav() {
  const [blogActive, setBlogActive] = useState('')
  const [excercisesActive, setExcercisesActive] = useState('')
  const [nutritionActive, setNutritionActive] = useState('')
  const [routinesActive, setRoutinesActive] = useState('')

  const path = useRouter().pathname
  //console.log(path)

  useEffect(() =>{

    if(path.includes("blog")){
      setBlogActive("text-green-500")
    }
    if(path.includes("ejercicio")){
      setExcercisesActive("text-green-500")
    }
    if(path.includes("nutricion")){
      setNutritionActive("text-green-500")
    }
    if(path.includes("rutinas")){
      setRoutinesActive("text-green-500")
    }

  },[])

  const handleMenu = () =>{
    alert("Proximamente")
  }


  return (
    <nav className='w-full bg-gray-900 py-2 px-4 flex justify-between items-center'>
      <Link href='/' className='flex items-center gap-2'>
        <h1 className='text-white text-2xl lg:text-4xl'>Piñeyro-Fit</h1>
        <FcSportsMode className="text-3xl"/>
      </Link>
      {/*<section className='flex items-center gap-3'>

        <CgMenu className="text-white text-2xl lg:hidden" onClick={() => handleMenu()}/>

        <ul className="gap-3 text-white hidden lg:flex">
          <li className="">
            <Link className={`dev-bebas-font text-2xl ${blogActive} hover:text-green-500 transition-all`} href="/">
              Blog
          </Link>
          </li>
          <li>
            <Link className={`dev-bebas-font text-2xl ${excercisesActive} hover:text-green-500 transition-all`} href="/">
              Ejercicios
            </Link>
          </li>
          <li>
            <Link className={`dev-bebas-font text-2xl ${nutritionActive} hover:text-green-500 transition-all`} href="/">
              Nutrición
            </Link>
          </li>
          <li>
            <Link className={`dev-bebas-font text-2xl ${routinesActive} hover:text-green-500 transition-all`} href="/">
              Rutinas
            </Link>
          </li>
        </ul> 
      </section>*/}
    </nav>
  );
};
