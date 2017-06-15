import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={7}>
                        <h3>Home</h3>
                    </Col>
                    <Col sm={5}>
                        <h5>Current Scores</h5>
                    </Col>
                </Row>
            </Container>
        );
    }
}

