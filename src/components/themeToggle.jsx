import { useTheme } from "../hooks/useTheme"
import sun from '../assets/images/sun.svg'
import moon from '../assets/images/moon.svg'

function ThemeToggle() {
    const {theme, toggleTheme} = useTheme()
  return (
    <button className="toggleTheme btn-animation" onClick={toggleTheme}  aria-label="Toggle dark/light mode">
        {theme === "light" ?<>Dark <img src={moon} alt="dark"/> </>: <>Light <img src={sun} alt="light icon" /></>}
    </button>
  )
}

export default ThemeToggle