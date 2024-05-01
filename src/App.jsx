import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import AuthLayout from './components/organisms/AuthLayout'
import Register from './pages/Register'

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
