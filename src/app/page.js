import "/Todo.css"
import Image from "next/image";
export default async function Home() {
  const resposta = await fetch("http://back-end-ifms.vercel.app/campi",{
    next:{
      revalidate: 1
    }
  });
  const campi = await resposta.json()
  return (
    <main>
      <h1>Principais Campus do IFMS </h1>
      <p>Uma página principal simples, para mais desenvolvimento</p>
      {
        
        campi.map((campus)=>
           <div className="campusCard">
            <Image width={400} height={400} src={campus.image_url}></Image>
            
            <p>{campus.nome_campus}</p>
         
           </div>
        
        )
      }
    </main>
  )
}
