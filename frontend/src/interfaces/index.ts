export interface User {
    id: number | null;
    emailAddress: string | null;
    firstName: string | null;
    lastName: string | null;
    imageURI: string | null;
    role: string | null;
};

export interface LoginUser {
    emailAddress: string;
    password: string;
};

export interface RegisterUser {
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
};