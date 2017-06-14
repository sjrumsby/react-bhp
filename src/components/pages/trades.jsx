import React from 'react';
import TopBar from '../topbar';

export default class TradesPage extends React.Component {
    render() {
        return (
            <div>
                <TopBar />
                <div className={ "container" }>
                    <h3>Trades</h3>
                </div>
            </div>
        );
    }
}

