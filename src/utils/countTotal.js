import moment from 'moment';

export default class CountTotal {
  constructor() {
    this.currentDate = moment(Date.now()).format('YYYY-MM-DD');
  }

  countDayTotal(data) {
    return data.filter(item => item.date === this.currentDate).reduce((acc, item) => acc + Number(item.total), 0);
  }

  countWeekTotal(data) {
    return data
      .filter(
        item =>
          moment(item.date).format('YYYY') === moment(this.currentDate).format('YYYY') &&
          moment(item.date, 'YYYY-MM-DD').isoWeek() === moment(this.currentDate, 'YYYY-MM-DD').isoWeek(),
      )
      .reduce((acc, item) => acc + Number(item.total), 0);
  }

  countMonthTotal(data) {
    return data
      .filter(item => moment(item.date).format('YYYY-MM') === moment(this.currentDate).format('YYYY-MM'))
      .reduce((acc, item) => acc + Number(item.total), 0);
  }
}
