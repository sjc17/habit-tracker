import React from 'react';

const NewHabitButton = props => {
  return (
    <button className="fixed-action-btn" onClick={props.toggleForm}>
      +
    </button>
  );
};

export default NewHabitButton;
