export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const REQUEST_AUTHENTICATION = 'REQUEST_AUTHENTICATION'
export const RECEIVE_AUTHENTICATION = 'RECEIVE_AUTHENTICATION'
// export const REJECTED_AUTHENTICATION = 'REJECTED_AUTHENTICATION'

const url = 'http://localhost:3000/'

export const receiveAuthentication = payload => ({
    type: RECEIVE_AUTHENTICATION,
    payload
})

// export const rejectedAuthentication = payload => ({
//     type: REJECTED_AUTHENTICATION,
//     payload
// })

export const requestAuthentication = (userName, passWord) => (dispatch, getState) => {
    dispatch({
        type: REQUEST_LOGIN
    })
    return fetch(url + 'login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            userName,
            passWord,
        })
    })
        .then(res => {
            return res.json()
        })
        .then(json => {
            dispatch(receiveAuthentication(json))
        })
        .catch(err => dispatch(receiveAuthentication(err)))

}