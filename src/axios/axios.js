import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://portfolio-b30aa.firebaseio.com/'
});


export default instance;