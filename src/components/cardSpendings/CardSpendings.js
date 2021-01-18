import React, { Component } from 'react';
import { Form } from '../shared/form/Form';
import { Input } from '../shared/input/Input';
import { Select } from '../shared/select/Select';
import { outlay, currency } from '../../utils/selectOptions';
import moment from 'moment';
import CardTitle from '../shared/cardTitle/CardTitle';
export default class CardSpendings extends Component {
  state = {
    cardId: 'spending',
    date: moment(Date.now()).format('YYYY-MM-DD'),
    time: moment(Date.now()).format('HH:mm'),
    outlay: '',
    total: '',
    currency: '',
  };
  resetState = () => {
    this.setState({
      date: moment(Date.now()).format('YYYY-MM-DD'),
      time: moment(Date.now()).format('HH:mm'),
      outlay: '',
      total: '',
      currency: '',
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
          <CardTitle title="Расходы" onToggleCard={this.props.onToggleSpendings} />
          <Input title="День" onChange={this.onHandleChange} type="date" value={this.state.date} name="date" />
          <Input title="Время" onChange={this.onHandleChange} type="time" value={this.state.time} name="time" />
          <Select onChange={this.onHandleChange} sets={outlay} />
          <Input title="Сумма" onChange={this.onHandleChange} type="text" value={this.state.total} placeholder="Введите сумму" name="total" />
          <Select onChange={this.onHandleChange} sets={currency} />
        </Form>
      </div>
    );
  }
}
