import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Login from './pages/Login'
import TodoPage from './pages/TodoPage'

function App() {
  return (
    <BrowserRouter>
       <Routes>
           <Route path='/' element={<Home />}></Route>
           <Route path='/signup' element={<Signup />}></Route>
           <Route path='/login' element={<Login />}></Route>
           <Route path='/todo' element={<TodoPage />}></Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App
