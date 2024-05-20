import { useContext  } from "react";
import "./styles.scss"
import { GoSearch } from "react-icons/go";
import { DataContext } from "../../providers/DataContext";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



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
                <Input
                type="text" 
                value={searchValue}
                onChange={(e)=> setSearchValue(e.target.value)}
                placeholder="Busque por alimento: digite um nome" 
                />
                <Button className="box-sw" type="submit"><GoSearch/></Button>
            </form>
            <ul className="ul-result">
                <h4>BUSQUE PELA VARIAÇÃO GLICÊMICA:</h4>
                <div>
                    <Button onClick={()=>handleClick("baixo")} className="bg-green-600 test" >Baixa: até 20mg/dl</Button>
                    <Button onClick={()=>handleClick("moderado")} className="bg-yellow-600 test">Média: até 39mg/dl</Button>
                    <Button onClick={()=>handleClick("alto")} className="bg-red-600 test">Alta: acima de 40mg/dl</Button>
                </div>
                {filter && <Button className="clear-filter" onClick={()=>handleClick("")}>LIMPAR FILTRO: {filter}</Button>}

            </ul>
            {/* <h2>ALIMENTOS</h2> */}

        </div>



    )
}