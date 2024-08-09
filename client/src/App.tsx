import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Views/HomePage';
import LandingPage from './components/Views/LandingPage';
import DetailPage from './components/Views/DetailPage'

import './App.css'

function App() {
  
  return (
   <Routes>
    <Route path="/" element={<LandingPage />} ></Route>
    <Route path="/home" element={<HomePage />} ></Route>
    <Route path="/home/:id" element={<DetailPage />} ></Route>
   </Routes>
    
  )
}

export default App
