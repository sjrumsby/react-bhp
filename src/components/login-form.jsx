import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from "axios";

export default class LoginForm extends React.Component {
    static contextTypes = {
        router: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
			username: "",
			password: ""
        };

		this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
    }

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    submit(e) {
        e.preventDefault();

        var data = {
            username: this.state.username,
            password: this.state.password
        };

        axios({
            method: 'post',
            url: '/api/api-token-auth/',
            data: data,
        }).then(response => {
            var bhpJwt = response.data.token;
            localStorage.setItem("bhp-jwt", bhpJwt);
            this.context.router.history.push('/');
        })
        .catch(error => {
            console.log(error.message);
        });
    }

    render() {
        return (
            <Form onSubmit={(e) => this.submit(e)}>
                <FormGroup row>
					<Label for="username" sm={2}>Username</Label>
                    <Col sm={3}>
                        <Input id="username" name="username" type="text" onChange={this.handleInputChange}></Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
					<Label for="password" sm={2}>Password</Label>
                    <Col sm={3}>
                        <Input id="password" name="password" type="password" onChange={this.handleInputChange}></Input>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 3, offset: 2 }}>
                        <Button>Submit</Button>
                    </Col>
                </FormGroup>
			</Form>
        )
    }
}
