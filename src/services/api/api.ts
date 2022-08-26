import Axios from 'axios';

const api = Axios.create({
    baseURL: process.env.REACT_APP_CAT_API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;
