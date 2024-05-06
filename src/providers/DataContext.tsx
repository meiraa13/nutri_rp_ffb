import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { TCreateFood } from "../components/CreateModal/validator"
import { UserContext } from "./UserContext"
import { jwtDecode } from "jwt-decode"
import { toast } from "react-toastify"


export interface IChildren{
    children: React.ReactNode
}

export interface IData{
    id:string,
    name:string,
    weight:number,
    side:string | undefined ,
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
    createFood:(data: TCreateFood)=> Promise<void>,
    deleteFood:(foodId:string)=> Promise<void>,
    deleteContent:string,
    setDeleteContent:React.Dispatch<React.SetStateAction<string>>,
    updateContent:null | IData,
    setUpdateContent:React.Dispatch<React.SetStateAction<null | IData>>,
    


}

export const DataContext = createContext({} as IDataContext)

export function DataProvider({children}:IChildren){
    const [data, setData] = useState<IData[] | null>(null)
    const [filter, setFilter] = useState("")
    const [searchValue, setSearchValue] = useState("")
    const [createModalState, setCreateModalState] = useState(false)
    const [deleteContent, setDeleteContent] = useState("")
    const [updateContent, setUpdateContent] = useState<null | IData>(null)
    const { user  } = useContext(UserContext)

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

    async function createFood(formData:TCreateFood){
      try {
        const userInfo = jwtDecode(user!.token)
        const response = await api.post(`/foods/${userInfo.sub}`, formData)
        setData((data)=> [...data!, response.data ])
        toast.success("Alimento criado!")
        setCreateModalState(false)
        
      } catch (error) {
        toast.error("Erro na requisição")
        console.log(error)
      }
    }

    async function deleteFood(foodId:string){
        try {
            const userInfo = jwtDecode(user!.token)
            await api.delete(`/foods/${userInfo.sub}/food/${foodId}`)
            const newArr = data?.filter((food)=> food.id !== foodId)
            setData([...newArr!])
            toast.success("item deletado!")

        } catch (error) {
            toast.error("erro na requisição")
            console.log(error)
        }
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
            createFood,
            deleteFood,
            deleteContent,
            setDeleteContent,
            setUpdateContent,
            updateContent,
        }}>
            {children}
        </DataContext.Provider>
    )
}