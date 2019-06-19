import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    if (!!this.props.user) {
      this.props.history.push('/');
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login('blox-user', 'blox-rocks');
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="row auth">
        <form onSubmit={this.handleSubmit} className="col s12">
          <div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                  required
                />
                <label className="active">Username: </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  required
                />
                <label className="active">Password: </label>
              </div>
            </div>
          </div>
          <div>
            <button className="btn waves-effect waves-light">Sign in</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(Auth));
