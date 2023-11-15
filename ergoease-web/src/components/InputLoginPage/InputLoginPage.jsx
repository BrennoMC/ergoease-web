import { useState } from 'react';
import './InputLoginPage.scss';

const InputLoginPage = ({
  id,
  type,
  label
}) => {
  const [value, setValue] = useState('');

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
        onChange={(element) => {
          setValue(element.target.value)
        }}
        className='container_1__input'
      />
    </div>
  );
}

export default InputLoginPage;
