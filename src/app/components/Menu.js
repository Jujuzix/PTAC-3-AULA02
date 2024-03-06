import "/Todo.css"
import Link from 'next/link';
import Image from "next/image";
import styles from'./menu.module.css';

export default function Menu(){
    return(
        <header className= {styles.cabecalho}>
    <Image
    width={100}
    height={100}
    src={"https://www.ifms.edu.br/marcaifms.png"}
       />
       
        <nav>
            <ul>
                <Link href="/">
                <li>Home</li>
                </Link>
                
                <Link href="/registro" >
                <li>Registrar</li>
                </Link>

                <Link href="/localiza" >
                <li>Localizacao</li>
                </Link>

                
                
            </ul>
        </nav>
        
        </header>
    )
}