import React from 'react';

const NewHabitButton = props => {
  return (
    <button
      className="btn-floating btn-large red"
      style={{ position: 'fixed', bottom: '30px', right: '30px' }}
      onClick={props.toggleForm}
    >
      <i className="large material-icons">add</i>
    </button>
  );
};

export default NewHabitButton;
