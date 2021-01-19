import React from 'react';

export const Input = ({ title, onChange, placeholder = '', type = 'text', value, name }) => {
  return (
    <label>
      {title && title}
      <input type={type} placeholder={placeholder} value={value} name={name} onChange={onChange} />
    </label>
  );
};
