import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import moment from 'moment';
import Button from '../../components/shared/button/Button';
import Section from '../../components/shared/section/Section';
import { Select } from '../../components/shared/select/Select';
import { spendingList } from '../../utils/selectOptions';
import { Input } from '../../components/shared/input/Input';
import { categoryResult } from '../../utils/helpers';
import { useStore } from '../../components/storeProvider/StoreProvider';

const DataList = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { spendData, incomeData } = useStore();
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const onHandleDate = e => {
    setDate(e.target.value);
  };
  const goBack = () => history.push('/');
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

export default DataList;
