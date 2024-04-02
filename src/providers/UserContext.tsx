import { createContext, useState } from "react";
import { IChildren } from "./DataContext";
import { TLoginData } from "../pages/LoginPage/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

interface IUser {
    token:string
}

interface IUserContext {
    user:IUser | null,
    setUser:React.Dispatch<React.SetStateAction<IUser | null>>,
    userLogin: (data:TLoginData) =>Promise<void>

}

export const UserContext = createContext({} as IUserContext)

export function UserProvider({children}:IChildren){
    const [user, setUser] = useState<IUser | null>(null)
    const navigate = useNavigate()

    async function userLogin(data:TLoginData){
        try {
            const response = await api.post("/login", data)
            setUser(response.data)
            toast.success("Bem-vindo!")
            setTimeout(()=>{
                navigate("/")

            },1000)


        } catch (error) {
            toast.error("Erro no login")
            console.log(error)
        }
    }
    
    return (
        <UserContext.Provider value={{setUser, user, userLogin}}>
            { children }
        </UserContext.Provider>
    )

}