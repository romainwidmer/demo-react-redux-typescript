import { Dispatch } from 'redux'
import { UserDispatchTypes, USERS_LOADING, USERS_ERROR, USERS_SUCCESS } from './userActionTypes'

export const GetUsers = () => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
        dispatch({ type: USERS_LOADING })

        const response = await(await fetch(`http://localhost:3001/users`)).json()

        dispatch({ type: USERS_SUCCESS, payload: response })
    } catch(err) {
        dispatch({ type: USERS_ERROR, payload: err })
    }
}
