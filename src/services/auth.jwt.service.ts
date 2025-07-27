import { EnumToken } from "@/enums/auth.enum";
import Cookies from "js-cookie";

export const getAccessToken = () => {
    const token = Cookies.get(EnumToken.ACCESS_TOKEN);
    return token || null;
}
export const setAccessToken = (token: string) => {
    Cookies.set(EnumToken.ACCESS_TOKEN, token, { expires: 7, secure: true, sameSite: "Strict" });
}
export const removeAccessToken = () => {
    Cookies.remove(EnumToken.ACCESS_TOKEN);
}
