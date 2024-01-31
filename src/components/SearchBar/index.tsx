import "./styles.scss"
import { GoSearch } from "react-icons/go";

export function SearchBar(){


    return (
        <div className="container div-search">
            <form className="form-search">
                <input type="text" placeholder="Busque por alimento: digite um nome" />
                <button><GoSearch/></button>
            </form>
            <ul className="ul-result">
                <h4>Busque pela variação glicêmica</h4>
                <div>
                    <li className="green">Baixa: até 20mg/dl</li>
                    <li className="yellow">Média: até 39mg/dl</li>
                    <li className="red">Alta: acima de 40mg/dl</li>
                </div>

            </ul>


        </div>


    )
}