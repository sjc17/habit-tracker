import React from 'react';
import { Link } from 'react-router-dom';

const NewHabitButton = () => {
  return (
    <div className="fixed-action-btn">
      <Link
        to="/new"
        style={{ bottom: '24px' }}
        className=" btn-floating btn-large waves-effect waves-light red right"
      >
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default NewHabitButton;
