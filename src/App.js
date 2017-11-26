import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Navigation from './Login/Navigation';
import Login from './Login';
import { 
  Grid, 
  Image,
  Reveal,
  Transition,
  Button
} from 'semantic-ui-react';
import  {Main} from './Main';
import { Route } from 'react-router-dom';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'


class App extends Component {

  state = {
    logged: true
  }
  
  onClick = () => {
    this.setState({
      logged: !this.state.logged
    })
  }

  onSuccessSubmit = ({username, password}) => {
   
    this.setState({
      logged: true 
    })
    this.props.history.push('/dashboard');
  }

  onLogoutPress = () => {
    this.setState({
      logged: false
    })
  }

  render() {
    console.log(this.props);
    const { logged } = this.state;
    return (
      
        <div style={styles.container}> 
            

            
            
              
        <Login onSuccessSubmit={this.onSuccessSubmit}/>
                
              
           
        </div>
       
       
      
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(-225deg, #B7F8DB 0%, #50A7C2 100%)',
    position: 'relative'
  },
  fullWidth: {
    position: 'absolute',
    top:0,
    left:0,
    width: '100%',
    height: '100%'
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
