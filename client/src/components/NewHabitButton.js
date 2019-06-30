import React from 'react';
import { Link } from 'react-router-dom';

const NewHabitButton = props => {
  return (
    <button className="fixed-action-btn" onClick={props.toggleForm}>
      +
    </button>
  );
};

export default NewHabitButton;
