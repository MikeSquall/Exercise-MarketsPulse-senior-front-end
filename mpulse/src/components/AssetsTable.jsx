import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { testAction } from '../actions'

let AssetsTable = ({ dispatch }) => (
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
    <button type="button" onClick={(e) => {
      dispatch(testAction(Math.floor(Math.random() * 10)))
    }}>
      click
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  testResult: state.test
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
  test: PropTypes.number,
};

AssetsTable = connect(mapStateToProps)(AssetsTable)

export default AssetsTable;
