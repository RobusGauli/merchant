import React, { Component } from 'react';
import Navigation from './Navigation';


class Main extends Component {

    render() {
        const { onLogoutPress } = this.props;
        return (
            <div style={styles.container} >
                
                <Navigation style={styles.navigationContainer} {...this.props}/>
                
                
            </div>
        )
    }
}


const styles = {
    
    navigationContainer: {
        marginTop: '0px',
        margin: '0px',
        height: '100vh',
        display: 'flex',
        flex: 1
    },
    container: {
        height: '100vh',
        position: 'relative'
        
    }
}
export default Main;