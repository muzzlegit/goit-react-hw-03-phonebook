import PropTypes from 'prop-types';
//COMPONENTS
import { ContactItem } from 'components/ContactItem/ContactItem';
//STYLE
import { List, Item } from './ContactList.styled';

export const ContactList = ({ isContacts, contacstList, deleteContact }) => {
  return (
    <List>
      {!contacstList.length ? (
        <Item color="black">
          {isContacts
            ? 'В тебе немає такого контакту'
            : 'Здається, в тебе немає жодного знайомого :('}
        </Item>
      ) : null}
      {contacstList.map((contact, index) => {
        return (
          <ContactItem
            key={index}
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
  isContacts: PropTypes.number.isRequired,
  contacstList: PropTypes.arrayOf(PropTypes.object.isRequired),
  deleteContact: PropTypes.func.isRequired,
};
