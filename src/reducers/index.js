import { REQUEST_LOGIN, RECEIVE_AUTHENTICATION, receiveAuthentication, requestAuthentication } from '../actions/index.js'
import { combineReducers } from 'redux'



const user = (state, action) => {
    switch (action.type) {
    case REQUEST_LOGIN:
        return {
            ...state,
            user: {
                ...user,
                isLoginning: true
            }
        }
    case RECEIVE_AUTHENTICATION:
        if (action.payload.pass) {
            return {
                ...state,
                user: action.payload.user
            }
        } else {
            return state
        }
    default:
        return state
    }
}

const rootReducer = combineReducers({
    user,
})
