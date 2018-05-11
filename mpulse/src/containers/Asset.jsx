import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Asset extends React.Component {
  constructor(props) {
    super(props);
    const getAsset = (id) => this.props.assets[id]
    this.state = {
      asset: getAsset(this.props.id)
    };
  }

  render() {
    return (
      <tr>
        <td>{this.state.asset.id}</td>
        <td>{this.state.asset.assetName}</td>
        <td>{this.state.asset.price}</td>
        <td>{this.state.asset.lastUpdate}</td>
        <td>{this.state.asset.assetType}</td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => ({
  assets: state.assets
})

Asset.propTypes = {
  id: PropTypes.string.isRequired,
}

Asset = connect(mapStateToProps)(Asset)

export default Asset
