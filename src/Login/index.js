import React, { Component } from 'react';
import { Button, Form, Checkbox, Header, Label, Transition } from 'semantic-ui-react';
import { Message, Popup, Progress } from 'semantic-ui-react';
import {
    Segment,
    TransitionablePortal
} from 'semantic-ui-react';


export default class Login extends Component {
    state = {
        username : '',
        password: '',
        submittedUsername: '',
        submittedPassword: '',
        visible: false,
        open: false,
        errorMessage: '',
        loading: false,
        disabled: false
    }

    onChange = (e, {
        name,
        value
    }) => {
        
        this.setState({[name]: value, open: false})
    }

    onSubmit = () => {
        const { username, password } = this.state;
        const { onSuccessSubmit } = this.props;

        if(username.trim() && password.trim()) {
            setTimeout(() => {
                this.setState({loading: false, disabled: false});
                let _username = username.trim()
                let _password = password.trim()
                onSuccessSubmit && onSuccessSubmit({username: _username, password: _password})
            }, 1000);
            this.setState({
                submittedUsername: username,
                submittedPassword: password,
                loading: true,
                disabled: true
                
            })
            
            
            return
        }

    let _fields = []
    username.trim() || _fields.push('Username')
    password.trim() || _fields.push('Password')
    let errorMessage = `Please enter the ${_fields.join(' and ')}.`
    this.setState({
        open: true,
        errorMessage: errorMessage,
        disabled: false,
        loading: false
    })

        
       

    
    }
    handleOpen = () => this.setState({open: true})
    handleClose = () => this.setState({open: false })

    render() {
        console.log(this.state);
        const { username, password, visible, open, errorMessage, disabled, loading } = this.state;
        return (
            <div style={styles.container}>
                
                <TransitionablePortal
                    closeOnTriggerClick
                    onOpen={this.handleOpen}
                    onClose={this.handleClose}
                    openOnTriggerClick
                    open={open}
                >

                    <Segment style={{right : '3%', position: 'fixed', top: '2%', zIndex: 1000, padding: '15px', borderRadius: '10px' }}>
                    <Header>Sorry</Header>
                    <p>{errorMessage}</p>
                    
                    </Segment>
                </TransitionablePortal>
                
                <Form onSubmit={this.onSubmit} style={styles.formContainer}>
                <div style={{textAlign: 'center', marginBottom : '20px'}}>
                    <Header as='h3'>Login to Neru</Header>
                </div>
                    <Form.Field  required disabled={disabled}>
                        <label>Username </label>
                        <Popup trigger={ <Form.Input icon='user' placeholder='Username' name='username' value={username} onChange={this.onChange} />}
                        position='left center'
                        content='Please enter the username'
                        hoverable
                        on={'hover'}
                        />
                        
                       
                        
                    </Form.Field>
                    <Form.Field required disabled={disabled}>
                        <label>Password</label>
                        <Popup trigger={ <Form.Input icon='lock' placeholder='Password' type='password' name='password' value={password} onChange={this.onChange}/> }
                        position='left center'
                        content='Please enter the password'
                        hoverable
                        on={'hover'}
                        />
                        
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    {/* <div style={styles.buttonContainer} > */}
                     <Button type='submit' primary disabled={disabled} loading={loading} style={{width: '100%'}} size='fullscreen'>Login</Button>
                    {/* </div> */}
                </Form>
                <div style={{height: '100px', backgroundColor: 'red' ,display: 'flex'}}>
                  
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        
        height: '100vh',
        flexDirection: 'column',

    },
    error: {
        display: 'flex',
        position: 'absolute',
        height: '30px'
    },
    buttonContainer : {
        display: 'flex',
        bacgkroundColor: 'black',
        flex: 1,
        
        width: '100%'
        
    },
    formContainer: {
        backgroundColor: 'white',
        padding: '50px 40px',
        borderRadius: '10px',
        boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.1)'
    }
}