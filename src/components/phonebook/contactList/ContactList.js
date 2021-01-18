import ContactItem from "./contactItem/ContactItem";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
    display: block;
`;

const ContactList = ({state: {contacts, filter}, addFilter, removeContact}) => {
    return (
        <>
            {contacts.length > 0 && (
                <>
                    <h2>Contacts</h2>
                    <label>
                        {" "}
                        Find contacts by name
                        <Input type="text" value={filter} name="filter" onChange={addFilter} />
                    </label>
                    <ul>
                        {filter.length > 0
                            ? contacts
                                  .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
                                  .map(contact => <ContactItem key={contact.id} contact={contact} removeContact={removeContact} />)
                            : contacts.map(contact => <ContactItem key={contact.id} contact={contact} removeContact={removeContact} />)}
                    </ul>
                </>
            )}
        </>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    filter: PropTypes.string,
    addFilter: PropTypes.func,
    removeContact: PropTypes.func,
};

export default ContactList;
