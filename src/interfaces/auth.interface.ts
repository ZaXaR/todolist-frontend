export interface IAuthForm {
    name: string;
    email: string;
}

export interface IUser {
    id: string;
    name: string;
    email: string;
}

export interface IAuthResponse {
    user: IUser;
    token: string;
}