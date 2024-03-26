import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { LoginPage } from "../pages/LoginPage";

export function AppRouter(){

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    )
}