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
    static contextTypes = {
        router: React.PropTypes.func.isRequired
    };

    componentWillReceiveProps(nextProps) {
        this.state.teams = nextProps.app.teams;
    }

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            dropdownOpen: false,
            isAuthenticated: false,
            teams: props.app.teams
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    handleLogout(e) {
        localStorage.removeItem("bhp-jwt");
        this.context.router.history.push('/');
    }


    render() {
        const navLiStyle = {
            marginRight: '25px'
        };

        const navbarMarginStyle = {
            marginBottom: '1em'
        }

        var bhpJwt = localStorage.getItem("bhp-jwt");

        return (
            <div style={navbarMarginStyle}>
                <Navbar color="inverse" inverse toggleable>
                    <div className={"container"}>
                        <Collapse navbar>
                            <Nav navbar>
                                <NavItem style={navLiStyle}>
                                    <NavLink tag={Link} to="/">Home</NavLink>
                                </NavItem>
                                { bhpJwt &&
                                    <UncontrolledNavDropdown style={navLiStyle}>
                                        <DropdownToggle nav caret>Matches</DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem tag={Link} to="/matches">Matches</DropdownItem>
                                            <DropdownItem tag={Link} to="/activations">Activate</DropdownItem>
                                            <DropdownItem tag={Link} to="/substitutions">Substitution</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledNavDropdown>
                                }
                                { bhpJwt &&
                                    <UncontrolledNavDropdown style={navLiStyle}>
                                        <DropdownToggle nav caret>Standings</DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem tag={Link} to="/standings/league">League</DropdownItem>
                                            <DropdownItem tag={Link} to="/standings/east">East</DropdownItem>
                                            <DropdownItem tag={Link} to="/standings/west">West</DropdownItem>
                                            <DropdownItem tag={Link} to="/standings/power-rankings">Power Rankings</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledNavDropdown>
                                }
                                { bhpJwt && this.state.teams.length > 0 &&
                                    <UncontrolledNavDropdown style={navLiStyle}>
                                        <DropdownToggle nav caret>Teams</DropdownToggle>
                                        <DropdownMenu>
                                        { this.state.teams.map((name) =>
                                            <DropdownItem>{name}</DropdownItem>
                                        )}
                                        </DropdownMenu>
                                    </UncontrolledNavDropdown>

                                }
                                <UncontrolledNavDropdown style={navLiStyle}>
                                    <DropdownToggle nav caret>Skaters</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem tag={Link} to="/players/free-agents">Free Agents</DropdownItem>
                                        <DropdownItem tag={Link} to="/players/injuries">Injuries</DropdownItem>
                                        { bhpJwt &&
                                            <DropdownItem tag={Link} to="/players/trades">Trades</DropdownItem>
                                        }
                                        { bhpJwt &&
                                            <DropdownItem tag={Link} to="/players/waivers">Waivers</DropdownItem>
                                        }
                                        { bhpJwt &&
                                            <DropdownItem tag={Link} to="/players/draft">Draft</DropdownItem>
                                        }
                                    </DropdownMenu>
                                </UncontrolledNavDropdown>
                                { !bhpJwt &&
                                    <NavItem style={navLiStyle}>
                                        <NavLink tag={Link} to="/login">Login</NavLink>
                                    </NavItem>
                                }
                                { bhpJwt &&
                                    <NavItem style={navLiStyle}>
                                        <NavLink tag={Link} to="/profile">Profile</NavLink>
                                    </NavItem>
                                }
                                { bhpJwt &&
                                    <NavItem style={navLiStyle} right>
                                        <NavLink tag={Link} to="/" onClick={(e) => this.handleLogout(e)}>Logout</NavLink>
                                    </NavItem>
                                }

                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}
