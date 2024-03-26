import { useContext } from "react"
import "./styles.scss"
import { DataContext } from "../../providers/DataContext"
import { Card } from "../Card"

export function Dashboard(){
    const { data, filter } = useContext(DataContext)

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
            <div className="container div-dashboard">
                <h2>ALIMENTOS</h2>
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