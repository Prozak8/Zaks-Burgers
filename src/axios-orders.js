import axios from 'axios';

const instance =  axios.create({
    baseURL: 'https://zaks-burgers.firebaseio.com/'
});

export default instance;