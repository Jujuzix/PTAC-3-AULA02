import "/Todo.css"
import Image from "next/image";
export default async function Home() {
  const resposta = await fetch("http://localhost:3000/api",{
    next:{
      revalidate: 1
    }
  });
  const campus = await resposta.json()
  return (
    <main>
      <h1>Home</h1>
      {
        
        campus.map((campi)=>
           <div className="campusCard">
            <Image width={100} height={100} src={campi.imagem_url}></Image>
            <p>{campi.nome_campi}</p>
         
           </div>
        
        )
      }
    </main>
  )
}
