import React, {Component} from "react";
import {v4 as uuidv4} from "uuid";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";

export default class Phonebook extends Component {
    state = {
        contacts: [
            {id: uuidv4(), name: "Rosie Simpson", number: "459-12-56"},
            {id: uuidv4(), name: "Hermione Kline", number: "443-89-12"},
            {id: uuidv4(), name: "Eden Clements", number: "645-17-79"},
            {id: uuidv4(), name: "Annie Copeland", number: "227-91-26"},
        ],
        filter: "",
    };

    addFilter = e => {
        this.setState({
            filter: e.target.value,
        });
    };

    addContact = ({name, number}) => {
        if (this.state.contacts.find(contact => contact.name === name)) {
            alert(`${name} is already in contacts`);
        } else {
            this.setState(prevState => ({
                contacts: [
                    ...prevState.contacts,
                    {
                        name: name,
                        number: number,
                        id: uuidv4(),
                    },
                ],
            }));
        }
    };

    removeContact = e => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts.filter(contact => contact.id !== e.target.dataset.id)],
        }));
    };

    render() {
        return (
            <>
                <h2>Phonebook</h2>
                <ContactForm addContact={this.addContact} />
                <ContactList state={this.state} addFilter={this.addFilter} removeContact={this.removeContact} />
            </>
        );
    }
}
