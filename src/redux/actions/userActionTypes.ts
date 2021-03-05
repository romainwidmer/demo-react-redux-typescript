export const USERS_LOADING = 'USERS_LOADING'
export const USERS_ERROR = 'USERS_ERROR'
export const USERS_SUCCESS = 'USERS_SUCCESS'

export interface UsersLoading {
    type: typeof USERS_LOADING;
}

export interface UsersError {
    type: typeof USERS_ERROR;
    payload: string;
}

export interface UsersSuccess {
    type: typeof USERS_SUCCESS;
    payload: UserType[];
}

export type UserAddress = {
    street: string;
    city: string;
    zipcode: string;
}

export type UserCompany = {
    name: string
}

export type UserType = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: UserAddress;
    company: UserCompany;
}

export type UserDispatchTypes = UsersLoading | UsersError | UsersSuccess
