import { useHistory } from 'react-router-dom';

import CountTotal from '../../utils/countTotal';
import Button from '../shared/button/Button';
import Section from '../shared/section/Section';
import { useStore } from '../storeProvider/StoreProvider';

const Home = () => {
  const history = useHistory();
  const counter = new CountTotal();
  const goToSpending = () => history.push('/spending');
  const goToIncome = () => history.push('/income');
  const goToListIncome = () => history.push('/list/income');
  const goToListOutlay = () => history.push('/list/outlay');
  const { spendData: spending, incomeData: income } = useStore();
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
        <Button onClick={goToSpending} title="+" />
      </div>
      <div style={{ width: 'max-content', margin: '0 auto', border: '1px solid navy' }}>
        <h2>Доходы</h2>
        <p>RUB</p>
        <ul>
          <li>Месяц: {counter.countMonthTotal(income)}</li>
        </ul>
        <Button onClick={goToIncome} title="+" />
      </div>
      <div style={{ width: 'max-content', margin: '0 auto', border: '1px solid navy' }}>
        <Button onClick={goToListIncome} title="Все доходы" />
        <Button onClick={goToListOutlay} title="Все расходы" />
      </div>
    </Section>
  );
};

export default Home;
