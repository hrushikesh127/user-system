
import axios from 'axios';

export const apiclient = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/"
})