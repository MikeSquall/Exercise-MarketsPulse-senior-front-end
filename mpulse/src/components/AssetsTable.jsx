import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadAssets } from '../actions'

class AssetsTable extends React.Component {
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
            {Object.keys(this.props.assets).map(id => {
              const {assetName, price, lastUpdate, assetType} = this.props.assets[id]
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{assetName}</td>
                  <td>{price}</td>
                  <td>{lastUpdate}</td>
                  <td>{assetType}</td>
                </tr>
              )
            })}
          </thead>
        </table>
        <br/>
        <button type="button" onClick={() => {
          this.props.loadAssets()
        }}>
          click
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  assets: state.assets
})

const mapDispatchToProps = dispatch => ({
  loadAssets: () => dispatch(loadAssets())
})

AssetsTable.propTypes = {
  assets: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      assetName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      lastUpdate: PropTypes.number.isRequired,
      assetType: PropTypes.string.isRequired,
    })
  ),
}

AssetsTable = connect(mapStateToProps, mapDispatchToProps)(AssetsTable)

export default AssetsTable
