import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    Nav,
    DropdownItem,
    DropdownToggle, 
    DropdownMenu,
    NavItem,
    NavLink,
    UncontrolledNavDropdown
} from 'reactstrap';

export default class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        const navLiStyle = {
            marginRight: '25px'
        };

        return (
            <div>
                <Navbar color="inverse" inverse toggleable>
                    <div className={"container"}>
                        <Collapse navbar>
                            <Nav navbar>
                                <NavItem style={navLiStyle}>
                                    <NavLink href="/#/">Home</NavLink>
                                </NavItem>
                                <UncontrolledNavDropdown style={navLiStyle}>
                                    <DropdownToggle nav caret>Matches</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem tag={Link} to="/matches">Matches</DropdownItem>
                                        <DropdownItem tag={Link} to="/activations">Activate</DropdownItem>
                                        <DropdownItem tag={Link} to="/substitutions">Substitution</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledNavDropdown>
                                <UncontrolledNavDropdown style={navLiStyle}>
                                    <DropdownToggle nav caret>Standings</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem tag={Link} to="/standings/league">League</DropdownItem>
                                        <DropdownItem tag={Link} to="/standings/east">East</DropdownItem>
                                        <DropdownItem tag={Link} to="/standings/west">West</DropdownItem>
                                        <DropdownItem tag={Link} to="/standings/power-rankings">Power Rankings</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledNavDropdown>
                                <UncontrolledNavDropdown style={navLiStyle}>
                                    <DropdownToggle nav caret>Skaters</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem tag={Link} to="/players/free-agents">Free Agents</DropdownItem>
                                        <DropdownItem tag={Link} to="/players/injuries">Injuries</DropdownItem>
                                        <DropdownItem tag={Link} to="/players/trades">Trades</DropdownItem>
                                        <DropdownItem tag={Link} to="/players/waivers">Waivers</DropdownItem>
                                        <DropdownItem tag={Link} to="/players/draft">Draft</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledNavDropdown>
                                <NavItem style={navLiStyle}>
                                    <NavLink href="/#/login">Login</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}
