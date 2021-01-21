import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../../components/shared/button/Button';
import Section from '../../components/shared/section/Section';
import { Select } from '../../components/shared/select/Select';
import { spendingList } from '../../utils/selectOptions';
import { Input } from '../../components/shared/input/Input';
import moment from 'moment';
const SpendingList = ({ spendData, incomeData, match, history }) => {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const onHandleDate = e => {
    setDate(e.target.value);
  };
  const goBack = () => history.push('/');

  const categoryResult = (data, cat) => {
    const uniqueCategory = data.map(item => item[cat]).filter((el, index, array) => array.indexOf(el) === index);
    console.log(uniqueCategory);
    return uniqueCategory
      .map(category =>
        data
          .filter(el => el[cat] === category)
          .reduce((acc, obj) => {
            const total = Number(obj.total);
            return { category, total: acc.total ? acc.total + total : total };
          }, {}),
      )
      .filter(category => category.total > 0);
  };
  const { category } = match.params;
  const categoriesList =
    category === 'income' ? categoryResult(incomeData, category) : category === 'outlay' ? categoryResult(spendData, category) : null;

  return (
    <Section>
      <header>
        <Button title="Go back" onClick={goBack} />
        <Select sets={spendingList} />
      </header>
      <Button title="Left" />
      <Input type="date" name="date" value={date} onChange={onHandleDate} />
      <Button title="Right" />
      <h2>Всего: 0.00</h2>
      <ul>
        {categoriesList.map(item => (
          <li key={item.category}>
            <span>{item.category}:</span> <span>{item.total}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default withRouter(SpendingList);
