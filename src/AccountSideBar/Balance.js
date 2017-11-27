import React from 'react';

export default class Balance extends React.Component {
    render() {
        return (
            <div className='balance' style={styles.balanceContainer}> Balance Sheet </div>
        )
    }
}


const styles = {
    balanceContainer: {
        fontSize: '14px',
        transition: '.25 all'
    }
}