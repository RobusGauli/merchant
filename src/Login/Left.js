import React from 'react';

export default class Left extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                Left bar
            </div>
        )
    }
}

const styles = {
    container: {
        backgroundColor: 'black',
        
    }
}