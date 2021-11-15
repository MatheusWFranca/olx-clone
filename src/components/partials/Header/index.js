import { Link } from 'react-router-dom'
import { HeaderArea } from './styled'

function Header() {
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/home">
            <span>OLX</span>
          </Link>
        </div>
      </div>
    </HeaderArea>
  )
}

export default Header
