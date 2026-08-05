import { useContext } from 'react'
import ThemeContext from './context/ThemeContext'
function Header() {
    const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div >
      <h1>current theme: {theme}</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle to {theme==='light' ? '🌙' : '☀️'}</button>
    </div>
  )
}
export default Header