import React, { Component } from 'react';
import { Form } from './shared/form/Form';
import { Input } from './shared/input/Input';
import { Select } from './shared/select/Select';
import { outlay } from '../utils/selectOptions';
export default class App extends Component {
  state = {
    date: '',
    time: '',
    outlay: '',
    total: '',
  };
  onHandleChange = e => {
    const { name, value } = e.target;
    console.log(e.target);
    this.setState({ [name]: value });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <Form>
          <Input title="День" onChange={this.onHandleChange} type="date" value={this.state.date} name="date" />
          <Input title="Время" onChange={this.onHandleChange} type="time" value={this.state.time} name="time" />
          <Select onChange={this.onHandleChange} sets={outlay} />
          <Input title="Сумма" onChange={this.onHandleChange} type="text" value={this.state.total} placeholder="Введите сумму" name="total" />
        </Form>
      </div>
    );
  }
}
