import { Link } from 'react-router-dom'
import { HeaderArea } from './styled'

function Header() {
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span>OLX</span>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/">Cadastrar</Link>
            </li>
            <li>
              <Link className="button" to="/">
                Anunciar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderArea>
  )
}

export default Header
