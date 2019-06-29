import React from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ auth: { name } }) => {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <nav>
        <div className="nav-wrapper">
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

export default connect(mapStateToProps)(Dashboard);
