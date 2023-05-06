import { readFile, readdir } from "fs/promises"
import { basename } from "path"
import PrincipalLayout from "@/components/PrincipalLayout"

export default function Comic({ img, name, muscles_involved, execution, caution  }){
  return(
    <PrincipalLayout title={name}>
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <ol>
        <label>Musculos afectados</label>
        <li>Principal: {muscles_involved.principal}</li>
        <li>Secundario: {muscles_involved.secundary}</li>
        <li>Antagonico: {muscles_involved.antagonist}</li>
      </ol>
      <p>
        Ejecucion: <br />
        {execution}
      </p>
      <p>
        Precauciones ⚠ : <br />
        {caution}
      </p>
    </PrincipalLayout>
  )
}

export async function getStaticPaths(){
  const files = await readdir("./excercises/gym-excercises", "utf-8")
  

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

  const content = await readFile(`./excercises/gym-excercises/${id}.json`, "utf-8")
  const excercise = JSON.parse(content)

  return {
    props: {
     ...excercise,
    }
  }


}