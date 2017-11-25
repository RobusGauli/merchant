import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Navigation from './Login/Navigation';
import Login from './Login';
import { Grid, Image } from 'semantic-ui-react';



class App extends Component {

  onLogin = () => {
    alert('on succesfull ligin');
  }
  render() {
    return (
      
        <div style={styles.container}> 
          <div style={styles.left}>
            
            <div style={styles.title}>NERU</div>
            <div style={{...styles.title, fontSize: '17px', paddingTop: '14px'}}> Now Money on your own Hand </div>
          </div>
          <div style={styles.right}>
            <Login onLogin={this.onLogin}/>
          </div>
        </div>
       
       
      
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    height: '100vh'
  },
  left: {
    backgroundColor: 'white',
    flex: 0.7,
    background: 'url(https://cdn.allwallpaper.in/wallpapers/1920x1080/14066/minimalistic-flying-paper-plane-1920x1080-wallpaper.jpg)' ,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '40% 50%',
  
    display: 'flex',
    flexDirection: 'column'

  },
  right: {
    flex: 0.3,
    
  },
  title: {
    
    color: '#ffffff',
    fontWeight: '500',
    fontSize: '50px',
    paddingTop: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: '20px'   

  },
  desc: {
    color: '#ffeeee',
    fontSize: '20px',

  }
}
export default App;
