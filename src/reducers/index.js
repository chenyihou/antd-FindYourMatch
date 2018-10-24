import { REQUEST_LOGIN, RECEIVE_AUTHENTICATION, receiveAuthentication, requestAuthentication, } from '../actions/index.js'
import { combineReducers } from 'redux'



const user = (state = {}, action) => {

    switch (action.type) {
    case REQUEST_LOGIN:
        return {
            ...user,
            isLoginning: true
        }
    case RECEIVE_AUTHENTICATION:
        return {
            ...action.payload.user
        }

    default:
        return state
    }
}

const rootReducer = combineReducers({
    user,
})

export default rootReducer