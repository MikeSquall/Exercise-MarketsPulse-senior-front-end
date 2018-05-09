import React from 'react';
import PropTypes from 'prop-types';

const AssetsTable = ({assets}) => (
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
        {assets.map((asset) => {
          return (
            <tr key={asset.id}>
              <td>{asset.id}</td>
              <td>{asset.assetName}</td>
              <td>{asset.price}</td>
              <td>{asset.lastUpdate}</td>
              <td>{asset.type}</td>
            </tr>
          );
        })}
      </thead>
    </table>
  </div>
);

AssetsTable.propTypes = {
  assets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      assetName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      lastUpdate: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AssetsTable;
