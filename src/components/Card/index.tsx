import { useContext } from "react";
import { IData } from "../../providers/DataContext"
import "./styles.scss"
import { FaInstagram } from "react-icons/fa";
import { RiEditFill, RiDeleteBin6Fill } from "react-icons/ri";
import { UserContext } from "../../providers/UserContext";

interface ICardProp{
    item: IData
}

export function Card({item}:ICardProp){

    const { user } = useContext(UserContext)

    return (
        <li className="li-card">
            <div>
                <h4>{item.name.toUpperCase()}</h4>
                {
                    user && 
                    <>
                        <button><RiEditFill/></button>
                        <button><RiDeleteBin6Fill/></button>
                    </>
                }
                { item.insta && <a href={item.insta} target="_blank"><FaInstagram size={22} color="purple"/></a> }
            </div>
            <p>Peso: {item.weight}g</p>
            <p>Variação Glicêmica: {item.result}mg/dl - {item.conclusion}</p>
            <p>Complemento: {item.side }{item.weight_side > 0 && 
                <span> - {item.weight_side}g</span>}
            </p>
        </li>
    )
}
