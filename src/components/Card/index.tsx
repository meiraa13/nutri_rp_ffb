import { IData } from "../../providers/DataContext"
import "./styles.scss"

interface ICardProp{
    item: IData
}

export function Card({item}:ICardProp){



    return (
        <li className="li-card">
            <h4>{item.name.toUpperCase()}</h4>
            <p>Peso: {item.weight}g</p>
            <p>Variação Glicêmica: {item.result}mg/dl - {item.conclusion}</p>
            <p>Complemento: {item.side }{item.weight_side > 0 && 
                <span> - {item.weight_side}g</span>}
            </p>
        </li>
    )
}
