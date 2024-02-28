import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import SigIn from './Layout/SignIn/SingIn'
import LogIn from './Layout/LogIn/LogIn'
import Navbar from './Layout/NavBar/NavBar'

function App() {
  // isAuth setIsAuth ()
const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
console.log(isAuth)

  return (
    <>
    {isAuth === null ? 
    
    <Routes>
      <Route path='/' element={<LogIn />} />
      <Route path='/SigIn' element={<SigIn />} />
    </Routes>
    : <Navbar />
    }
    </>
  )
}

export default App
