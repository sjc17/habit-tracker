import React from 'react';

export default Landing => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Steven's Habit Tracker</h1>
      <h3>It's time to stop being lazy</h3>
      <a
        href="/auth/google"
        className="waves-effect waves-light btn"
        style={{ margin: '0px 5px' }}
      >
        Log in with Google
      </a>
      <a
        href="/api/currentuser"
        className="waves-effect waves-light btn"
        style={{ margin: '0px 5px' }}
      >
        Log in with Twitter
      </a>
    </div>
  );
};
