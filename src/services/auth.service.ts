import { axiosInstance } from "@/api/interceptor";
import { IAuthForm, IAuthResponse } from "@/interfaces/auth.interface";
import { removeAccessToken, setAccessToken } from "./auth.jwt.service";

export const authService = {
    async main(type: "login" | "register", data: IAuthForm) {
        const response = await axiosInstance.post<IAuthResponse>(`/auth/${type}`, data);
        if (response.data.accessToken) setAccessToken(response.data.accessToken);
        return response;
    },

    async getNewToken() {
        const response = await axiosInstance.post<IAuthResponse>("/auth/refresh");
        if (response.data.accessToken) setAccessToken(response.data.accessToken);
        return response;
    },

    async logout() {
        const response = await axiosInstance.post<boolean>("/auth/logout");
        if (response.data) removeAccessToken();
        return response;
    }
}