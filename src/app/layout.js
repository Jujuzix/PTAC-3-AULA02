import Menu from "./components/Menu" 
import Rodape from "./components/Rodape"

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">

      <body>
      <Menu/>
        {children}
        <Rodape/>
        </body>
      
    </html>
  )
}
