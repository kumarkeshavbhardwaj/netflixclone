
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router"
import Home from './pages/Home'
import { AuthContextProvider } from './components/context/AuthContext'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Account from './pages/Account'

function App() {


  return (
   <>
   <AuthContextProvider>
 <Navbar/>
 <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/signup' element={<SignUp/>}></Route>
<Route path='/account' element={<Account/>}></Route>



    </Routes>
   </AuthContextProvider>
   
   </>
  )
}

export default App
