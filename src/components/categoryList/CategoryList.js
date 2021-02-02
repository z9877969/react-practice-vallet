import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CategoryItem from "../categoryItem/CategoryItem";
import List from "../shared/list/List";
import Section from "../shared/section/Section";
import Title from "../shared/title/Title";
import CountTotal from "../../utils/countTotal";

import { useStore } from "../storeProvider/StoreProvider";
import Button from "../shared/button/Button";
import {
  getIncome,
  getSpending,
} from "../../redux/dataLists/selectorsDataLists";

const CategoryList = () => {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const incomeData = useSelector(getIncome);
  const spendData = useSelector(getSpending);

  const {
    period: { date, period },
  } = useStore();

  const { getDayPeriod, getWeekPeriod, getMonthPeriod } = new CountTotal();

  const [list, setList] = useState([]);

  const dataArr =
    location.state.parentCat === "income"
      ? incomeData
      : location.state.parentCat === "outlay"
      ? spendData
      : null;

  const onGoBack = () => {
    history.push(location.state.from);
  };
  const goToEdit = (id) => {
    const path = location.state.parentCat === "outlay" ? "spending" : "income";
    history.push({
      pathname: `/${path}/${id}`,
      state: {
        from: location.pathname,
      },
    });
  };
  useEffect(() => {
    if (dataArr) {
      const arrByCategory = dataArr.filter(
        (item) =>
          item[
            location.state.parentCat === "outlay"
              ? "outlay"
              : location.state.parentCat === "income"
              ? "income"
              : ""
          ] === match.params.category
      );
      switch (period) {
        case "day":
          setList(getDayPeriod(arrByCategory, date));
          break;
        case "week":
          setList(getWeekPeriod(arrByCategory, date));
          return;
        case "month":
          setList(getMonthPeriod(arrByCategory, date));
          break;
        case "year":
          console.log(arrByCategory, date);
          break;
        default:
          break;
      }
    }
  }, []);

  return (
    <Section>
      <Button title="Go back" onClick={onGoBack} />
      <Title title={`${location.state.category} ${location.state.period}`} />
      <List>
        {list.map((item) => (
          <CategoryItem key={item.id} item={item} goToEdit={goToEdit} />
        ))}
      </List>
    </Section>
  );
};

export default CategoryList;
