import { createContext, useEffect, useState } from "react"
import { api } from "../services/api"


interface IChildren{
    children: React.ReactNode
}

interface IData{
    id:number,
    name:string,
    weight:string,
    consumption_mode:string,
    conclusion:string,
    conclusão:string,
    hipoglycemic:boolean,
    highlight:boolean

}

interface IDataContext{
    data:IData[] | null,
    setData:React.Dispatch<React.SetStateAction<IData[] | null>>

}

export const DataContext = createContext({} as IDataContext)

export function DataProvider({children}:IChildren){
    const [data, setData] = useState<IData[] | null>(null)

    useEffect(()=>{
        async function fetchData(){
            try {
                const response = await api.get("/foods")
                setData(response.data)
                
            } catch (error) {
                console.log(error)
            }

        }
        fetchData()

    },[])

    return (
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )
}