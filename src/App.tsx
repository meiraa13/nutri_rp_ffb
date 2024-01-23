import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { SearchBar } from "./components/SearchBar"
import "./globalStyles.scss"


function App() {
 

  return (
    <>

      <Header />
      <main>
        <SearchBar/>
        <Dashboard />
      </main>

    
    </>
  )
}

export default App
