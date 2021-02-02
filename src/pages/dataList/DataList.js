import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Button from '../../components/shared/button/Button';
import Section from '../../components/shared/section/Section';
import { Select } from '../../components/shared/select/Select';
import selectOptions from '../../utils/selectOptions';
import { Input } from '../../components/shared/input/Input';
import { calculatePeriod, categoryResult } from '../../utils/helpers';

import DataListItem from '../../components/dataListIem/DataListItem';
import { getIncome, getSpending } from '../../redux/dataLists/selectorsDataLists';
import { getDate, getPeriod } from '../../redux/sets/selectorSets';
import { setDate, setPeriod } from '../../redux/sets/actionSets';
import ApiServicesClass from '../../services/apiServicesClass';

const { periodList } = selectOptions;
const api = new ApiServicesClass();
const { getDayPeriod, getWeekPeriod, getMonthPeriod } = api;

const DataList = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const incomeData = useSelector(getIncome);
  const spendData = useSelector(getSpending);
  const date = useSelector(getDate);
  const period = useSelector(getPeriod);

  const [periodStr, setPeriodStr] = useState('');
  const [list, setList] = useState([]);

  const onHandleDate = e => {
    dispatch(setDate(e.target.value));
  };
  const goBack = () => history.push('/');
  const { category } = match.params;
  const categoriesList =
    category === 'income' ? categoryResult(incomeData, category) : category === 'outlay' ? categoryResult(spendData, category) : null;
  const onHandlePeriod = e => {
    const result = e.target.value;
    dispatch(setPeriod(result));
  };

  useEffect(() => {
    calculatePeriod(date, period, setPeriodStr);
    // console.log(categoriesList);
    // if (categoriesList) {
    //   const arrByCategory = categoriesList.filter(
    //     item => item[category === 'outlay' ? 'outlay' : category === 'income' ? 'income' : ''] === match.params.category,
    //   );
    //   switch (period) {
    //     case 'day':
    //       setList(getDayPeriod(arrByCategory, date));
    //       break;
    //     case 'week':
    //       setList(getWeekPeriod(arrByCategory, date));
    //       return;
    //     case 'month':
    //       setList(getMonthPeriod(arrByCategory, date));
    //       break;
    //     case 'year':
    //       console.log(arrByCategory, date);
    //       break;
    //     default:
    //       break;
    //   }
    // }
    // eslint-disable-next-line
  }, [period, date]);
  return (
    <Section>
      <header>
        <Button title="Go back" onClick={goBack} />
        <Select value={period} sets={periodList} onChange={onHandlePeriod} />
      </header>
      <Button title="Left" />
      <Input type="date" name="date" value={date} onChange={onHandleDate} />
      {periodStr && <h2>{periodStr}</h2>}
      <Button title="Right" />
      <h2>Всего: 0.00</h2>
      <ul>
        {categoriesList.map(item => (
          <DataListItem key={item.category} item={item} period={periodStr} />
        ))}
      </ul>
    </Section>
  );
};

export default DataList;
