import axios from 'axios';

const backend_url = process.env.VUE_APP_BACKEND_URL || 'http://localhost:3000';

const instance = axios.create();
instance.defaults.baseURL = backend_url;

export default instance;
