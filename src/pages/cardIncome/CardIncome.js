import React, { useState } from 'react';
import { Form } from '../../components/shared/form/Form';
import { Input } from '../../components/shared/input/Input';
import { Select } from '../../components/shared/select/Select';
import { incomeSets, currencySets } from '../../utils/selectOptions';
import moment from 'moment';
import CardTitle from '../../components/shared/cardTitle/CardTitle';
import { useHistory } from 'react-router-dom';
import { useStore } from '../../components/storeProvider/StoreProvider';

const CardIncome = () => {
  const history = useHistory();
  const cardId = 'income';
  const [date, setDate] = useState(moment(Date.now()).format('YYYY-MM-DD'));
  const [time, setTime] = useState(moment(Date.now()).format('HH:mm'));
  const [income, setIncome] = useState(incomeSets.options[0].value);
  const [total, setTotal] = useState('');
  const [currency, setCurrency] = useState(currencySets.options[0].value);
  const { onHandleSubmit } = useStore();
  const onHandleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'date':
        return setDate(value);
      case 'time':
        return setTime(value);
      case 'total':
        return setTotal(value);
      case 'income':
        return setIncome(value);
      case 'currency':
        return setCurrency(value);
      default:
        return;
    }
  };
  const onFormSubmit = e => {
    e.preventDefault();
    const data = { date, time, income, total, currency };
    onHandleSubmit({ key: cardId, data });
    history.push({ pathname: '/' });
  };

  return (
    <div>
      <Form onHandleSubmit={onFormSubmit}>
        <CardTitle title="Расходы" />
        <Input title="День" onChange={onHandleChange} type="date" value={date} name="date" />
        <Input title="Время" onChange={onHandleChange} type="time" value={time} name="time" />
        <Select value={income} onChange={onHandleChange} sets={incomeSets} />
        <Input title="Сумма" onChange={onHandleChange} type="text" value={total} placeholder="Введите сумму" name="total" />
        <Select onChange={onHandleChange} sets={currencySets} />
      </Form>
    </div>
  );
};
export default CardIncome;