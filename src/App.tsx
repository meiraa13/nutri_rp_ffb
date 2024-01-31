import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { Highlights } from "./components/Highlights"
import { SearchBar } from "./components/SearchBar"
import "./globalStyles.scss"


function App() {
 

  return (
    <>

      <Header />
      <main>
        <Highlights />
        <SearchBar/>
        <Dashboard />
      </main>

    
    </>
  )
}

export default App
