import React from 'react'
import Login from './pages/login/Login.jsx'
import SignUp from './pages/signup/SignUp.jsx'
import Home from './pages/home/Home.jsx'

const App = () => {
  return (
   <div className='h-screen flex items-center justify-center p-4'>
    {/* <Login/> */}
     {/* <SignUp/> */}
     <Home/>
   </div>
  )
}

export default App