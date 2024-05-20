import { useContext, useEffect, useState } from "react";
import { DataContext, IData } from "../../providers/DataContext"
import "./styles.scss"
import { FaInstagram } from "react-icons/fa";
import { RiEditFill, RiDeleteBin6Fill } from "react-icons/ri";
import { UserContext } from "../../providers/UserContext";
import {
    Card as SCard,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Badge } from "@/components/ui/badge"

interface ICardProp{
    item: IData,
    widthClass?:string
}

export function Card({item, widthClass}:ICardProp){
    const { user } = useContext(UserContext)
    const { setDeleteContent, setUpdateContent } = useContext(DataContext)
    const [bg, setBg] = useState("")
    const [text, setText] = useState("")

    useEffect(()=>{
        function setState(){
            if(item.conclusion === "baixo"){
                setBg("bg-green-600")
                setText("baixa")
            }else if(item.conclusion === "moderado"){
                setBg("bg-yellow-600")
                setText("média")
            }else {
                setBg("bg-red-600")
                setText("alta")
            }
        }
        setState()
    },[])
    
   

    return (
        <SCard className={widthClass?`${widthClass} li-card`:"li-card"}>
            <CardHeader>
                <div className="flex justify-between">
                    <CardTitle>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</CardTitle>
                    <Badge className={bg}>{text}</Badge>
                </div>

                <CardDescription>Peso:{item.weight}g</CardDescription>
                {
                    user && 
                    <>
                        <button onClick={()=>setUpdateContent(item)}><RiEditFill/></button>
                        <button onClick={()=>setDeleteContent(item.id)}><RiDeleteBin6Fill/></button>
                    </>
                }
                    
            </CardHeader>
            <CardContent>
                <p>Variação Glicêmica: {item.result}mg/dl</p>
                <p>Complemento: {item.side }{item.weight_side > 0 && 
                    <span> - {item.weight_side}g</span>}
                </p>
            </CardContent>
            <CardFooter>
                <div className="flex flex-col">
                    { item.insta && 
                            <a 
                            className="flex gap-1" 
                            href={item.insta} 
                            target="_blank"
                            >
                                <FaInstagram size={22} color="purple"/>
                                <CardDescription>Clique para ver o teste</CardDescription>
                            </a> 
                    }
                    {item.hipoglycemic && <p>Teve hipoglicêmia após consumo</p>}
                </div>
            </CardFooter>
                        
        </SCard>
    )
           
        
}
