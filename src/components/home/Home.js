import React from 'react';
import CountTotal from '../../utils/countTotal';

import Section from '../shared/section/Section';
const Home = ({ onToggleSpendings, onToggleIncome, spending, income }) => {
  const counter = new CountTotal();
  console.log('spending', spending);
  return (
    <Section>
      <div style={{ width: 'max-content', margin: '0 auto', border: '1px solid navy' }}>
        <h2>Расходы</h2>
        <p>RUB</p>
        <ul>
          <li>Сегодня: {counter.countDayTotal(spending)}</li>
          <li>Неделя: {counter.countWeekTotal(spending)}</li>
          <li>Месяц: {counter.countMonthTotal(spending)}</li>
        </ul>
        <button type="button" onClick={onToggleSpendings}>
          +
        </button>
      </div>
      <div style={{ width: 'max-content', margin: '0 auto', border: '1px solid navy' }}>
        <h2>Доходы</h2>
        <p>RUB</p>
        <ul>
          <li>Месяц: {counter.countMonthTotal(income)}</li>
        </ul>
        <button type="button" onClick={onToggleIncome}>
          +
        </button>
      </div>
    </Section>
  );
};

export default Home;
