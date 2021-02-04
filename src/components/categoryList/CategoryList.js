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
import { getDate, getPeriod } from "../../redux/sets/selectorSets";
import { OutlinedInput } from "@material-ui/core";

const CategoryList = () => {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const incomeData = useSelector(getIncome);
  const spendData = useSelector(getSpending);

  const date = useSelector(getDate);
  const period = useSelector(getPeriod);
  const { getDayPeriod, getWeekPeriod, getMonthPeriod } = new CountTotal();

  const [list, setList] = useState([]);
  const locationState = location.state.data
    ? location.state.data
    : location.state;
  const dataArr =
    locationState.parentCat === "income"
      ? incomeData
      : locationState.parentCat === "outlay"
      ? spendData
      : null;

  const onGoBack = () => {
    history.push(locationState.from);
  };
  const goToEdit = (id) => {
    const path = locationState.parentCat === "outlay" ? "spending" : "income";
    history.push({
      pathname: `/${path}/${id}`,
      state: {
        from: location.pathname,
        data: { ...locationState },
      },
    });
  };
  useEffect(() => {
    if (dataArr) {
      const arrByCategory = dataArr.filter(
        (item) =>
          item[
            locationState.parentCat === "outlay"
              ? "outlay"
              : locationState.parentCat === "income"
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
  }, [dataArr]);
  return (
    <Section>
      <Button title="Go back" onClick={onGoBack} stylesUi={{variant: "outlined", color: "default"}}/>
      <Title title={`${locationState.category} ${locationState.period}`} />
      <List>
        {list.map((item) => (
          <CategoryItem key={item.id} item={item} goToEdit={goToEdit} />
        ))}
      </List>
    </Section>
  );
};

export default CategoryList;
