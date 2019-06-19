import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Auth from './Auth/Auth';
import WatchList from './WatchList/WatchList';
import TokensPicker from './TokensPicker/Tokenspicker';
import { connect } from 'react-redux';
import * as actions from '../actions/userTokens';
import axios from 'axios';
import _ from 'lodash';

class App extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.user && !prevProps.user) {
      const { token } = this.props.user;
      axios.defaults.headers.common['Authorization'] = token;
      this.props.fetchUserTokens();
    }
    const isSameSelected = _.isEqual(_.sortBy(this.props.selectedTokens), _.sortBy(prevProps.selectedTokens))
    if (this.props.user && !isSameSelected) {
      this.props.fetchChosenTokens(this.props.selectedTokens);
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={WatchList} />
            <Route path="/auth" component={Auth} />
            <Route path="/tokens" component={TokensPicker} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ user, selectedTokens }) {
  return { user, selectedTokens };
}

export default connect(
  mapStateToProps,
  actions
)(App);
