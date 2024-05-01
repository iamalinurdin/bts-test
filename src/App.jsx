import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import AuthLayout from './components/organisms/AuthLayout'
import Register from './pages/Register'
import Notes from './pages/Notes'

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
      <Route path='/' element={<Notes />} />
    </Routes>
  )
}

export default App
