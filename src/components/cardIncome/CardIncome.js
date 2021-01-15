import React, { Component } from 'react';
import { Form } from '../shared/form/Form';
import { Input } from '../shared/input/Input';
import { Select } from '../shared/select/Select';
import { income, currency } from '../../utils/selectOptions';
import moment from 'moment';
import CardTitle from '../shared/cardTitle/CardTitle';
export default class CardIncome extends Component {
  state = {
    date: moment(Date.now()).format('YYYY-MM-DD'),
    time: moment(Date.now()).format('HH:mm'),
    income: '',
    total: '',
    currency: '',
  };
  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <Form>
          <CardTitle title="Доходы" />
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
