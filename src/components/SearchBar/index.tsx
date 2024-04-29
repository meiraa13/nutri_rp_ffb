import { useContext  } from "react";
import "./styles.scss"
import { GoSearch } from "react-icons/go";
import { DataContext } from "../../providers/DataContext";

export function SearchBar(){
    const { setFilter, searchValue, setSearchValue, filter } = useContext(DataContext)


    function handleSubmit(e:React.FormEvent){
        e.preventDefault()

        setFilter(searchValue)
        setSearchValue("")
    }

    function handleClick(value:string){
        setFilter(value)
    }
    return (
        
        <div className="container div-search">
            <form onSubmit={handleSubmit} className="form-search">
                <input
                className="box-sw" 
                type="text" 
                value={searchValue}
                onChange={(e)=> setSearchValue(e.target.value)}
                placeholder="Busque por alimento: digite um nome" 
                />
                <button className="box-sw" type="submit"><GoSearch/></button>
            </form>
            <ul className="ul-result">
                <h4>BUSQUE PELA VARIAÇÃO GLICÊMICA:</h4>
                <div>
                    <li onClick={()=>handleClick("baixo")} className="green box-sw">Baixa: até 20mg/dl</li>
                    <li onClick={()=>handleClick("moderado")} className="yellow box-sw">Média: até 39mg/dl</li>
                    <li onClick={()=>handleClick("alto")} className="red box-sw">Alta: acima de 40mg/dl</li>
                </div>
                {filter && <button className="clear-filter box-sw" onClick={()=>handleClick("")}>LIMPAR FILTRO: {filter}</button>}

            </ul>
            {/* <h2>ALIMENTOS</h2> */}

        </div>



    )
}