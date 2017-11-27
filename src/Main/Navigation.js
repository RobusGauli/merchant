import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AccountSideBar } from '../AccountSideBar';

import { Sidebar, Segment, Button, Menu as _Menu, Image, Icon as _Icon, Header as _Header} from 'semantic-ui-react'
const { Header, Content, Sider } = Layout;






export default class Navigation extends Component {
    state = {
        collapsed: false,
        sidebarVisible: false
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
      }

    handleItemClick = (e, { name }) => {
        this.setState({
            activeItem: name
        })
    }

    toggleMenu = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    onAccountClick = () => {
        this.setState({
            sidebarVisible: !this.state.sidebarVisible
        })
    }

    onCloseClick = () => {
        this.setState({
            sidebarVisible : false
        })
    }
    render() {
        console.log("Props", this.props);
        const { collapsed, sidebarVisible } = this.state; 
        return (
            <Router >
            <div id= 'main'>
            <Sidebar.Pushable as={Segment} > 
          <Sidebar
            
            as={_Menu}
            animation='overlay'
            width='wide'
            direction='right'
            visible={sidebarVisible}
            icon='labeled'
            vertical
            inverted

          >
            <AccountSideBar onCloseClick={this.onCloseClick}/>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
            <Layout style={{ minHeight: '100vh' }}>
            <Sider
                trigger={null}
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
              style={{backgroundImage: 'linear-gradient(to top, #209cff 0%, #68e0cf 100%)', margin: 0 }}
            >
              <div className="logo" />
              <Link to='/home'>
              <div style={{fontSize: '25px', color:'white', textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}> {collapsed ? 'NU' : 'NERU'}  </div>
              </Link>
              <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" style={{backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                <Menu.Item key="1">
                <Link to='/home' >
                  <Icon type="pie-chart" />
                  <span  style={styles.menuText}>Home</span>
                </Link>
                </Menu.Item>
                <Menu.Item key="2">
                <Link to='/fundtransfer' >
                  <Icon type="desktop" />
                  <span style={styles.menuText}>Fund Transfer</span>
                </Link>
                </Menu.Item>
                
                <Menu.Item key="3">
                    <Link to='/notification'>
                        <Icon type="file" />
                        <span  style={styles.menuText}>Notification</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <div onClick={() => this.props.history.push('/')}>
                        <Icon type="file" />
                        <span  style={styles.menuText}>Logout</span>
                  </div>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} >
                <div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                    <Icon type= {collapsed ? 'menu-unfold': 'menu-fold'} style={{
                        fontSize: '20px',
                        marginLeft: '13px',
                        marginTop: '13px'

                        }} 
                        
                        onClick={this.toggleMenu}/>
                    <div>
                        <div style={{paddingRight: '30px', cursor: 'pointer', fontSize: '16px'}} onClick={this.onAccountClick}> Accounts </div>
                    </div>
                </div>
                </Header>
              <Content style={{ margin: '0 16px' }}>
                <Route exact path='/home' component={Home}/>
                <Route path='/fundtransfer' component={FundTransfer} />
                <Route path='/notification' component={Notification} />
                
              </Content>
              
            </Layout>
          </Layout>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
            
            
          </div>
          </Router>
      
        )
    }
}

const styles = {
    menuText: {
        fontSize: '14px',
        color: 'black'
    }
}



const Home  = () => (<h1> home </h1>)

const FundTransfer = () => (<h1> FUund ransfer</h1>)

const Notification = () => (<h1> Notification</h1>)

