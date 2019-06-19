import React, { Component } from 'react';
import requireAuth from '../requireAuth';
import { connect } from 'react-redux';
import { fetchAllTokens } from '../../services/tokensInfoService';
import * as actions from '../../actions/userTokens';
import TokensTable from '../TokensTable';

class TokensPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tokens: null
    }
  }
  componentDidMount() {
    this.setAllTokens()
    this.timer = setInterval(this._tick, 300000);
  }

  setAllTokens() {
    fetchAllTokens().then((tokens) => {
      this.setState({tokens})
    })
  }
  
  _tick = () => {
    this.setAllTokens()
  };

  render() {
    return this.state.tokens ? <TokensTable tokens={this.state.tokens} /> : <div>Loading...</div>;
  }
}

function mapStateToProps({ selectedTokens }) {
  return { selectedTokens };
}

export default connect(
  mapStateToProps,
  actions
)(requireAuth(TokensPicker));
