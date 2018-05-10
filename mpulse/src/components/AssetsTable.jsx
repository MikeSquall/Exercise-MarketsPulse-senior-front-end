import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { testAction } from '../actions'

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
          </thead>
        </table>
        <br/>
        <button type="button" onClick={() => {
          this.props.testDispatch(Math.floor(Math.random() * 10))
        }}>
          click
        </button>
        {this.props.testResult.map(i => {
          return (<div key={i*Math.floor(Math.random() * 1000)}>{i}</div>)
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  testResult: state.test
})

const mapDispatchToProps = dispatch => ({
  testDispatch: number => dispatch(testAction(number))
})

AssetsTable.propTypes = {
  assets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      assetName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      lastUpdate: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
  testResult: PropTypes.array,
}

AssetsTable = connect(mapStateToProps, mapDispatchToProps)(AssetsTable)

export default AssetsTable
