import { useContext } from "react"
import "./styles.scss"
import { DataContext } from "../../providers/DataContext"

export function Highlights(){
    const { data } = useContext(DataContext)

    const highlightsArray = data?.filter((item)=>item.highlight)

    return (
        <section className="section-highlights">
            <div className="container">
                <h2>DESTAQUES</h2>
                <ul>
                    {
                        highlightsArray?.map((item)=>(
                            <li key={item.id}>
                            <h4>{item.name.toUpperCase()}</h4>
                            <p>Peso: {item.weight}</p>
                            <p>Variação Glicêmica: {item.conclusão}</p>
                            <p>Obs: {item.hipoglycemic?"Teve hipoglicemia":item.consumption_mode }</p>
                        </li>
                        ))
                    }
                    
                </ul>
            </div>
        </section>

    )
}