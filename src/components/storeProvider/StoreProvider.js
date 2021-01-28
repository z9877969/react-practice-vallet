import { createContext, useContext, useEffect, useState } from 'react';
import moment from 'moment';
import ApiServicesClass from '../../services/apiServicesClass';

const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

const StoreProvider = ({ children }) => {
  const [spendData, setSpendData] = useState([]);
  const [incomeData, setIncomeData] = useState([]);
  const [error, setError] = useState(null);
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [period, setPeriod] = useState({});
  const api = new ApiServicesClass();

  const onHandleSubmit = async ({ key, data }) => {
    const responseData = await api.post(key, data);
    if (key === 'spending') {
      setSpendData(prevState => [...prevState, responseData]);
    } else if (key === 'income') {
      setIncomeData(prevState => [...prevState, responseData]);
    }
  };

  const getPeriod = ({ date, period }) => setPeriod({ date, period });

  const getCardData = ({ category, id }) => {
    console.log(category === 'spending');
    if (category === 'spending') return spendData.find(el => el.id === +id);
    if (category === 'income') return incomeData.find(el => el.id === +id);
  };

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

  const data = { spendData, incomeData, error, onHandleSubmit, period, getPeriod, getCardData };
  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
