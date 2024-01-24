import { Cards } from "../Cards"
import "./styles.scss"


export function Dashboard(){

    return (
        <div className="div-dashboard">
            <form>
                <input placeholder="Busque por alimento..." type="text" />
                <button>Buscar</button>
            </form>
            <Cards />
        </div>
    )
}