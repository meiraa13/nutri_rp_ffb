import { useContext } from "react"
import "./styles.scss"
import { DataContext } from "../../providers/DataContext"

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
                            <li key={item.id}>
                                <h4>{item.name.toUpperCase()}</h4>
                                <p>Peso: {item.weight}</p>
                                <p>Variação Glicêmica: {item.result}mg/dl - {item.conclusion}</p>
                                <p>Complemento: {item.side }</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>



    )
}