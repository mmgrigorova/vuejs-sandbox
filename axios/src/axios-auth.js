import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://vuejs-axios-21cdb.firebaseio.com'
});

instance.defaults.headers.common['something'] = 'something';

export default instance;