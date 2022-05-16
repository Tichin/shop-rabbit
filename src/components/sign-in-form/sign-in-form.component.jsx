import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';
import { signInAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

export default function SignInForm() {
  const defaultFormFields = { emai: '', password: '' };
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onInputChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };
  return (
    <div className='sign-in-form-container'>
      <form onSubmit={onFormSubmit}>
        <FormInput
          type='email'
          value={email}
          name='email'
          placeholder='email'
          onChange={onInputChange}
          required
        ></FormInput>
        <FormInput
          type='password'
          value={password}
          name='password'
          onChange={onInputChange}
          placeholder='password'
          required
        ></FormInput>
        <Button type='submit' content='submit' />
      </form>
    </div>
  );
}
