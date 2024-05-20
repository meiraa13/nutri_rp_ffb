import { useContext } from "react"
import "./styles.scss"
import { DataContext } from "../../providers/DataContext"
import { Card } from "../Card"

export function Highlights(){
    const { data } = useContext(DataContext)

    const highlightsArray = data?.filter((item)=>item.highlight)

    return (
        <section className="section-highlights">
            <div className="container div-highlights">
                <h1 className="lexend">DESTAQUES</h1>
                <ul className="ul-high">
                    {
                        highlightsArray?.map((item)=>(
                          <Card widthClass="full-wd" key={item.id} item={item} />
                        ))
                    }
                    
                </ul>
            </div>
        </section>

    )
}