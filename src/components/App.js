import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Layout, Menu, Icon } from 'antd';
import User from './User.js'
import Match from './Match.js'
import Ladder from './Ladder.js'
const {Header, Content, Footer, Sider} = Layout;

export const App = () => (
    <Router>
    <Layout>
    <Sider
    breakpoint="lg"
    collapsedWidth="0"
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
      <Link to="/user">

          <Icon type="user" />
          <span className="nav-text">user info</span>
          </Link>

        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/match">
          <Icon type="video-camera" />
          <span className="nav-text">find a match</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">availability</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/ladder">

          <Icon type="user" />
          <span className="nav-text">ladder</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{
        background: '#fff',
        padding: 0
    }} />
      <Content style={{
        margin: '24px 16px 0'
    }}>
        <div style={{
        padding: 24,
        background: '#fff',
        minHeight: 360
    }}>
           <Route exact path="/" component={Match} />
           <Route path="/match" component={Match} />
           <Route path="/user" component={User} />
           <Route path="/ladder" component={Ladder} />

        </div>
      </Content>
      <Footer style={{
        textAlign: 'center'
    }}>
      </Footer>
    </Layout>
  </Layout>
  </Router>
)


