import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadAssets } from '../actions'
import Asset from '../containers/Asset'

class AssetsTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = { assets: null, assetsArr: [] }
  }

  componentDidMount() {
    this.props.loadAssets()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.assets !== prevState.assets) {
      let assetsArr = []
      for (let i = 0; i < nextProps.assets; i++) {
        assetsArr.push(i)
      }
      return {
        assets: assetsArr.length,
        assetsArr: assetsArr
      }
    }
  }

  render() {
    return (
      <div>
        <table className="main-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Asset name</th>
              <th>Price</th>
              <th>Last update</th>
              <th>Type</th>
            </tr>
            {Object.keys(this.state.assetsArr).map(id => {
              return (
                <Asset id={id} key={id}></Asset>
              )
            })}
          </thead>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  assets: state.assets.counter
})

const mapDispatchToProps = dispatch => ({
  loadAssets: () => dispatch(loadAssets())
})

AssetsTable.propTypes = {
  assets: PropTypes.number,
}

AssetsTable = connect(mapStateToProps, mapDispatchToProps)(AssetsTable)

export default AssetsTable
