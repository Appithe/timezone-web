import axios from 'axios';

const URL = 'http://localhost:3000/api/';

const timezonedb = axios.create({
  baseURL: URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default timezonedb;
