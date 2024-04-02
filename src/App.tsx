import { AppRouter } from "./routes"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"


function App() {
 

  return (
    <>

     <AppRouter />
     <ToastContainer
       position="top-right"
       autoClose={2500}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover 
      />

    
    </>
  )
}

export default App
