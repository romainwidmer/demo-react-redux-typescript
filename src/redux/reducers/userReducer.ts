import { UserDispatchTypes, UserType, USERS_ERROR, USERS_LOADING, USERS_SUCCESS } from "../actions/userActionTypes"

interface initialStateI {
    loading: boolean;
    error: string | null;
    users?: UserType[];
}

const initialState: initialStateI = {
    loading: false,
    error: null
}

const UserReducer = (state: initialStateI = initialState, action: UserDispatchTypes): initialStateI => {
    switch(action.type) {
        case USERS_LOADING:
            return {
                loading: true,
                error: null
            }
        case USERS_ERROR:
            return {
                loading: false,
                error: action.payload
            }
        case USERS_SUCCESS:
            return {
                loading: false,
                error: null,
                users: action.payload
            }
        default:
            return state
    }
}

export default UserReducer
