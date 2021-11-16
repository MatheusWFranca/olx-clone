import { Link } from 'react-router-dom'
import { HeaderArea } from './styled'

import { isLogged } from '../../../helpers/AuthHandler'

function Header() {
  let logged = isLogged()

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
                  <Link to="/logout">Sair</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signin">Entrar</Link>
                </li>
                <li>
                  <Link to="/signup">Cadastrar</Link>
                </li>
              </>
            )}
            <li>
              <Link className="button" to="/post-an-ad">
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
