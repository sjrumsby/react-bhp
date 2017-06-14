import React from 'react';
import TopBar from '../topbar';

export default class FreeAgentsPage extends React.Component {
    render() {
        return (
            <div>
                <TopBar />
                <div className={ "container" }>
                    <h3>Free Agents</h3>
                </div>
            </div>
        );
    }
}

