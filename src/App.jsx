
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router"
import Home from './components/Home'

function App() {


  return (
   <>
   
    <Navbar/>
 <Routes>
<Route path='/' element={<Home/>}></Route>
    </Routes>
   </>
  )
}

export default App
