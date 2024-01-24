import { createContext, useState } from "react"
import { jsonData } from "../data/data"


interface IChildren{
    children: React.ReactNode
}

interface IData{
    id:number,
    alimento:string,
    peso:string,
    modo_consumo:string,
    glicemia:string,
    conclusão:string,
    hipoglicemia:boolean
}

interface IDataContext{
    data:IData[],
    setData:React.Dispatch<React.SetStateAction<IData[]>>

}

export const DataContext = createContext({} as IDataContext)

export function DataProvider({children}:IChildren){
    const [data, setData] = useState<IData[]>(jsonData)

    return (
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )
}