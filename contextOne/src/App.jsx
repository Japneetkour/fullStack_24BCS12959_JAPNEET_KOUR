import { useState } from 'react'
import ThemeContext from './context/ThemeContext'
import Header from './Header'
import './App.css'

function App() {
  const [theme, setTheme] = useState();
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }} >
        <Header />
      </ThemeContext.Provider>
    </>
  )
}

export default App
