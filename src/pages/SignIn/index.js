import { useState } from 'react'
import { PageArea } from './styled'
import useApi from '../../helpers/OlxApi'
import { doLogin } from '../../helpers/AuthHandler'

import {
  PageContainer,
  PageTitle,
  ErrorMessage,
} from '../../components/MainComponents'

export default function SignIn() {
  const api = useApi

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberPassword, setRememberPassword] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setDisabled(true)

    const json = await api.login(email, password)

    if (json.error) {
      setError(json.error)
    } else {
      doLogin(json.token, rememberPassword)
      window.location.href = '/'
    }

    setDisabled(false)
  }

  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        {error ? <ErrorMessage>{error}</ErrorMessage> : ''}
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">Email</div>
            <div className="area--input">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={disabled}
                required
              />
            </div>
          </label>

          <label className="area">
            <div className="area--title">Senha</div>
            <div className="area--input">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={disabled}
                required
              />
            </div>
          </label>

          <label className="area">
            <div className="area--title">Lembrar Senha</div>
            <div className="area--input">
              <input
                type="checkbox"
                disabled={disabled}
                checked={rememberPassword}
                onChange={() => setRememberPassword(!rememberPassword)}
              />
            </div>
          </label>

          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button type="submit">Fazer Login</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  )
}
