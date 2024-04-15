import "./styles.scss"
import { TiThMenu } from "react-icons/ti";
import { useContext, useState } from "react"
import { VscChromeClose } from "react-icons/vsc";
import { UserContext } from "../../providers/UserContext";
import { Link } from "react-router-dom";
import { DataContext } from "../../providers/DataContext";





export function Header(){
    const [isOpen, setIsOpen] = useState(false)
    const { user } = useContext(UserContext)
    const { setCreateModalState } = useContext(DataContext)

    return (
        <>
            <header>
                <div className="container div-header">
                    <div className="div-infos">
                        <Link to="/login" className="name">Nutri Raphael Polonis</Link>
                    </div>
                    {
                        user && <button onClick={()=>setCreateModalState(true)}>INSERIR NOVO ALIMENTO</button>
                    }
                    <div onClick={()=>setIsOpen(!isOpen)} className="trigger">
                        <button className="trigger-button">{isOpen?<VscChromeClose/>:<TiThMenu/>}</button>
                    </div>
                    <div className="div-buttons">
                      <a href="https://keepo.io/docesdonutri/" target="_blank">| Doces do Nutri |</a>
                      <a href="https://polonis.com.br/bio/" target="_blank">| Acelere seus resultados |</a>
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