import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import AuthLayout from './components/organisms/AuthLayout'
import Register from './pages/Register'
import Notes from './pages/Notes'
import FormNote from './pages/FormNote'
import Layout from './components/organisms/Layout'
import DetailNote from './pages/DetailNote'
import PrivateRoute from './components/organisms/PrivateRoute'

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
      <Route element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Notes />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path='/checklist/:id/note' element={<FormNote />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path='/checklist/:id' element={<DetailNote />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path='/checklist/:id/note/:noteId' element={<FormNote />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
