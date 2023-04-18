import PropTypes from 'prop-types';
//ICONS
import { AiOutlineScissor } from 'react-icons/ai';
//STYLE
import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({ contact, index, deleteContact }) => {
  const { id, name, number } = contact;
  return (
    <Item key={id} id={id}>
      <p>
        {index + 1}. {name} - {number}
      </p>
      <Button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      >
        <AiOutlineScissor size="24px" />
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
