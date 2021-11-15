import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

function Page(props) {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Page)
