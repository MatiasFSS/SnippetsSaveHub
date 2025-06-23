import { Navigate, Route, Routes } from "react-router-dom"
import { Landing } from "../pages/Landing"
import { Dashboard } from "../pages/Dashboard"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"


export const Navigation = () => {
  return (
      <div className='main-layout'>

        <Routes>
            <Route path='landing' element={<Landing/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>

            <Route path='/*' element={<Navigate to="/landing" replace/>}/>
        </Routes>

        
      </div>
    
  )
}


