import { axiosInstance } from "@/api/interceptor";
import { IAuthForm, IAuthResponse } from "@/interfaces/auth.interface";
import { removeAccessToken, setAccessToken } from "./auth.jwt.service";

export const authService = {
    async main(type: "login" | "register", data: IAuthForm) {
        const response = await axiosInstance.post<IAuthResponse>(`/auth/${type}`, data);

        if (response.data.token) setAccessToken(response.data.token);
        return response;
    },

    async getNewToken() {
        const response = await axiosInstance.get<IAuthResponse>("/auth/refresh");

        if (response.data.token) setAccessToken(response.data.token);
        return response;
    },

    async logout() {
        const response = await axiosInstance.post("/auth/logout");
        if (response.data) removeAccessToken
        return response;
    }
}