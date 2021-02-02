const selectOptions = {
  outlaySets: {
    title: 'Категория расходов',
    name: 'outlay',
    options: [
      {
        value: 'food',
        title: 'Еда',
      },
      {
        value: 'beverages',
        title: 'Напитки',
      },
      {
        value: 'clothes',
        title: 'Одежда',
      },
    ],
  },
  incomeSets: {
    title: 'Категория доходов',
    name: 'income',
    options: [
      {
        value: 'salary',
        title: 'Зарплата',
      },
      {
        value: 'deposit',
        title: 'Депозит',
      },
      {
        value: 'lottery',
        title: 'Лотерея',
      },
    ],
  },
  currencySets: {
    title: 'Валюта',
    name: 'currency',
    options: [
      {
        value: 'rub',
        title: 'RUB',
      },
      {
        value: 'usd',
        title: 'USD',
      },
      {
        value: 'hrn',
        title: 'HRN',
      },
    ],
  },
  periodList: {
    name: 'periodList',
    options: [
      {
        value: 'month',
        title: 'Месяц',
      },
      {
        value: 'day',
        title: 'День',
      },
      {
        value: 'week',
        title: 'Неделя',
      },
      {
        value: 'year',
        title: 'Год',
      },
    ],
  },
};
export default selectOptions;
