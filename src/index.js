import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import { HashRouter, Route, Switch } from 'react-router-dom';

import HomePage from './components/pages/home';
import LoginPage from './components/pages/login';
import MatchesPage from './components/pages/matches';
import ActivationsPage from './components/pages/activations';
import SubstitutionsPage from './components/pages/substitutions';
import StandingsPage from './components/pages/standings';
import PowerRankingsPage from './components/pages/power-rankings';
import FreeAgentsPage from './components/pages/free-agents';
import InjuriesPage from './components/pages/injuries';
import TradesPage from './components/pages/trades';
import WaiversPage from './components/pages/waivers';
import DraftPage from './components/pages/draft';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route path="/matches" component={ MatchesPage } />
            <Route path="/activations" component={ ActivationsPage } />
            <Route path="/substitutions" component={ SubstitutionsPage } />
            <Route path="/standings/league" component={ (props) => <StandingsPage conference="League" /> } />
            <Route path="/standings/east" component={ (props) => <StandingsPage conference="East" /> } />
            <Route path="/standings/west" component={ (props) => <StandingsPage conference="West" /> } />
            <Route path="/standings/power-rankings" component={ PowerRankingsPage } />
            <Route path="/players/free-agents" component={ FreeAgentsPage } />
            <Route path="/players/injuries" component={ InjuriesPage } />
            <Route path="/players/trades" component={ TradesPage } />
            <Route path="/players/waivers" component={ WaiversPage } />
            <Route path="/players/draft" component={ DraftPage } />
            <Route path="/login" component={ LoginPage } />
        </Switch>
    </HashRouter>,
	document.getElementById('root')
);
