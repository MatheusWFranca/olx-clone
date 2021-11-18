import { useState, useEffect } from 'react'
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

  const [name, setName] = useState('')
  const [stateLocation, setStateLocation] = useState('')
  const [stateList, setStateList] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const getStates = async () => {
      const list = await api.getStates()
      setStateList([...list])
    }
    getStates()
  }, [api])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setDisabled(true)
    setError('')

    if (password !== confirmPassword) {
      setError('Senhas não coincidem!')
      setDisabled(false)
      return
    }

    const json = await api.register(name, email, password, stateLocation)

    if (json.error) {
      setError(json.error)
      console.log(json.error)
    } else {
      doLogin(json.token)
      window.location.href = '/'
    }
    setDisabled(false)
  }

  return (
    <PageContainer>
      <PageTitle>Cadastro</PageTitle>
      <PageArea>
        {error ? <ErrorMessage>{error}</ErrorMessage> : ''}
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">Nome Completo</div>
            <div className="area--input">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={disabled}
                required
              />
            </div>
          </label>

          <label className="area">
            <div className="area--title">Estado</div>
            <div className="area--input">
              <select
                required
                value={stateLocation}
                onChange={(e) => setStateLocation(e.target.value)}
              >
                 <option ></option>
                {stateList.map((index, key) => (
                    <option key={key} value={index.id}>
                      {index.name}
                    </option>
                ))}
              </select>
            </div>
          </label>

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
            <div className="area--title">Confirmar senha</div>
            <div className="area--input">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={disabled}
                required
              />
            </div>
          </label>

          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button type="submit">Fazer cadastro</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  )
}
