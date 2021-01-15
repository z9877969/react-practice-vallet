import React from 'react';

export const Form = ({ children, onHandleSubmit }) => {
  return (
    <form
      onSubmit={onHandleSubmit}
      style={{ border: '1px solid navy', width: 'max-content', margin: '0 auto', display: 'flex', flexDirection: 'column' }}
    >
      {children}
    </form>
  );
};
