import React from 'react';
import TopBar from '../topbar';

export default class StandingsPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        var league = this.props.conference

        if (["League", "East", "West"].indexOf(league) === -1) {
            league = "League";
        }

        return (
            <div>
                <TopBar />
                <div className={ "container" }>
                    <h3>{ league } Standings</h3>
                </div>
            </div>
        );
    }
}

