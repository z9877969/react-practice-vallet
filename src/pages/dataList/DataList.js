import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Button from "../../components/shared/button/Button";
import Section from "../../components/shared/section/Section";
import { Select } from "../../components/shared/select/Select";
import selectOptions from "../../utils/selectOptions";
import { Input } from "../../components/shared/input/Input";
import {
  calculatePeriod,
  categoryResult,
  getDataByCategory,
  getDataByPeriodDate,
} from "../../utils/helpers";

import DataListItem from "../../components/dataListIem/DataListItem";
import {
  getIncome,
  getSpending,
} from "../../redux/dataLists/selectorsDataLists";
import { getDate, getPeriod } from "../../redux/sets/selectorSets";
import { setDate, setPeriod } from "../../redux/sets/actionSets";

// UI
import DateFnsUtils from "@date-io/moment"; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect'

const { periodList } = selectOptions;

const DataList = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();

  const incomeData = useSelector(getIncome);
  const spendData = useSelector(getSpending);
  const date = useSelector(getDate);
  const period = useSelector(getPeriod);

  const [periodStr, setPeriodStr] = useState("");
  const [list, setList] = useState([]);

  const onHandleDateUI = (e) =>
    dispatch(setDate(moment(e).format("YYYY-MM-DD")));

  const onHandleDate = (e) => dispatch(setDate(e.target.value));
  const onHandlePeriod = (e) => dispatch(setPeriod(e.target.value));
  const goBack = () => history.push("/");

  const { category } = match.params;
  const dataList = getDataByCategory(category, incomeData, spendData);
  const renderDataList = categoryResult(list, category);

  useEffect(() => {
    calculatePeriod(date, period, setPeriodStr);
    const currentDataList = getDataByPeriodDate(dataList, period, date);
    setList(currentDataList);
    // eslint-disable-next-line
  }, [period, date]);
  useEffect(() => {
    calculatePeriod(date, period, setPeriodStr);
    const currentDataList = getDataByPeriodDate(dataList, period, date);
    setList(currentDataList);
  }, []);

  return (
    <Section>
      <header>
        <Button title="Go back" onClick={goBack} />
        <Select value={period} sets={periodList} onChange={onHandlePeriod} />
        {/* <Select
          native
          value={period}
          onChange={onHandlePeriod}
          label="Period"
          inputProps={{
            name: "age",
            id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select> */}
      </header>
      <Button title="Left" />
      {/* <Input type="date" name="date" value={date} onChange={onHandleDate} /> */}
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker value={date} onChange={onHandleDateUI} />
      </MuiPickersUtilsProvider>
      <Button title="Right" />
      {periodStr && <h2>{periodStr}</h2>}
      <h2>Всего: 0.00</h2>
      <ul>
        {renderDataList.map((item) => (
          <DataListItem key={item.category} item={item} period={periodStr} />
        ))}
      </ul>
    </Section>
  );
};

export default DataList;
