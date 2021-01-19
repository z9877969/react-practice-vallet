import React from 'react';
const Button = ({ component, title = '' }) => {
  return <button>{component ? component : title}</button>;
};

export default Button;
