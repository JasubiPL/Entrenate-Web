import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosFitness } from "react-icons/io";
import { IoNutritionOutline } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import { BsClipboard2Data } from "react-icons/bs";
import { GrArticle } from "react-icons/gr";
import { useEffect, useState } from "react";

export default function Nav() {
  const [widthScreen, setWidthScreen] = useState('')

  const path = useRouter().pathname
  //console.log(path)

  useEffect(() =>{

    if(window.innerWidth <= 768){
      setWidthScreen('hidden')
    }
  })

  return (
    <nav className='w-full bg-gray-900 flex flex-wrap p-3 justify-between items-center'>
      <span className="w-full lg:w-auto flex gap-2 items-center">
        <img className="w-10 rounded-full" src="/image/entrenate_logo.png" alt="Logotipo"/>
        <h1 className='text-white text-2xl lg:text-4xl'>Entrenate</h1> 
      </span>   
      <ul className="w-full flex justify-evenly lg:w-auto gap-3 text-white lg:flex lg:mr-4">
        <li>
          <Link className={`flex gap-2 text-2xl lg:text-lg items-center justify-center hover:text-green-400 
          ${ path === '/' || path.includes('ejercicioengym') ? 'text-green-400' : ''}`} href='/'>
            <IoIosFitness /> 
            <span className={`${ widthScreen}`}>Ejercicios</span>
          </Link>
        </li>
        <li>
          <Link className={`flex gap-2 text-2xl lg:text-lg items-center justify-center hover:text-green-400 `} href='/nutricion'>
            <IoNutritionOutline />
            <span className={`${ widthScreen}`}>Ntutricion</span>
          </Link>
        </li>
        <li>
          <Link className="flex gap-2 text-2xl lg:text-lg items-center justify-center hover:text-green-400" href='/rutinas'>
            <LuListTodo />
            <span className={`${ widthScreen}`}>Rutinas</span>
          </Link>
        </li>
        <li>
          <Link className="flex gap-2 text-2xl lg:text-lg items-center justify-center hover:text-green-400" href='/Blog'>
            <GrArticle />
            <span className={`${ widthScreen}`}>BLog</span>
          </Link>
        </li>
        <li>
          <Link className="flex gap-2 text-2xl lg:text-lg items-center justify-center hover:text-green-400" href='/mi-plan'>
            <BsClipboard2Data />
            <span className={`${ widthScreen}`}>Mi Plan</span>
          </Link>
        </li>
      </ul> 

    </nav>
  );
};
