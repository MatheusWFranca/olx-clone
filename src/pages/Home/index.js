import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Pagina Inicial</h1>
      <Link to="/about">Pagina about</Link>
    </div>
  )
}
