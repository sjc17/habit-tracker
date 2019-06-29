import React from 'react';

export default Dashboard => {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <nav>
        <div className="nav-wrapper">
          <a
            href="/api/logout"
            className="right waves-effect waves-light btn"
            style={{ marginRight: '2rem', marginTop: '1rem' }}
          >
            Logout
          </a>
        </div>
      </nav>
    </div>
  );
};
