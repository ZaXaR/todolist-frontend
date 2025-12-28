import { EnumToken } from "@/enums/auth.enum";
import Cookies from "js-cookie";

// Access token
export const getAccessToken = (): string | null => {
  return Cookies.get(EnumToken.ACCESS_TOKEN) || null;
};

export const setAccessToken = (accessToken: string) => {
  Cookies.set(EnumToken.ACCESS_TOKEN, accessToken, {
    expires: 1,
    secure: true,
    sameSite: "none",
  });
};

export const removeAccessToken = () => {
  Cookies.remove(EnumToken.ACCESS_TOKEN);
};

// Refresh token
export const getRefreshToken = (): string | null => {
  return Cookies.get(EnumToken.REFRESH_TOKEN) || null;
};

export const setRefreshToken = (token: string) => {
  Cookies.set(EnumToken.REFRESH_TOKEN, token, {
    expires: 7,
    secure: true,
    sameSite: "none",
  });
};

export const removeRefreshToken = () => {
  Cookies.remove(EnumToken.REFRESH_TOKEN);
};