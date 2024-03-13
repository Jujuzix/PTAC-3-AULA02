import styles from'./rodape.module.css';
import "/Todo.css"
import Image from "next/image";
export default function Rodape(){
    return(
        <footer className= {styles.rodape}>
             <Image
    width={100}
    height={100}
    src={"https://www.liblogo.com/img-logo/mo7336m964-moodle-logo-moodle-logo-pitt-community-college.png"}
       />
        <div class="pe">
<p>Copyright © 1999 - 2021 GoDaddy Operating Company, LLC. Todos os direitos reservados.</p>
        </div>
        </footer>
    )
}