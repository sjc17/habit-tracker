import React from 'react';
import { Field, reduxForm } from 'redux-form';

let NewHabitForm = props => {
  const { handleSubmit, closeForm } = props;
  return (
    <form
      onSubmit={handleSubmit}
      className="z-depth-3"
      style={{
        position: 'fixed',
        width: '400px',
        height: '280px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        paddingTop: '20px',
        zIndex: '1',
        backgroundColor: 'white',
        opacity: '0.95'
      }}
    >
      <div style={{ width: '80%', margin: '0px auto' }}>
        <label htmlFor="habitName">Habit Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div style={{ width: '80%', margin: '0px auto' }}>
        <label htmlFor="habitDescription">Description</label>
        <Field name="description" component="input" type="text" />
      </div>
      <button
        className="btn waves-effect waves-light"
        style={{ marginTop: '10px' }}
        type="submit"
      >
        Create new habit
      </button>
      <div
        style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          cursor: 'pointer'
        }}
        onClick={closeForm}
      >
        <i className="material-icons">cancel</i>
      </div>
    </form>
  );
};

NewHabitForm = reduxForm({
  form: 'createHabit'
})(NewHabitForm);

export default NewHabitForm;
