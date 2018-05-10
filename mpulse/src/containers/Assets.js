// import {Observable} from 'rxjs/Observable'
import { connect } from 'react-redux'
import { assetsMiddleware } from '../middleware'

const getAllAssets = (n) => {
  const result = []
  for (let i = 0 i < n i++) {
    result.push(createAsset(i, 'Stock'))
    result.push(createAsset(i+n, 'Currency'))
  }
  return result
}

// const assets = getAllAssets(10)
let Assets = ({ dispatch }, n) => {
  for (let i = 0 i < n i++) {
    dispatch(createAsset(...newAsset(i, 'Stock')))
    dispatch(createAsset(...newAsset(i+n, 'Currency')))
  }
}

const mapStateToProps = (state) => ({
  assets: getAllAssets(10)
})

const mapDispatchToProps = ({
  componentDidMount: assetsMiddleware
})

Assets = connect()(Assets)

export default Assets
