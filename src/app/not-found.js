import Link from 'next/link'
import "/Todo.css"
import Image from "next/image";
export default function NotFound(){
    return(
        <div>
            <h2>Página não encontrada</h2>
           <Link href="/">Retornar para a Home</Link>
            <div class="centro">
            <Image
    width={550}
    height={550}
    src={"https://www.valuehost.com.br/blog/wp-content/uploads/2022/01/post_thumbnail-77d8f2a95f2f41b5863f3fba5a261d7e.jpeg.webp"}
       />
       </div>
       
      
                
        </div>
        
    )
}