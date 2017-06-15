import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Card,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Table
} from 'reactstrap';

export default class SideBar extends React.Component {
    static contextTypes = {
        router: React.PropTypes.func.isRequired
    };

    componentWillReceiveProps(nextProps) {
        this.state.games = nextProps.app.games;
    }

    constructor(props) {
        super(props);

        this.state = {
            games: props.app.games,
            modal: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleClick(e, nhlGameId) {
        console.log("Clicked: " + nhlGameId);
        e.preventDefault();
        this.toggleModal();
    }

    render() {
        return (
            <div className={"sidebar"}>
            { this.state.games.length > 0 &&
                <div>
                    { this.state.games.map((game) =>
                        <Card onClick={(e) => this.handleClick(e, game.nhl_game_id)}>
                            <Table>
                                <tr>
                                    <td>{game.away_team.name}</td>
                                    <td>{game.away_team.score}</td>
                                </tr>
                                <tr>
                                    <td>{game.home_team.name}</td>
                                    <td>{game.home_team.score}</td>
                                </tr>
                            </Table>
                        </Card>
                    )}
                    <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>This is where data about the game will go?</ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            }
            </div>
        );
    }
}
