import { Link } from 'react-router-dom'
import { HeaderArea } from './styled'

import { isLogged, doLogout } from '../../../helpers/AuthHandler'

function Header() {
  let logged = isLogged()

  const handleLogout = () => {
    doLogout()
    window.location.href = '/'
  }

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
            {logged ? (
              <>
                <li>
                  <Link to="/my-account">Minha Conta</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="sair">
                    Sair
                  </button>
                </li>
                <Link className="button" to="/post-an-ad">
                  Anunciar
                </Link>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signin">Entrar</Link>
                </li>
                <li>
                  <Link to="/signup">Cadastrar</Link>
                </li>
                <Link className="button" to="/signin">
                  Anunciar
                </Link>
              </>
            )}
            <li></li>
          </ul>
        </nav>
      </div>
    </HeaderArea>
  )
}

export default Header
