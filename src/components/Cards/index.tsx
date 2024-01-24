import { useContext } from "react"
import "./styles.scss"
import { DataContext } from "../../providers/DataContext"

export function Cards(){

    const { data } = useContext(DataContext)

    return (

        <ul className="ul-cards">
            {
                data.map((item)=>(
                    <li key={item.id}>
                        <h3>{item.alimento}</h3>
                        <p>- Peso: {item.peso}</p>
                        <p>- Glicemia: {item.glicemia}</p>
                        <p>- Conclusão: {item.conclusão}</p>
                        <p>- Teve hipoglicemia? {item.hipoglicemia?"Sim":"Não"}</p>
                    </li>
                ))
            }
        </ul>
    )
}