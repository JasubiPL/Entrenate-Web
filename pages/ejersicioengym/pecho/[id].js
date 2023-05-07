import { readFile, readdir } from "fs/promises"
import { basename } from "path"
import PrincipalLayout from "@/components/PrincipalLayout"

export default function ChestExcercise({ img, name, muscles_involved, execution, caution, }){
  return(
    <PrincipalLayout title={name}>
      <main className="w-full items-center flex flex-col mb-8 text-white">
        <img src={img} alt={name}  className="w-full lg:max-w-5xl lg:mt-8"/>
        <section className="w-full lg:max-w-5xl flex flex-col gap-4 p-2">
          <h1 className="text-3xl lg:text-5xl lg:py-8">{name}</h1>
          <ol>
            <label className="text-md lg:text-2xl font-bold text-red-500">🔥 Musculos afectados</label>
            <li className="text-sm lg:text-lg font-light">
              <span className="font-semibold">Principal: </span> 
              {muscles_involved.principal}
            </li>
            <li className="text-sm lg:text-lg font-light">
              <span className="font-semibold">Secundario: </span> 
              {muscles_involved.secundary}
            </li>
            <li className="text-sm lg:text-lg font-light">
              <span className="font-semibold">Antagonista: </span> 
              {muscles_involved.antagonist}
            </li>
          </ol>
          <section>
            <label className="text-md lg:text-2xl font-bold text-green-500">✅ Ejecucion: </label><br />
            <p className="text-sm lg:text-lg font-light">{execution}</p>
          </section>
          <section>
            <label className="text-md lg:text-2xl font-bold text-yellow-300">⚠️ Precauciónes: </label><br />
            <p className="text-sm lg:text-lg font-light">{caution}</p>
          </section>
        </section>
      </main>
    </PrincipalLayout>
  )
}

export async function getStaticPaths(){
  const files = await readdir("./excercises/gym-excercises/chest", "utf-8")
  

  const paths = files.map(file => {
    const id = basename(file, ".json")
    return{ params: { id } }
  })

  return{
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }){
  const { id } = params

  const content = await readFile(`./excercises/gym-excercises/chest/${id}.json`, "utf-8")
  const excercise = JSON.parse(content)

  return {
    props: {
     ...excercise,
    }
  }


}