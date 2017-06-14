import React from 'react';
import TopBar from '../topbar';

export default class InjuriesPage extends React.Component {
    render() {
        return (
            <div>
                <TopBar />
                <div className={ "container" }>
                    <h3>Injuries</h3>
                </div>
            </div>
        );
    }
}

