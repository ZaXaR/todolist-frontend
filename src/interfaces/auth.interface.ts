export interface IAuthForm {
    name?: string;
    email: string;
    password: string;
}

export interface IUser {
    id: string;
    name: string;
    email: string;
}

export interface IAuthResponse {
    user: IUser;
    accessToken: string;
}