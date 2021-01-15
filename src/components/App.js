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
  };
  toggleSpendings = () => {
    this.setState(prevState => ({
      spendIsOpen: !prevState.spendIsOpen,
      homeIsOpen: !prevState.homeIsOpen,
    }));
  };
  onHandleSubmit = data => {
    this.setState(prevState => ({ spendData: [...prevState.spendData, data] }));
    this.toggleSpendings();
  };
  render() {
    const { incomeIsOpen, spendIsOpen, homeIsOpen } = this.state;
    return (
      <>
        {homeIsOpen && <Home onToggleSpendings={this.toggleSpendings} />}
        {spendIsOpen && <CardSpendings onToggleSpendings={this.toggleSpendings} onHandleSubmit={this.onHandleSubmit} />}
        {incomeIsOpen && <CardIncome />}
      </>
    );
  }
}
