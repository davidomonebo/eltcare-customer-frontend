import axios from "axios";
import { TokenManager } from "./token";
import { BASE_URL } from "constants/settings";

const api = axios.create({ baseURL: BASE_URL + "/api/" });

api.interceptors.request.use(
    config => {
        const token = TokenManager.getAccessToken();
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    error => {
        return Promise.reject(error)
    },
);

export default api;
