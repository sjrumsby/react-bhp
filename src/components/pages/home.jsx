import React from 'react';
import TopBar from '../topbar';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <TopBar />
                <div className={ "container" }>
                    <h3>Home</h3>
                </div>
            </div>
        );
    }
}

