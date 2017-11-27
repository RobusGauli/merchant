import React from 'react';
import { Icon } from 'semantic-ui-react';

import Account from './Account';

export default class AccountSideBar extends React.Component {

    
    render() {
        const {
            onCloseClick
        } = this.props;
        return (
            <div style={styles.container}>

                <div style={{textAlign: 'right', cursor: 'pointer', marginRight: '15px', marginTop: '25px', marginBottom: '20px'}} onClick={onCloseClick}> <Icon name='close' size='large'/> </div>
                <Account />
                <Account />
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
        backgroundImage: 'linear-gradient(to top, #209cff 0%, #68e0cf 100%)',
        
        flexDirection: 'column'
    }
}