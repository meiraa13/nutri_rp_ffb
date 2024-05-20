import { VscChromeClose } from "react-icons/vsc"
import "../CreateModal/styles.scss"
import { useContext } from "react"
import { DataContext } from "../../providers/DataContext"
import { Button } from "../ui/button"

export function UpdateModal(){

    const { setUpdateContent, updateContent } = useContext(DataContext)
    return (
        <div>
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-title">
                    <h3>Editar</h3>
                    <button onClick={()=>setUpdateContent(null)} ><VscChromeClose size={22} /> </button>
                </div>
                
                <form >
                    <div>
                        <label htmlFor="name">Nome*</label>
                        <input id="name" defaultValue={updateContent?.name}  />
                        <p></p>
                    </div>
                    <div>
                        <label htmlFor="weight">Peso*</label>
                        <input id="weight" type="number" defaultValue={updateContent?.weight}/>
                        <p></p>
                    </div>
                    <div>
                        <label htmlFor="side">Complemento</label>
                        <input id="side" defaultValue={updateContent?.side} />
                        <p></p>
                    </div>
                    <div>
                        <label htmlFor="side-weight">Peso Complemento</label>
                        <input id="side-weight" type="number" defaultValue={updateContent?.weight_side}  />
                        <p></p>
                    </div>
                    <div>
                        <label htmlFor="result">Resultado*</label>
                        <input id="result" type="number" defaultValue={updateContent?.result}  />
                        <p></p>
                    </div>
                    <div>
                        <label htmlFor="insta">Insta</label>
                        <input id="insta" defaultValue={updateContent?.insta} />
                        <p></p>
                    </div>
                    <div>
                        <label htmlFor="hipoglycemic">Hipoglicemia*</label>
                        <select id="hipoglycemic" defaultValue={updateContent?.hipoglycemic ? "sim": ""}>
                            <option value="">Não</option>
                            <option value="sim">Sim</option>
                        </select>
                        <p></p>
                    </div>
                    <div>
                        <label htmlFor="highlight">Destaque*</label>
                        <select id="highlight" defaultValue={updateContent?.highlight? "sim": ""} >
                            <option value="">Não</option>
                            <option value="sim">Sim</option>
                        </select>
                        <p></p>
                    </div>
                    <Button className="w-full">Atualizar</Button>
                </form>

            </div>
        </div>
    </div>
    )

}