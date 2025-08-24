import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/authentication/Signup'
import Home from './pages/Home'
import Signin from './pages/authentication/Signin'
import ForYou from './pages/ForYou'
import AboutUs from './pages/AboutUs'
import './App.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/for-you" element={<ForYou />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>
)
