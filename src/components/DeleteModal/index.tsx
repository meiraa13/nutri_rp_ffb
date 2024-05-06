import { VscChromeClose } from "react-icons/vsc"
import "../CreateModal/styles.scss"
import { useContext } from "react"
import { DataContext } from "../../providers/DataContext"


export function DeleteModal(){
    const { deleteFood, setDeleteContent, deleteContent} = useContext(DataContext)


    return(
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-title">
                    <h3>Excluir</h3>
                    <button onClick={()=> setDeleteContent("")} ><VscChromeClose size={22} /> </button>
                </div>
                
                <div className="delete-modal-div" >
                    <p className="color-black">Tem certeza que deseja excluir?</p>
                    <button onClick={()=>deleteFood(deleteContent)} className="btn-create">Deletar</button>
                </div>

            </div>
        </div>
    )
    

}