import { useState } from 'react';
import './InputPassword.scss';

const InputPassword = ({
  id,
  type,
  label
}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 
  };

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
        className='container_1__input' />

      <a href="" onClick={handleSubmit} className='btn-send'>Enviar</a>

    </div>
  );
}

export default InputPassword;
