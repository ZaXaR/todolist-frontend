import { getAccessToken, removeAccessToken } from "@/services/auth.jwt.service";
import axios, { CreateAxiosDefaults } from "axios";
import { authService } from "@/services/auth.service";
import { errorCatch } from "@/utils/error";

const options: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
};


const axiosInstance = axios.create(options);
const axiosAuth = axios.create(options);

// 👉 Request interceptor
axiosAuth.interceptors.request.use(config => {
  const accessToken = getAccessToken();
  if (config?.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// 👉 Response interceptor
axiosAuth.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config;

    if (
      (error.response?.status === 401 ||
        errorCatch(error) === "jwt expired" ||
        errorCatch(error) === "jwt malformed") &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await authService.getNewToken();
        return axiosAuth.request(originalRequest);
      } catch (err) {
        if (errorCatch(err) === "jwt expired") removeAccessToken();
      }
    }

    throw error;
  }
);

export { axiosAuth, axiosInstance };