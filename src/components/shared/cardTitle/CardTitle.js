import React from 'react';
import { withRouter } from 'react-router-dom';
const CardTitle = ({ title, onToggleCard, history }) => {
  const goBackHome = () => {
    history.push('/');
  };
  return (
    <header style={{ border: '1px solid navy', display: 'flex' }}>
      <button type="button" onClick={goBackHome}>
        Go back
      </button>
      <h2>{title}</h2>
      <button type="submit">Ok</button>
    </header>
  );
};

export default withRouter(CardTitle);
