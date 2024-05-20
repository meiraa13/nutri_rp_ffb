import { useContext } from "react"
import "./styles.scss"
import { DataContext } from "../../providers/DataContext"
import { Card } from "../Card"
import { CreateModal } from "../CreateModal"
import { UpdateModal } from "../UpdateModal"
import { DeleteModal } from "../DeleteModal"

export function Dashboard(){
    const { data, filter, createModalState, updateContent, deleteContent } = useContext(DataContext)

    const searchProduct = data?.filter((item)=>{
        if(filter === ""){
            return true
        }else if(filter === "baixo" || filter === "moderado" || filter == "alto"){
            return item.conclusion == filter
        }

        return item.name.toLowerCase().includes(filter.toLowerCase())

    })


    return(
        <section className="section-dash">
            { createModalState && <CreateModal /> }
            { updateContent && <UpdateModal /> }
            { deleteContent && <DeleteModal />}
            <div className="container div-dashboard">
               <h1 className="lexend">ALIMENTOS</h1>
                <ul className="ul-dash">
                    {
                        searchProduct?.map((item)=>(
                            <Card key={item.id} item={item} />    
                        ))
                    }
                        
                </ul>
            </div>
        </section>



    )
}