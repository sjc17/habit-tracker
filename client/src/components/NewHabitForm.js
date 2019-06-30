import React from 'react';
import { Field, reduxForm } from 'redux-form';

let NewHabitForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="habitName">Habit Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="habitDescription">Description</label>
        <Field name="description" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

NewHabitForm = reduxForm({
  form: 'createHabit'
})(NewHabitForm);

export default NewHabitForm;
