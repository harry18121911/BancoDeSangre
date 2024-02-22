import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './components/Routes/ProtectedRoute';
import PublicRoute from './components/Routes/PublicRoute'
import Donor from './pages/Dashboard/Donor'
import Hospital from './pages/Dashboard/Hospital'


function App() {
  return (
    <>
      <div>
        <Toaster />
        <Routes>
          <Route path='/donor' element={
            <ProtectedRoute><Donor /></ProtectedRoute>
          }></Route>
          <Route path='/hospital' element={
            <ProtectedRoute><Hospital /></ProtectedRoute>
          }></Route>
          <Route path='/' element={
            <ProtectedRoute><HomePage /></ProtectedRoute>
          }></Route>
          <Route path='/login' element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }></Route>
          <Route path='/register' element={           
              <Register />          
          }></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
