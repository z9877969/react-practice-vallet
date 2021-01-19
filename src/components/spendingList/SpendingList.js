import React, { useState } from 'react';
import Button from '../shared/button/Button';
import Section from '../shared/section/Section';
import { Select } from '../shared/select/Select';
import { spendingList } from '../../utils/selectOptions';
import { Input } from '../shared/input/Input';
import moment from 'moment';
const SpendingList = ({ spendData }) => {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const onHandleDate = e => {
    setDate(e.target.value);
  };
  const categoryResult = data => {
    const uniqueCategory = data.map(item => item.outlay).filter((el, index, array) => array.indexOf(el) === index);
    console.log(uniqueCategory);
    return uniqueCategory
      .map(category =>
        data
          .filter(el => el.outlay === category)
          .reduce((acc, obj) => {
            const total = Number(obj.total);
            return { category, total: acc.total ? acc.total + total : total };
          }, {}),
      )
      .filter(category => category.total > 0);
  };
  const categoriesList = categoryResult(spendData);

  return (
    <Section>
      <header>
        <Button title="Go back" />
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

export default SpendingList;
