import React from 'react';
import TopBar from '../topbar';

export default class ActivationsPage extends React.Component {
    render() {
        return (
            <div>
                <TopBar />
                <div className={ "container" }>
                    <h3>Activations</h3>
                </div>
            </div>
        );
    }
}

