import { Component } from 'react';
//COMPONENTS
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
//STYLES
import { Section, Container, Content, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    ],
    filter: '',
  };

  addContact = contact => {
    if (this.checkForDuplicate(contact.name)) {
      alert('В тебе вже є такий контакт!');
      return;
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, contact],
    }));
  };
  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  checkForDuplicate = name => {
    const normalizedName = name.toLowerCase();
    return this.state.contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) this.setState({ contacts: JSON.parse(contacts) });
  }

  componentDidUpdate(_, prev) {
    const contacts = this.state.contacts;
    if (prev.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContact = this.state.contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });

    return (
      <Section>
        <Container>
          <Content>
            <Title> Книга контактів</Title>
            <ContactForm addContact={this.addContact} />
            <Filter
              filter={this.state.filter}
              onFilterChange={this.onFilterChange}
            />
            <ContactList
              contacts={this.state.contacts}
              contacstList={visibleContact}
              deleteContact={this.deleteContact}
            />
          </Content>
        </Container>
      </Section>
    );
  }
}
