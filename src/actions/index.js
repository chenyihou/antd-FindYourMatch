export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const REQUEST_AUTHENTICATION = 'REQUEST_AUTHENTICATION'
export const RECEIVE_AUTHENTICATION = 'RECEIVE_AUTHENTICATION'

const url = 'http://localhost:3000/'

export const receiveAuthentication = res => ({
    type: RECEIVE_AUTHENTICATION,
    payload: {
        serverRes,
    }
})

export const requestAuthentication = (userName, passWord) => {
    return dispatch => {
        dispatch(REQUEST_LOGIN)
        return fetch(url + 'login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                userName,
                passWord,
            })
                .then(res => res.json())
                .then(serverRes => dispatch(receiveAuthentication(serverRes)))
        })
    }
}