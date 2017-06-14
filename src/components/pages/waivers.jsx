import React from 'react';
import TopBar from '../topbar';

export default class WaiversPage extends React.Component {
    render() {
        return (
            <div>
                <TopBar />
                <div className={ "container" }>
                    <h3>Waivers</h3>
                </div>
            </div>
        );
    }
}

