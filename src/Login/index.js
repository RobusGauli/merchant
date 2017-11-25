import React, { Component } from 'react';
import { Button, Form, Checkbox, Header, Label, Transition } from 'semantic-ui-react';


export default class Login extends Component {
    state = {
        username : '',
        password: '',
        submittedUsername: '',
        submittedPassword: '',
        visible: false
    }

    onChange = (e, {
        name,
        value
    }) => {
        
        this.setState({[name]: value})
    }

    onSubmit = () => {
        const { username, password } = this.state;
        
        this.setState({
            submittedUsername: username,
            submittedPassword: password,
            visible: !this.state.visible
        })

    
    }

    render() {
        console.log(this.state);
        const { username, password, visible } = this.state;
        return (
            <div style={styles.container}>
                
                <Form onSubmit={this.onSubmit} >
                <Header as='h3'>Login to Neru</Header>
                    <Form.Field  required error>
                        <label>Username </label>
                        <Transition visible={visible} animation='scale' duration={300}>
                            <Label basic  pointing='below'> Please enter the username.</Label>
                        </Transition>
                        <Form.Input icon='search' placeholder='Username' name='username' value={username} onChange={this.onChange} />
                        
                    </Form.Field>
                    <Form.Field required>
                        <label>Password</label>
                        <Form.Input placeholder='Password' type='password' name='password' value={password} onChange={this.onChange}/>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>Login</Button>
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
        backgroundColor: '#eeffee',
        height: '100vh',
        flexDirection: 'column'
    }
}