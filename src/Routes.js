import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/'
import About from './pages/About/'
import SignIn from './pages/SignIn/'
import NotFound from './pages/NotFound'
import SignUp from './pages/SignUp'

function initRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default initRoutes
