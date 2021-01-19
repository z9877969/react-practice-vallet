import React, { Component } from 'react';
import { Form } from '../shared/form/Form';
import { Input } from '../shared/input/Input';
import { Select } from '../shared/select/Select';
import { income, currency } from '../../utils/selectOptions';
import moment from 'moment';
import CardTitle from '../shared/cardTitle/CardTitle';
export default class CardIncome extends Component {
  state = {
    cardId: 'income',
    date: moment(Date.now()).format('YYYY-MM-DD'),
    time: moment(Date.now()).format('HH:mm'),
    income: income.options[0].value,
    total: '',
    currency: currency.options[0].value,
  };
  resetState = () => {
    this.setState({
      date: moment(Date.now()).format('YYYY-MM-DD'),
      time: moment(Date.now()).format('HH:mm'),
      income: income.options[0].value,
      total: '',
      currency: currency.options[0].value,
    });
  };
  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onFormSubmit = e => {
    e.preventDefault();
    const { cardId, ...data } = this.state;
    console.log(cardId, data);
    this.props.onHandleSubmit({ key: cardId, data });
    this.resetState();
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <Form onHandleSubmit={this.onFormSubmit}>
          <CardTitle title="Доходы" onToggleCard={this.props.onToggleIncome} />
          <Input title="День" onChange={this.onHandleChange} type="date" value={this.state.date} name="date" />
          <Input title="Время" onChange={this.onHandleChange} type="time" value={this.state.time} name="time" />
          <Select onChange={this.onHandleChange} sets={income} />
          <Input title="Сумма" onChange={this.onHandleChange} type="text" value={this.state.total} placeholder="Введите сумму" name="total" />
          <Select onChange={this.onHandleChange} sets={currency} />
        </Form>
      </div>
    );
  }
}
