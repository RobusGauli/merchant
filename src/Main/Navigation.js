import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;




export default class Navigation extends Component {
    state = {
        collapsed: false
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
    render() {
        console.log("Props", this.props);
        const { collapsed } = this.state; 
        return (
            <Router >
            <div id= 'main'>
            <Layout style={{ minHeight: '100vh' }}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
              <div className="logo" />
              <Link to='/home'>
              <div style={{fontSize: '25px', color:'white', textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}> {collapsed ? 'NU' : 'NERU'}  </div>
              </Link>
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                <Link to='/home' >
                  <Icon type="pie-chart" />
                  <span>Home</span>
                </Link>
                </Menu.Item>
                <Menu.Item key="2">
                <Link to='/fundtransfer' >
                  <Icon type="desktop" />
                  <span>Fund Transfer</span>
                </Link>
                </Menu.Item>
                
                <Menu.Item key="3">
                    <Link to='/notification'>
                        <Icon type="file" />
                        <span>Notification</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <div onClick={() => this.props.history.push('/')}>
                        <Icon type="file" />
                        <span>Logout</span>
                  </div>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} >
                    <Icon type= {collapsed ? 'menu-unfold': 'menu-fold'} style={{
                        fontSize: '24px',
                        marginLeft: '13px',
                        marginTop: '13px'

                        }} 
                        className='trigger'
                        onClick={this.toggleMenu}/>

                </Header>
              <Content style={{ margin: '0 16px' }}>
                <Route exact path='/home' component={Home}/>
                <Route path='/fundtransfer' component={FundTransfer} />
                <Route path='/notification' component={Notification} />
                
              </Content>
              
            </Layout>
          </Layout>
          </div>
          </Router>
      
        )
    }
}



const Home  = () => (<h1> home </h1>)

const FundTransfer = () => (<h1> FUund ransfer</h1>)

const Notification = () => (<h1> Notification</h1>)

