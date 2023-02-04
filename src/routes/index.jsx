import { Routes, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import CardPage from '../pages/CardPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/card/:id" element={<CardPage />} />
    </Routes>
  )
}

export default AppRoutes
