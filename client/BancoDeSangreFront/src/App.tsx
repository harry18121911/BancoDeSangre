import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './components/Routes/ProtectedRoute';
import PublicRoute from './components/Routes/PublicRoute'


function App() {
  return (
    <>
      <div>
        <Toaster/>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute><HomePage/></ProtectedRoute>
              
            
          }></Route>
          <Route path='/login' element={
          <PublicRoute>
            <Login/>
          </PublicRoute>
          }></Route>
          <Route path='/register' element={
          <ProtectedRoute>
            <Register/>
          </ProtectedRoute>
          }></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
