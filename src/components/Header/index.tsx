import "./styles.scss"
import { TiThMenu } from "react-icons/ti";
import { useContext, useState } from "react"
import { VscChromeClose } from "react-icons/vsc";
import { UserContext } from "../../providers/UserContext";
import { Link } from "react-router-dom";
import { DataContext } from "../../providers/DataContext";
import { Button } from "@/components/ui/button"





export function Header(){
    const [isOpen, setIsOpen] = useState(false)
    const { user } = useContext(UserContext)
    const { setCreateModalState } = useContext(DataContext)

    return (
        <>
            <header className="bg-green-700">
                <div className="container div-header">
                    <div className="div-infos">
                        <Link to="/login" className="name text-xl">Nutri Raphael Polonis</Link>
                    </div>
                    {
                        user && <Button onClick={()=>setCreateModalState(true)}>INSERIR NOVO ALIMENTO</Button>
                    }
                    <div onClick={()=>setIsOpen(!isOpen)} className="trigger">
                        <button className="trigger-button">{isOpen?<VscChromeClose/>:<TiThMenu/>}</button>
                    </div>
                    <div className="div-buttons">
                        <Button variant="ghost" asChild>
                            <a href="https://keepo.io/docesdonutri/" target="_blank">Doces do Nutri</a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="https://polonis.com.br/bio/" target="_blank">Acelere seus resultados</a>
                        </Button>

                    </div>
                </div>
            </header>

            <div className={`mobile-menu ${isOpen && "is-open"}`}>
                    <a href="https://keepo.io/docesdonutri/" target="_blank">Doces do Nutri</a>
                    <a href="https://polonis.com.br/bio/" target="_blank">Acelere seus resultados</a>
            </div>
                    
        </>
        
    )
}