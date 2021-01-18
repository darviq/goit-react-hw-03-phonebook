import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
    margin-left: 10px;
`;

const ContactItem = ({contact: {name, number, id}, removeContact}) => {
    return (
        <li>
            {name}: {number}
            <Button type="button" data-id={id} onClick={removeContact}>
                Delete
            </Button>
        </li>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
    removeContact: PropTypes.func,
};

export default ContactItem;
