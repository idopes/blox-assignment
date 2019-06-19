import React, { Component } from 'react';
import requireAuth from '../requireAuth';
import { connect } from 'react-redux';
import * as actions from '../../actions/userTokens';
import TokensTable from '../TokensTable';

class WatchList extends Component {
  componentDidMount() {
    this.timer = setInterval(this._tick, 300000);
  }

  _tick = () => {
    this.props.fetchChosenTokens(this.props.selectedTokens);
  };

  render() {
    const selectedTokeInfo =
      this.props.selectedTokens && this.props.selectedTokens.userTokenInfo;
    return selectedTokeInfo ? (
      <TokensTable tokens={selectedTokeInfo} />
    ) : (
      <div>Loading...</div>
    );
  }
}

function mapStateToProps({ selectedTokens }) {
  return { selectedTokens };
}

export default connect(
  mapStateToProps,
  actions
)(requireAuth(WatchList));
