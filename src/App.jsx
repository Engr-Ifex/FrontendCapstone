import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import ProtectedRoute from "./components/ProtectedRoutes"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" 
        element={
        <ProtectedRoute>
          <Dashboard/> 
        </ProtectedRoute>}
        />


         <Route path="/profile" 
        element={
        <ProtectedRoute>
          <Profile/> 
        </ProtectedRoute>}
        />
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
