import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { DataProvider } from './providers/DataContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './providers/UserContext.tsx'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
 
 <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)




    

