import "./styles.scss"
import { TiThMenu } from "react-icons/ti";
import { useState } from "react"
import { VscChromeClose } from "react-icons/vsc";





export function Header(){
    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <header>
                <div className="container div-header">
                    <div className="div-infos">
                        <p className="name">Nutri Raphael Polonis</p>
                    </div>
                    <div onClick={()=>setIsOpen(!isOpen)} className="trigger">
                        <button className="button">{isOpen?<VscChromeClose/>:<TiThMenu/>}</button>
                    </div>
                    <div className="div-buttons">
                      <a href="https://google.com" target="_blank">Doces do Nutri</a>
                      <a>Contato</a>
                    </div>
                </div>
            </header>

            <div className={`mobile-menu ${isOpen && "is-open"}`}>
                    <div> 
                      <a>Doces do Nutri</a>
                    </div>
                    <div> 
                       <a>Contato</a>
                    </div>
            </div>
        
        </>
    )
}