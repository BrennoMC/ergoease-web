import { useState } from 'react';
import './InputLoginPage.scss';
import validator from 'validator'

const InputLoginPage = ({
  id,
  type,
  label
}) => {
  
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const validatePassword = (anyPassword) => {
    if (validator.isStrongPassword(anyPassword, {
      minLength: 6,
      minLowercase: 1,
      minNumbers: 1,
      minUppercase: 1,
      minSymbols: 1
    })) {
      setMessage('Senha forte');
      return true
    } else {
      setMessage('Senha fraca')
      return false
    }
  }

  return (
    <div className='container_1'>
      <label htmlFor={id} className='container_1__label'>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        size={type == 'password' ? 6 : 30}
        onChange={(element) => {
          validatePassword(element.target.value) == true
          setValue(element.target.value)
        }}
        className='container_1__input'
      />

    {
      value == '' ? null :
      (message != '' && type == 'password') ?

      message == 'Senha forte' ?
      <span className='container_1__password-t'>
        {message}
      </span> : 
      <span className='container_1__password-f'>
        {message}
      </span>: null
    }
    </div>
  );
}

export default InputLoginPage;
