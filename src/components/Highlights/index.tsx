import { useContext } from "react"
import "./styles.scss"
import { DataContext } from "../../providers/DataContext"

export function Highlights(){
    const { data } = useContext(DataContext)

    const highlightsArray = data.filter((item)=>item.destaque)

    return (
        <section className="section-highlights">
            <div className="container">
                <h2>DESTAQUES</h2>
                <ul>
                    {
                        highlightsArray.map((item)=>(
                            <li key={item.id}>
                            <h4>{item.alimento.toUpperCase()}</h4>
                            <p>Peso: {item.peso}</p>
                            <p>Variação Glicêmica: {item.conclusão}- {item.glicemia}</p>
                            <p>Obs: {item.hipoglicemia?"Teve hipoglicemia":item.modo_consumo }</p>
                        </li>
                        ))
                    }
                    
                </ul>
            </div>
        </section>

    )
}