import React from 'react';
import { Avatar, Row, Col } from 'antd'
import { connect } from 'react-redux'

class User extends React.Component {
    render() {
        const {userName, location, sex, wantTodo} = this.props.user
        return (
            <div>
    <Avatar icon="user" />
    <Row type="flex" justify="start">
      <Col span={4}>{userName}</Col>
      <Col span={4}>{location}</Col>
      <Col span={4}>{sex}</Col>
      <Col span={4}>contact</Col>
    </Row>

    <p>want to do</p>
    <Row type="flex" justify="center">
      {wantTodo.map(item => {
                console.log(item)
                return (<Col key={item.id} span={4}>{item.todo}</Col>)
            })}
            
    </Row>

    <p>introduction</p>
    <Row type="flex" justify="end">
      <Col span={1}>use other element later</Col>
    </Row>

    
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

export default connect(mapStateToProps)(User)