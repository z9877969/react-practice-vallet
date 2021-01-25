import { createContext, useContext, useEffect, useState } from 'react';
import ApiServicesClass from '../../services/apiServicesClass';

export const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

const StoreProvider = ({ children }) => {
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
  const data = { spendData, incomeData, error, onHandleSubmit };
  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
