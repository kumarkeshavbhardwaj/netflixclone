
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router"
import Home from './components/Home'
import { AuthContextProvider } from './components/context/AuthContext'

function App() {


  return (
   <>
   <AuthContextProvider>
 <Navbar/>
 <Routes>
<Route path='/' element={<Home/>}></Route>
    </Routes>
   </AuthContextProvider>
   
   </>
  )
}

export default App
