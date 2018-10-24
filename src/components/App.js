import React from 'react';
import Main from './Main.js'
import Login from './Login.js'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import { connect } from 'react-redux'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount = () => {
        const {user, dispatch} = this.props
    // dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    render() {
        const {user} = this.props
        return (

            <Router>
            <div>
{this.props.user.pass ? <Main/> : <Redirect
            to={{
                pathname: "/login",
            }}
            />}
        <Route path="/login" component={Login}/>
        </div>
    </Router>

        )
    }
}

const mapStateToProps = state => {
    const {user} = state
    return {
        user
    }
}

export default connect(mapStateToProps)(App)