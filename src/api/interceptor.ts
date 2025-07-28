import { getAccessToken, removeAccessToken } from "@/services/auth.jwt.service";
import axios, { CreateAxiosDefaults } from "axios";
import { authService } from "@/services/auth.service";
import { errorCatch } from "@/utils/error";

const options: CreateAxiosDefaults = {
    baseURL: "http://localhost:4200/api",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    withCredentials: true,
}

const axiosInstance = axios.create(options);
const axiosAuth = axios.create(options);

axiosAuth.interceptors.request.use(config => {
    const token = getAccessToken();
    if (config?.headers && token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
axiosAuth.interceptors.response.use(
    config => config,
    async error => {
        const originalRequest = error.config;

        if (
            error.response.status === 401 ||
            errorCatch(error).includes("jwt expired") ||
            errorCatch(error).includes("jwt malformed") &&
            error.config && !error.config._isRetry
        ) {
            originalRequest._retry = true;
            try {
                await authService.getNewToken(); // Assuming this function refreshes tokens
                return axiosAuth.request(originalRequest);
            } catch (error) {
                if (errorCatch(error) === "jwt expired") removeAccessToken();
            }
        }

        throw error;
    }

);

export { axiosAuth, axiosInstance };