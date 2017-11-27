import React from 'react';
import { Icon } from 'semantic-ui-react';

import Account from './Account';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

export default class AccountSideBar extends React.Component {
    callback = key => {
        console.log(key);
    }
    
    render() {
        const text = "HI this is the inner text";
        const {
            onCloseClick
        } = this.props;
        return (
            <div style={styles.container}>

                <div style={{textAlign: 'right', cursor: 'pointer', marginRight: '15px', marginTop: '25px', marginBottom: '12px'}} onClick={onCloseClick}> <Icon name='close' size='large'/> </div>
                <div style={{textAlign: 'left', fontSize: '20px', marginLeft: '20px', marginBottom: '10px'}}> Accounts </div>
                <Collapse onChange={this.callback} accordion>
                <Panel header="Sunrise Account" key="1" style={styles.customPanelStyle}>
                  <Account />
                </Panel>
                <Panel header="Nabil Bank" key="2" style={styles.customPanelStyle}>
                  <Account />
                </Panel>
                <Panel header="mandir Account" key="3" style={styles.customPanelStyle}>
                  <Account/>
                </Panel>
              </Collapse>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
        backgroundImage: 'linear-gradient(to top, #209cff 0%, #68e0cf 100%)',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    customPanelStyle: {
        backgroundColor: '#f7f7f7',
        borderRadius: 4,
        marginBottom: 14,
        marginTop: 14,
        textAlign: 'left',
        border: 0,
        overflow: 'hidden',
        padding: 0
    }
}