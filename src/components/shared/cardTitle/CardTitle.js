import React from 'react';
const CardTitle = ({ title, onToggleCard }) => {
  return (
    <header style={{ border: '1px solid navy', display: 'flex' }}>
      <button type="button" onClick={onToggleCard}>
        Go back
      </button>
      <h2>{title}</h2>
      <button type="submit">Ok</button>
    </header>
  );
};

export default CardTitle;
