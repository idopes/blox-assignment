import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/userTokens';

class TokensTable extends Component {
  handleChange(tokenId) {
    this.props.postUserTokens(tokenId);
  }

  isChecked(tokenId) {
    return this.props.selectedTokens.tokenIds.indexOf(tokenId) !== -1;
  }

  renderTokens() {
    return this.props.tokens.map(token => (
      <tr key={token.tokenId}>
        <td>
          <img alt="" src={token.icon} />
        </td>
        <td>{token.name}</td>
        <td>{token.symbol}</td>
        <td>{token.percentChange1h}%</td>
        <td>{token.percentChange24h}%</td>
        <td>{token.percentChange7d}%</td>
        <td>#{token.rank}</td>
        <td>{token.price}</td>
        <td>
          <label>
            <input
              type="checkbox"
              onChange={() => this.handleChange(token.tokenId)}
              checked={this.isChecked(token.tokenId)}
            />
            <span />
          </label>
        </td>
      </tr>
    ));
  }

  renderTable() {
    return (
      <table className="centered stripped responsive-table">
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Symbol</th>
            <th>1h Change</th>
            <th>24h change</th>
            <th>7d change</th>
            <th>Rank</th>
            <th>Price</th>
            <td>Watch</td>
          </tr>
        </thead>
        <tbody>{this.renderTokens()}</tbody>
      </table>
    );
  }

  render() {
    return this.props.tokens ? this.renderTable() : <div>Loading...</div>;
  }
}

function mapStateToProps({ selectedTokens }) {
  return { selectedTokens };
}

export default connect(
  mapStateToProps,
  actions
)(TokensTable);
