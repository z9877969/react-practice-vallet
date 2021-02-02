import { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import ApiServicesClass from '../../services/apiServicesClass';
import { addIncome, addSpending, getIncomeData, getSpendingData, updateIncome, updateSpending } from '../../redux/dataLists/actionDataLists';
import { findIncome, findSpending } from '../../redux/dataLists/selectorsDataLists';
import { resetItemId } from '../../redux/activeCard/actionActiveCard';

const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

const StoreProvider = ({ children }) => {
  const dispatch = useDispatch();
  const incomeItem = useSelector(findIncome);
  const spendingItem = useSelector(findSpending);
  // const [spendData, setSpendData] = useState([]);
  // const [incomeData, setIncomeData] = useState([]);
  const [error, setError] = useState(null);
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [period, setPeriod] = useState({});
  const api = new ApiServicesClass();

  const onHandleSubmit = async ({ key, data, id = null }) => {
    if (!id) {
      try {
        const responseData = await api.post(key, data);
        if (key === 'spending') {
          dispatch(addSpending(responseData));
          // setSpendData(prevState => [...prevState, responseData]);
        } else if (key === 'income') {
          dispatch(addIncome(responseData));
          // setIncomeData(prevState => [...prevState, responseData]);
        }
      } catch (error) {
        setError(error);
      }
    } else {
      try {
        const responseData = await api.patch(key, data, id);
        if (key === 'spending') {
          dispatch(updateSpending({ item: responseData, id }));
          // setSpendData(prevState => [...prevState, responseData]);
        } else if (key === 'income') {
          dispatch(updateIncome({ item: responseData, id }));
          // setIncomeData(prevState => [...prevState, responseData]);
        }
      } catch (error) {
        setError(error);
      }
    }
    dispatch(resetItemId());
  };

  const getPeriod = ({ date, period }) => setPeriod({ date, period });

  const getCardData = ({ category }) => {
    if (category === 'spending') return spendingItem;
    if (category === 'income') return incomeItem;
  };

  useEffect(() => {
    api
      .getSpending()
      .then(result => {
        // setSpendData(result);
        dispatch(getSpendingData(result));
      })
      .catch(error => {
        console.log(error);
        setError(error);
      });
    api
      .getIncome()
      .then(result => {
        // setIncomeData(result);
        dispatch(getIncomeData(result));
      })
      .catch(error => {
        console.log(error);
        setError(error);
      });
    // eslint-disable-next-line
  }, []);

  const data = { error, onHandleSubmit, period, getPeriod, getCardData };
  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
