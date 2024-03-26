import { createContext } from "react";
import { IChildren } from "./DataContext";


export const UserContext = createContext({})

export function UserProvider({children}:IChildren){

    
    return (
        <UserContext.Provider value={{}}>
            { children }
        </UserContext.Provider>
    )

}