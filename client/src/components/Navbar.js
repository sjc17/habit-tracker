import React from 'react';
import { connect } from 'react-redux';

const Navbar = ({ auth: { name } }) => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <div className="left" style={{ marginLeft: '10px' }}>
            Steven's Habit Tracker
          </div>
          <ul className="right">
            <li>{name}</li>
            <li>
              <a
                href="/api/logout"
                className="right waves-effect waves-light btn"
                style={{ margin: '1rem' }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Navbar);
