import React from 'react';

export default Landing => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Steven's Habit Tracker</h1>
      <ul>
        <li>
          <a
            href="/auth/google"
            className="waves-effect waves-light btn"
            style={{
              backgroundColor: '#4285F4',
              position: 'relative',
              width: '200px',
              margin: '0px 5px'
            }}
          >
            <img
              style={{
                position: 'absolute',
                left: '1px',
                top: '1px',
                display: 'inline-block',
                backgroundColor: '#ffffff',
                verticalAlign: 'middle'
              }}
              width="34px"
              height="34px"
              alt='Google "G" Logo'
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            />
            <div style={{ position: 'absolute', right: '12px' }}>
              Login with Google
            </div>
          </a>
        </li>
      </ul>
      <ul>
        <a
          style={{
            backgroundColor: '#38A1F3',
            position: 'relative',
            width: '200px',
            margin: '0px 5px'
          }}
          href="/auth/twitter"
          className="waves-effect waves-light btn"
        >
          <img
            style={{
              position: 'absolute',
              left: '1px',
              top: '1px',
              display: 'inline-block',
              verticalAlign: 'middle'
            }}
            width="34px"
            height="34px"
            alt="Twitter Logo"
            src="./images/Twitter_Logo_WhiteOnBlue.png"
          />
          <div style={{ position: 'absolute', right: '12px' }}>
            Login with Twitter
          </div>
        </a>
      </ul>
    </div>
  );
};
