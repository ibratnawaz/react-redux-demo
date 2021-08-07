import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';

import { newUser } from '../redux/user/userActions';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (!/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/i.test(values.name.trim())) {
    errors.name = '3 or more characters are only allowed';
  } else if (values.name.length > 150) {
    errors.name = 'Must be 150 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.city) {
    errors.city = 'Required';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (isNaN(Number(values.phone))) {
    errors.phone = 'Must be a number';
  } else if (Number(values.phone.length) != 10) {
    errors.phone = 'Invalid phone number, must be 10 digits';
  }

  if (!values.pincode) {
    errors.pincode = 'Required';
  } else if (isNaN(Number(values.pincode))) {
    errors.pincode = 'Must be a number';
  } else if (Number(values.pincode.length) != 6) {
    errors.pincode = 'Invalid pincode, must be 6 digits';
  }

  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className='form-group row'>
    <label className='col-sm-2 col-form-label'>{label}</label>
    <div className='col-sm-10'>
      <input
        {...input}
        placeholder={label}
        type={type}
        id={label.toLowerCase()}
        className='form-control'
      />
      {touched && error && (
        <span className='text-small text-danger'>{error}</span>
      )}
    </div>
  </div>
);

const CreateUser = ({ history }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.createUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationPassed = true;
    if (!formData.values) {
      validationPassed = false;
      alert('All the fields are mandatory!!');
    } else {
      const { name, email, phone, gender, city, pincode } = formData.values;
      if (!name || !email || !phone || !gender || !city || !pincode) {
        validationPassed = false;
        alert('All the fields are mandatory!!');
      }
    }
    if (validationPassed) {
      dispatch(newUser(formData.values));
      history.push('/');
    }
  };

  return (
    <form className='col-md-8 offset-md-2' onSubmit={handleSubmit}>
      <Field name='name' type='text' component={renderField} label='Name' />

      <div className='form-group row'>
        <label className='col-sm-2 col-form-label'>Name</label>
        <div className='col-sm-10'>
          <Field
            name='gender'
            component='select'
            className='form-control'
            required>
            <option value='m'>Male</option>
            <option value='f'>Female</option>
            <option value='o'>Other</option>
          </Field>
        </div>
      </div>

      <Field name='email' type='email' component={renderField} label='Email' />
      <Field name='phone' type='number' component={renderField} label='Phone' />
      <Field name='city' type='text' component={renderField} label='City' />
      <Field
        name='pincode'
        type='number'
        component={renderField}
        label='Pincode'
      />
      <div className='mt-5'>
        <button type='submit' className='btn btn-primary mr-2'>
          Submit
        </button>
        <Link to='/'>
          <button type='button' className='btn btn-default ml-2'>
            Back
          </button>
        </Link>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'createUser',
  validate,
})(CreateUser);
