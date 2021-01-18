import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Form = styled.form`
    width: 300px;
    padding: 10px 0 15px 20px;
    border: 2px solid black;

    label,
    input {
        display: block;
    }
`;

export default class ContactForm extends Component {
    static propTypes = {
        addContact: PropTypes.func,
    };

    state = {
        name: "",
        number: "",
    };

    inputHandler = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        });
    };

    submitHandler = e => {
        e.preventDefault();
        this.props.addContact({...this.state});
    };

    render() {
        const {name, number} = this.state;

        return (
            <Form onSubmit={this.submitHandler}>
                <label>
                    Name
                    <input type="text" value={name} name="name" onChange={this.inputHandler} />
                </label>
                <label>
                    Number
                    <input type="text" value={number} name="number" onChange={this.inputHandler} />
                </label>
                <button type="submit">Add contact</button>
            </Form>
        );
    }
}
