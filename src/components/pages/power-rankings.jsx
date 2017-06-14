import React from 'react';
import TopBar from '../topbar';

export default class PowerRankingsPage extends React.Component {
    render() {
        return (
            <div>
                <TopBar />
                <div className={ "container" }>
                    <h3>Power Rankings</h3>
                </div>
            </div>
        );
    }
}

