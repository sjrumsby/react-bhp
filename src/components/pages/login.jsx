import React from 'react';
import TopBar from '../topbar';
import LoginForm from '../login-form';

export default class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <TopBar />
                <div className={ "container" }>
                    <h3>Login</h3>
                    <LoginForm />
                </div>
            </div>
        );
    }
}

