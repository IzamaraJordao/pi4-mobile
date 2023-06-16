import axios from 'axios';

const api = axios.create({
    baseURL: "https://petcomilao.azurewebsites.net"
});

export default api;