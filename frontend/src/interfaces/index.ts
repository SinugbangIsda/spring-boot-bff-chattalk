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

export interface ForgotPasswordUser {
    emailAddress: string;
};

export interface AuthLayoutProps {
    heading: string;
    formComponent: JSX.Element | JSX.Element[];
    footer: JSX.Element | JSX.Element[];
};

export interface AuthCardFooterProps {
    message?: string;
    navigateText: string;
    navigateLink: string;
    navigateBack?: boolean;
};

export interface AppLayoutProps {
    children: JSX.Element | JSX.Element[];
};

export interface SearchInputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
    value: string;
    ref: React.RefObject<HTMLInputElement>;
}