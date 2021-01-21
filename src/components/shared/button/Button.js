import React from 'react';
const Button = ({ component, title = '', onClick }) => {
  return <button onClick={onClick}>{component ? component : title}</button>;
};

export default Button;
