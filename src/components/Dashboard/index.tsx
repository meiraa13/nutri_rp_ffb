import { useContext } from "react"
import "./styles.scss"
import { DataContext } from "../../providers/DataContext"

export function Dashboard(){
    const {data} = useContext(DataContext)
    console.log(data)

    return(
        <div className="container div-dashboard">
            <ul className="ul-dash">
                {
                    data.map((item)=>(
                        <li key={item.id}>
                            <h3>Alimento: {item.alimento}</h3>
                            <p>Quantidade: {item.peso}</p>
                            <p>Variação Glicêmica: {item.glicemia}</p>
                            <p>Conclusão: {item.conclusão}</p>
                            <p>Teve hipoglicemia? {item.hipoglicemia?"Sim":"Não"}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}