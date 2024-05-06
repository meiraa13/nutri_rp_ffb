import { useContext } from "react";
import { DataContext, IData } from "../../providers/DataContext"
import "./styles.scss"
import { FaInstagram } from "react-icons/fa";
import { RiEditFill, RiDeleteBin6Fill } from "react-icons/ri";
import { UserContext } from "../../providers/UserContext";

interface ICardProp{
    item: IData
}

export function Card({item}:ICardProp){
    const { user } = useContext(UserContext)
    const { setDeleteContent, setUpdateContent } = useContext(DataContext)
    
   

    return (
        <li className="li-card box-sw">
            <div className="div-title">
                <h4>{item.name.toUpperCase()}</h4>
                {
                    user && 
                    <>
                        <button onClick={()=>setUpdateContent(item)}><RiEditFill/></button>
                        <button onClick={()=>setDeleteContent(item.id)}><RiDeleteBin6Fill/></button>
                    </>
                }
                    
                { item.insta && <a href={item.insta} target="_blank"><FaInstagram size={22} color="purple"/></a> }
            </div>
            <p>Peso: {item.weight}g</p>
            <p>Variação Glicêmica: {item.result}mg/dl - <strong>{item.conclusion}</strong></p>
            <p>Complemento: {item.side }{item.weight_side > 0 && 
                <span> - {item.weight_side}g</span>}
            </p>
            {item.hipoglycemic && <p>Teve hipoglicêmia após consumo</p>}

        </li>
    )
           
        
}
