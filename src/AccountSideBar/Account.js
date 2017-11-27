import React from 'react';
import Balance from './Balance';
import { Transition } from 'semantic-ui-react';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;


export default class Account extends React.Component {
    state = {
        showMenuItems: false,
        showBalance: false, 
        showStatement: false,
    }

    toggleMenuItems = () => {
        this.setState({showMenuItems: !this.state.showMenuItems});
    }

    callback = key => {
        console.log(key);
    }

    menuItemClick = item =>  event => {
        switch (item) {
            case 'BALANCE':
                this.setState({showBalance: !this.state.showBalance});
                break;
            case 'STATEMENT': 
                this.setState({showStatement : !this.state.showStatement})
            default:
                break;
        }
    }

    

    _renderBalance = () => {
        return (
            <Balance />
        )
    }

    _renderStatement = () => {
        return <Statement />
    }

    render() {
        const {
            showBalance,
            showMenuItems,
            showStatement
        } = this.state;

        return (
            <div>
            
            
            <div>
                <Collapse onChange={this.callback} style={styles.customPanelStyle}>
                    <Panel header='Balance' style={styles.customPanelStyle}>
                        <p>HI there</p>
                    </Panel>

                    <Panel header='Statement' style={styles.customPanelStyle}>
                        <Statement />
                    </Panel>

                </Collapse>
            </div>
            
            
            
            </div>
        )
    }
}


const Statement = props => {
    let mockData = [
        { name: 'Credit', balance : 'Rs.300', type: 'credig'},
        { name: 'Credit', balance : 'Rs.30', type: 'Debi'},
        { name: 'Hello', balance : 'Rs.3120', type: 'Debit'}
    ]
    let view = mockData.map(val => <StatementCard name={val.name} balance={val.balance} type={val.balance} />)
    return (
        <div>
            {view}
        </div>
    )
}

const StatementCard = ({name, balance, type}) => {
    return (
        <div style={styles.statementCardContainer}>
            <div>{name}</div>
            <div>{balance}</div>
            <div>{type}</div>
        </div>
    )
}

const styles = {
    accountContainer: {
        display: 'flex',
        cursor: 'pointer',
        backgroundColor: 'white',
        
        height: '60px'
        
    },
    menuItem: {
        cursor: 'pointer'
    },
    statementCardContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '40px'
    },
    customPanelStyle: {
        border: 0,
        backgroundColor: 'rgba(114, 220, 210, 0.04)',
        margin: 0,
        
        
    }
}
