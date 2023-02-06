import { Routes, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import CardPage from '../pages/CardPage'
import AboutPage from '../pages/AboutPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/card/:id" element={<CardPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}

export default AppRoutes
