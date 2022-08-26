import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://cataas.com/cat',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;
