import { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import About from './pages/About'
import SignIn from './pages/SignIn'
// import SignOut from './pages/SignOut'
import SignUp from './pages/SignUp'

export default function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])
  return (
<div className="min-h-screen flex flex-col">
    <BrowserRouter>
    <Header  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <main className="flex-grow p-4 bg-yellow-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        {/* <Route path="/sign-out" element={<SignOut />} /> */}
        <Route path="/sign-up" element={<SignUp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
      </Routes>      
      </main>
    <Footer />
    </BrowserRouter>
    </div>
    
  )
}
