import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CardIncome from '../pages/cardIncome/CardIncome';
import CardSpendings from '../pages/cardSpendings/CardSpendings';
import Home from './home/Home';
import SpendingList from '../pages/spendingList/SpendingList';
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
  goBackHome = () => {
    this.props.history.push('/');
  };
  onHandleSubmit = async ({ key, data }) => {
    const responseData = await this.api.post(key, data);
    if (key === 'spending') {
      this.setState(prevState => ({ spendData: [...prevState.spendData, responseData] }));
    } else if (key === 'income') {
      this.setState(prevState => ({ incomeData: [...prevState.incomeData, responseData] }));
    }
  };
  render() {
    console.log('this.props', this.props);
    const { spendData, incomeData } = this.state;
    return (
      <>
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <Home onToggleSpendings={this.toggleSpendings} onToggleIncome={this.toggleIncome} spending={spendData} income={incomeData} {...props} />
            )}
          />

          <Route
            path="/spending"
            render={props => <CardSpendings onToggleSpendings={this.toggleSpendings} onHandleSubmit={this.onHandleSubmit} {...props} />}
          />

          <Route path="/income" render={props => <CardIncome onToggleIncome={this.toggleIncome} onHandleSubmit={this.onHandleSubmit} {...props} />} />

          <Route path="/list/:category" render={props => <SpendingList spendData={spendData} incomeData={incomeData} {...props} />} />
          <Redirect to="/" />
        </Switch>
        {/* {spendData.length > 0 &&  <SpendingList spendData={spendData} />} */}
      </>
    );
  }
}
