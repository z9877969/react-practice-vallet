import React, { Component } from 'react';
import CardIncome from './cardIncome/CardIncome';
import CardSpendings from './cardSpendings/CardSpendings';
import Home from './home/Home';
import SpendingList from './spendingList/SpendingList';
import ApiServicesClass from '../services/apiServicesClass';
export default class App extends Component {
  state = {
    incomeIsOpen: false,
    spendIsOpen: false,
    homeIsOpen: true,
    spendData: [],
    incomeData: [],
  };
  api = new ApiServicesClass();
  async componentDidMount() {
    const spending = await this.api.getSpending();
    const income = await this.api.getIncome();
    if (spending) {
      this.setState({ spendData: spending });
    }
    if (income) {
      this.setState({ incomeData: income });
    }
  }

  toggleSpendings = () => {
    this.setState(prevState => ({
      spendIsOpen: !prevState.spendIsOpen,
      homeIsOpen: !prevState.homeIsOpen,
    }));
  };
  toggleIncome = () => {
    this.setState(prevState => ({
      incomeIsOpen: !prevState.incomeIsOpen,
      homeIsOpen: !prevState.homeIsOpen,
    }));
  };
  onHandleSubmit = async ({ key, data }) => {
    const responseData = await this.api.post(key, data);
    if (key === 'spending') {
      this.setState(prevState => ({ spendData: [...prevState.spendData, responseData] }));
      this.toggleSpendings();
    } else if (key === 'income') {
      this.setState(prevState => ({ incomeData: [...prevState.incomeData, responseData] }));
      this.toggleIncome();
    }
  };
  render() {
    const { incomeIsOpen, spendIsOpen, homeIsOpen, spendData, incomeData } = this.state;
    return (
      <>
        {homeIsOpen && <Home onToggleSpendings={this.toggleSpendings} onToggleIncome={this.toggleIncome} spending={spendData} income={incomeData} />}
        {spendIsOpen && <CardSpendings onToggleSpendings={this.toggleSpendings} onHandleSubmit={this.onHandleSubmit} />}
        {incomeIsOpen && <CardIncome onToggleIncome={this.toggleIncome} onHandleSubmit={this.onHandleSubmit} />}
        {spendData.length > 0 && <SpendingList spendData={spendData} />}
      </>
    );
  }
}
