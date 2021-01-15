import React from 'react';
const Home = ({ onToggleSpendings }) => {
  return (
    <div style={{ width: 'max-content', margin: '0 auto', border: '1px solid navy' }}>
      <h2>Расходы</h2>
      <p>RUB</p>
      <ul>
        <li>Сегодня: 0,00</li>
        <li>Неделя: 0,00</li>
        <li>Месяц: 0,00</li>
      </ul>
      <button type="button" onClick={onToggleSpendings}>
        +
      </button>
    </div>
  );
};

export default Home;
