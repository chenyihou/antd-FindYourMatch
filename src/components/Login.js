import React from 'react';
import { Button, Input } from 'antd';
// import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { requestAuthentication, receiveAuthentication } from '../actions/index.js'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            usernameAlert: '',
            passwordAlert: '',

        }
    }

    usernameChangeHandler = e => {
        this.setState({
            username: e.target.value
        })
    }

    passwordChangeHandler = e => {
        this.setState({
            password: e.target.value
        })
    }

    loginHandler = e => {
        if (this.state.username === '') {
            usernameAlert = 'username cannot be empty'
            return
        }
        if (this.state.username === '') {
            passwordAlerts = 'password cannot be empty'
            return
        }

        this.props.dispatch(requestAuthentication(this.state.username, this.state.password))
    }

    render() {
        if (this.props.user.pass) {
            return (<Redirect to='/' />)
        }
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: 'solid 1px',
                height: '20rem',
                padding: '2rem',
                width: '20rem',
                margin: 'auto',
                marginTop: '5rem',

            }}>
            <Input type="text" style={{
                width: '10rem'
            }} placeholder="username" value={this.state.username} onChange={this.usernameChangeHandler} /> 
            <p>{this.state.usernameAlert || this.props.user.msg}</p>
            <br/>
            <Input type = "password" style={{
                width: '10rem'
            }} placeholder="password" value = { this.state.password } onChange = { this.passwordChangeHandler }/>
            <p>{this.state.passwordAlert || this.props.user.msg}</p>
// ?
            <br/>
            <Button type="primary" style={{
                width: '5rem'
            }} onClick={this.loginHandler}>submit</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {user} = state
    return {
        user
    }
}
export default connect(mapStateToProps)(Login)