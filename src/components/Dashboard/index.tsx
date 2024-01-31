import { useContext } from "react"
import "./styles.scss"
import { DataContext } from "../../providers/DataContext"

export function Dashboard(){
    const {data} = useContext(DataContext)
    console.log(data)

    return(
        <section className="section-dash">
            <div className="container div-dashboard">
                <h2>ALIMENTOS</h2>
                <ul className="ul-dash">
                    {
                        data.map((item)=>(
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