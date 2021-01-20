import axios from 'axios';
export default class ApiServicesClass {
  constructor() {
    axios.defaults.baseURL = 'http://localhost:3001';
  }
  getSpending() {
    return axios
      .get('spending')
      .then(response => response.data)
      .catch(error => error);
  }
  getIncome() {
    return axios
      .get('income')
      .then(response => response.data)
      .catch(error => error);
  }
  post(category, data) {
    return axios
      .post(category, data)
      .then(response => response.data)
      .catch(error => error);
  }
}
