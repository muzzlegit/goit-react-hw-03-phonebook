import PropTypes from 'prop-types';
//COMPONENTS
import { ContactItem } from 'components/ContactItem/ContactItem';
//STYLE
import { List, Item } from './ContactList.styled';

export const ContactList = ({ contacts, contacstList, deleteContact }) => {
  return (
    <List>
      {!contacstList.length ? (
        <Item color="black">
          {contacts.length
            ? 'В тебе немає такого контакту'
            : 'Здається, в тебе немає жодного знайомого :('}
        </Item>
      ) : null}
      {contacstList.map((contact, index) => {
        return (
          <ContactItem
            contact={contact}
            index={index}
            deleteContact={deleteContact}
          />
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  contacstList: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
