import React, { useState } from 'react';
import { Form } from '../../components/shared/form/Form';
import { Input } from '../../components/shared/input/Input';
import { Select } from '../../components/shared/select/Select';
import selectOptions from '../../utils/selectOptions';
import moment from 'moment';
import CardTitle from '../../components/shared/cardTitle/CardTitle';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useStore } from '../../components/storeProvider/StoreProvider';

const { outlaySets, currencySets } = selectOptions;

const CardSpendings = () => {
  const history = useHistory();
  const { params } = useRouteMatch();
  const { onHandleSubmit, getCardData } = useStore();
  const cardId = 'spending';
  console.log(params.id);
  const cardData = params.id ? getCardData({ id: params.id, category: cardId }) : null;
  console.log('cardData', getCardData({ id: cardId, category: params.id }));
  const [date, setDate] = useState(cardData ? cardData.date : moment(Date.now()).format('YYYY-MM-DD'));
  const [time, setTime] = useState(cardData ? cardData.time : moment(Date.now()).format('HH:mm'));
  const [outlay, setOutlay] = useState(cardData ? cardData.outlay : outlaySets.options[0].value);
  const [total, setTotal] = useState(cardData ? cardData.total : '');
  const [currency, setCurrency] = useState(cardData ? cardData.currency : currencySets.options[0].value);
  const onHandleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'date':
        return setDate(value);
      case 'time':
        return setTime(value);
      case 'total':
        return setTotal(value);
      case 'outlay':
        return setOutlay(value);
      case 'currency':
        return setCurrency(value);
      default:
        return;
    }
  };
  const onFormSubmit = e => {
    e.preventDefault();
    const data = { date, time, outlay, total, currency };
    onHandleSubmit({ key: cardId, data });
    history.push({ pathname: '/' });
  };

  return (
    <div>
      <Form onHandleSubmit={onFormSubmit}>
        <CardTitle title="Расходы" />
        <Input title="День" onChange={onHandleChange} type="date" value={date} name="date" />
        <Input title="Время" onChange={onHandleChange} type="time" value={time} name="time" />
        <Select value={outlay} onChange={onHandleChange} sets={outlaySets} />
        <Input title="Сумма" onChange={onHandleChange} type="text" value={total} placeholder="Введите сумму" name="total" />
        <Select onChange={onHandleChange} sets={currencySets} />
      </Form>
    </div>
  );
};
export default CardSpendings;
