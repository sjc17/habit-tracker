import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    margin: '0px 5px'
  }
});
export default Landing => {
  const classes = useStyles();
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Steven's Habit Tracker</h1>
      <h3>It's time to stop being lazy</h3>
      <Button
        href="/auth/google"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Log in with Google
      </Button>
      <Button
        href="/api/currentuser"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Log in with Twitter
      </Button>
    </div>
  );
};
