
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Settings from './Settings'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/Dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />    
          <Route path="/Dashboard" element={<Dashboard/>} >
            <Route path="profile" element={<Profile/>} />
            <Route path="settings" element={<Settings/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
