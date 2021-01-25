import React, { useEffect, useState } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import CardIncome from '../pages/cardIncome/CardIncome';
import CardSpendings from '../pages/cardSpendings/CardSpendings';
import Home from './home/Home';
import DataList from '../pages/dataList/DataList';
import ApiServicesClass from '../services/apiServicesClass';
import RouteWrapper from './routeWrapper/RouteWrapper';

const App = () => {
  const [spendData, setSpendData] = useState([]);
  const [incomeData, setIncomeData] = useState([]);
  const [error, setError] = useState(null);
  const api = new ApiServicesClass();
  useEffect(() => {
    api
      .getSpending()
      .then(result => setSpendData(result))
      .catch(error => {
        console.log(error);
        setError(error);
      });
    api
      .getIncome()
      .then(result => setIncomeData(result))
      .catch(error => {
        console.log(error);
        setError(error);
      });
    // eslint-disable-next-line
  }, []);

  const onHandleSubmit = async ({ key, data }) => {
    const responseData = await api.post(key, data);
    if (key === 'spending') {
      setSpendData(prevState => [...prevState, responseData]);
    } else if (key === 'income') {
      setIncomeData(prevState => [...prevState, responseData]);
    }
  };

  return (
    <>
      {error ? (
        <h1>{error.message}</h1>
      ) : (
        <Switch>
          <RouteWrapper path="/" exact>
            <Home spending={spendData} income={incomeData} />
          </RouteWrapper>

          <RouteWrapper path="/spending">
            <CardSpendings onHandleSubmit={onHandleSubmit} />
          </RouteWrapper>

          <RouteWrapper path="/income">
            <CardIncome onHandleSubmit={onHandleSubmit} />
          </RouteWrapper>

          <RouteWrapper path="/list/:category">
            <DataList spendData={spendData} incomeData={incomeData} />
          </RouteWrapper>

          <Redirect to="/" />
        </Switch>
      )}
      {/* {spendData.length > 0 &&  <SpendingList spendData={spendData} />} */}
    </>
  );
};
export default App;
