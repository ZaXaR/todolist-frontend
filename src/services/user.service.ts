import { axiosAuth } from "@/api/interceptor";
import { IUser } from "@/interfaces/auth.interface";

export interface iProfileResponse {
    user: IUser;
}

class UserService {
    private BASE_URL = "/user";

    async getProfile(): Promise<iProfileResponse> {
        const response = await axiosAuth.get<iProfileResponse>(`${this.BASE_URL}/profile`);

        if (!response.data) {
            throw new Error("Failed to fetch profile");
        }

        return response.data;
    }

    async updateProfile(data: Partial<IUser>): Promise<iProfileResponse> {
        const response = await axiosAuth.put<iProfileResponse>(`${this.BASE_URL}/profile`, data);

        if (!response.data) {
            throw new Error("Failed to update profile");
        }

        return response.data;
    }
}
export const userService = new UserService();
export default userService;