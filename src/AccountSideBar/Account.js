import React from 'react';
import Balance from './Balance';
import { Transition } from 'semantic-ui-react';


export default class Account extends React.Component {
    state = {
        showMenuItems: false,
        showBalance: false, 
        showStatement: false,
    }

    toggleMenuItems = () => {
        this.setState({showMenuItems: !this.state.showMenuItems});
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

    _renderMenuItems = () => {
        return (
            <div style={styles.menuItemContainer}>
                <div style={styles.menuItem} onClick={this.menuItemClick('BALANCE')}> Balance </div>
                <div style={styles.menuItem} onClick={this.menuItemClick('STATEMENT')}> Statement </div>
                <div style={styles.menuItem} onClick={this.menuItemClick('DEFAULT')}> Default </div>
                <div style={styles.menuItem} onClick={this.menuItemClick('RENAME')}> Rename </div>
                <div style={styles.menuItem} onClick={this.menuItemClick('DELETE')}> Delete </div>
            </div>
        )
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
            <div style={styles.accountContainer} onClick={this.toggleMenuItems}>Hi there I am Account </div>
            <Transition visible={showMenuItems} animation ='scale' duration={500} unmountOnHide mountOnShow>
                <div>
                    {showMenuItems && this._renderMenuItems()}
                </div>
            </Transition>
            {showBalance && this._renderBalance()}
            {showStatement && this._renderStatement()}
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
        alignItems: 'center',
        justifyContent: 'center',
        height: '60px'
        
    },
    menuItemContainer: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'red',
        height: '70px',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    menuItem: {
        cursor: 'pointer'
    },
    statementCardContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '40px'
    }
}
