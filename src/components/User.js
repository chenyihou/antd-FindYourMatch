import React from 'react';
import { Row, Col } from 'antd'
const User = () => (
    <div>
    <p>Avator</p>
    <Row type="flex" justify="start">
      <Col span={4}>userName</Col>
      <Col span={4}>location</Col>
      <Col span={4}>sex</Col>
      <Col span={4}>contact</Col>
    </Row>

    <p>want to do</p>
    <Row type="flex" justify="center">
      <Col span={4}>fav1</Col>
      <Col span={4}>fav2</Col>
      <Col span={4}>fav3</Col>
      <Col span={4}>fav4</Col>
    </Row>

    <p>introduction</p>
    <Row type="flex" justify="end">
      <Col span={1}>use other element later</Col>
    </Row>

    
  </div>
)
export default User