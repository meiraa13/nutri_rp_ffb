import "./styles.scss"
import { GoSearch } from "react-icons/go";

export function SearchBar(){


    return (
        <div className="container div-search">
            <form className="form-search">
                <input type="text" placeholder="Busque por alimento..." />
                <button><GoSearch/></button>
            </form>
            <ul className="ul-result"> Resultado Glicêmico
                <li>Alto</li>
                <li>Médio</li>
                <li>Baixo</li>
            </ul>


        </div>


    )
}