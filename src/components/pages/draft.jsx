import React from 'react';
import TopBar from '../topbar';

export default class DraftPage extends React.Component {
    render() {
        return (
            <div>
                <TopBar />
                <div className={ "container" }>
                    <h3>Draft</h3>
                </div>
            </div>
        );
    }
}

