import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
//ICONS
import { BsPersonPlus } from 'react-icons/bs';
//STYLES
import { Form, Label, Input, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    this.setState({ [key]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addContact({ id: nanoid(), name, number });
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Label>
          Ім'я
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="...запиши ім'я"
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </Label>
        <Label>
          Номер
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="...запиши номер"
            value={this.state.number}
            onChange={this.onInputChange}
          />
        </Label>
        <Button type="submit">
          <BsPersonPlus size="30px" />
        </Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
