import { useContext } from "react"
import "./styles.scss"
import { DataContext } from "../../providers/DataContext"
import { Card } from "../Card"

export function Highlights(){
    const { data } = useContext(DataContext)

    const highlightsArray = data?.filter((item)=>item.highlight)

    return (
        <section className="section-highlights">
            <div className="container">
                <h2>DESTAQUES</h2>
                <ul>
                    {
                        highlightsArray?.map((item)=>(
                          <Card key={item.id} item={item} />
                        ))
                    }
                    
                </ul>
            </div>
        </section>

    )
}