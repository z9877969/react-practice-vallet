import React, { Component } from 'react';
import CardIncome from './cardIncome/CardIncome';
import CardSpendings from './cardSpendings/CardSpendings';
import Home from './home/Home';
export default class App extends Component {
  state = {
    incomeIsOpen: false,
    spendIsOpen: false,
    homeIsOpen: true,
    spendData: [],
    incomeData: [],
  };
  componentDidMount() {
    const spending = localStorage.getItem('spending');
    const income = localStorage.getItem('income');
    if (spending) {
      this.setState({ spendData: JSON.parse(spending) });
    }
    if (income) {
      this.setState({ incomeData: JSON.parse(income) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.spendData !== this.state.spendData) {
      localStorage.setItem('spending', JSON.stringify(this.state.spendData));
    }
    if (prevState.incomeData !== this.state.incomeData) {
      localStorage.setItem('income', JSON.stringify(this.state.incomeData));
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
  onHandleSubmit = ({ key, data }) => {
    if (key === 'spending') {
      this.setState(prevState => ({ spendData: [...prevState.spendData, data] }));
      this.toggleSpendings();
    } else if (key === 'income') {
      this.setState(prevState => ({ incomeData: [...prevState.incomeData, data] }));
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
      </>
    );
  }
}
