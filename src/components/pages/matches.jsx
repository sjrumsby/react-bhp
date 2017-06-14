import React from 'react';
import TopBar from '../topbar';

export default class MatchesPage extends React.Component {
    render() {
        return (
            <div>
                <TopBar />
                <div className={ "container" }>
                    <h3>Matches</h3>
                </div>
            </div>
        );
    }
}

