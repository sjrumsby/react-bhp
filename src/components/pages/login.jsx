import React from 'react';
import LoginForm from '../login-form';

export default class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <div className={ "container" }>
                    <h3>Login</h3>
                    <LoginForm />
                </div>
            </div>
        );
    }
}

