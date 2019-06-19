import React from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

const Header = ({logout, user}) => {
  return (
    <nav>
      <div className="nav-wrapper blue accent-2">
        <Link to="/" className="brand-logo">
          blox
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/"><button className='waves-effect waves-light btn'>WatchList</button></Link>
          </li>
          <li>
            <Link to="/tokens"><button className='waves-effect waves-light btn'>All Tokens</button></Link>
          </li>
          {user ? (
            <li>
              <button className='waves-effect waves-light btn' onClick={() => logout()}>log out</button>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </nav>
  );
};

function mapStateToProps({ user }) {
  return { user };
}

export default connect(
  mapStateToProps,
  actions
)(Header);
