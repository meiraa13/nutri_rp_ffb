import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import { Highlights } from "../../components/Highlights";
import { SearchBar } from "../../components/SearchBar";
import "../../globalStyles.scss"


export function Home(){


    return (
        <>
            <Header />
            <main>
            <Highlights />
            <SearchBar />
            <Dashboard />
            </main>
        </>
    )
}