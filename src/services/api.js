import axios from 'axios';

const API_KEY = '73fa89d4f5be62640fd7fb9a794d4ba6';
const BASE_URL = 'https://api.themoviedb.org/3';

const ApiTMDB = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY
    }
});

export { ApiTMDB };