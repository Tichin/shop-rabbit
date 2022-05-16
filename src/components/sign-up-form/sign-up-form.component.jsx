import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {
  signUpWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

export default function SignUpForm() {
  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onInputChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }
    try {
      const { user } = await signUpWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  return (
    <div className='sign-up-form-container'>
      <form onSubmit={onFormSubmit}>
        <FormInput
          type='displayName'
          value={displayName}
          name='displayName'
          placeholder='displayName'
          onChange={onInputChange}
          required
        />
        <FormInput
          type='email'
          value={email}
          name='email'
          placeholder='email'
          onChange={onInputChange}
          required
        />
        <FormInput
          type='password'
          value={password}
          name='password'
          placeholder='password'
          onChange={onInputChange}
          required
        />
        <FormInput
          type='password'
          value={confirmPassword}
          name='confirmPassword'
          placeholder='confirmPassword'
          onChange={onInputChange}
          required
        />
        <Button type='submit' buttonType='google'>
          Sign In
        </Button>
      </form>
    </div>
  );
}
