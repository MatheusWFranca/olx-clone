import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h1>Pagina Não encontrada</h1>
      <Link to="/">Voltar para home</Link>
    </div>
  )
}
