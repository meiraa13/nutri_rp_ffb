import { useContext } from "react"
import "./styles.scss"
import { DataContext } from "../../providers/DataContext"

export function Dashboard(){
    const { data } = useContext(DataContext)

    return(
        <section className="section-dash">
            <div className="container div-dashboard">
                <h2>ALIMENTOS</h2>
                <ul className="ul-dash">
                    {
                        data?.map((item)=>(
                            <li key={item.id}>
                                <h4>{item.name.toUpperCase()}</h4>
                                <p>Peso: {item.weight}</p>
                                <p>Variação Glicêmica: {item.conclusion}</p>
                                <p>Obs: {item.hipoglycemic?"Teve hipoglicemia":item.consumption_mode }</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>



    )
}