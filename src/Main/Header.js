import React, { Component } from 'react';
import {
    Menu,
    Button
} from 'semantic-ui-react';

class Header extends Component {

    state = {
        activeItem : 'home'
    }

    handleItemClick = (e, { name }) => {
        console.log(name);
    }

    render() {
        const {
            onLogoutPress
        } = this.props;

        const { activeItem } = this.state;

        return (
            <Menu size='medium' style={{marginBottom: 0}}>
            <Menu.Item> Neru Payment </Menu.Item>
    
            <Menu.Menu position='right'>
              
                <Menu.Item>Robus Gauli </Menu.Item>
              <Menu.Item>
                <Button primary onClick={onLogoutPress}>Log out</Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        )
    }
}

export default Header;