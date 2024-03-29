import { createContext, useEffect, useState } from "react"
import { api } from "../services/api"


export interface IChildren{
    children: React.ReactNode
}

export interface IData{
    id:number,
    name:string,
    weight:string,
    side:string,
    weight_side:number,
    result:number,
    insta:string,
    conclusion:string,
    hipoglycemic:boolean,
    highlight:boolean

}

interface IDataContext{
    data:IData[] | null,
    setData:React.Dispatch<React.SetStateAction<IData[] | null>>,
    filter:string,
    setFilter:React.Dispatch<React.SetStateAction<string>>,
    searchValue:string,
    setSearchValue:React.Dispatch<React.SetStateAction<string>>,
    createModalState:boolean,
    setCreateModalState:React.Dispatch<React.SetStateAction<boolean>>,
    createFood:(data: any)=> Promise<void>


}

export const DataContext = createContext({} as IDataContext)

export function DataProvider({children}:IChildren){
    const [data, setData] = useState<IData[] | null>(null)
    const [filter, setFilter] = useState("")
    const [searchValue, setSearchValue] = useState("")
    const [createModalState, setCreateModalState] = useState(false)

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

    async function createFood(data:any){
        console.log(data)
    }

    return (
        <DataContext.Provider value={{
            data, 
            setData, 
            filter, 
            setFilter, 
            searchValue, 
            setSearchValue, 
            createModalState, 
            setCreateModalState,
            createFood
        }}>
            {children}
        </DataContext.Provider>
    )
}