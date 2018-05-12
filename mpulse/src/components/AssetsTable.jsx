import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadAssets } from '../actions'
import Asset from '../containers/Asset'

class AssetsTable extends React.Component {
  render() {
    const assetsArr = []
    for (let i = 0; i < this.props.assets; i++) {
      assetsArr.push(i)
    }

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
            {Object.keys(assetsArr).map(id => {
              return (
                <Asset id={id} key={id}></Asset>
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
