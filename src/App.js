import React, { Component } from 'react';
import shortid from 'shortid';

import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';


class App extends Component {
state = {
  contacts: [
      { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
      { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
      { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
    ],
  filter: '',
};

handleAddContact = ({ name, number }) => {
const { contacts } = this.state;
// nameInputId = shortid.generate();
const contact = {
  id: shortid.generate(),
  name,
  number,
};

if (
  contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase(),
  )
) {
  alert('Contact is already exists!');
} else if (!name || !number) {
  alert('The field cannot be empty!');
} else
  this.setState(({ contacts }) => ({
    contacts: [contact, ...contacts],
  }));
};

handleChangeFilter = e => {
  this.setState({ filter: e.currentTarget.value });
};

getVisibleContacts = () => {
  const { contacts, filter } = this.state;
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

handleDeleteContact = id =>
this.setState(({ contacts }) => ({
  contacts: contacts.filter(contact => contact.id !== id),
}));


render() {
  const visibleContacts = this.getVisibleContacts();
  const { filter } = this.state;
    
  return (
    <div>
      <Container>
        <h1>Phonebook</h1>
          <ContactForm onSubmit={this.handleAddContact}/>
      </Container>

      <Container>
        <h2>Contacts</h2>
          <Filter 
          filter={filter} 
          onChange={this.handleChangeFilter} 
          />
          <ContactList 
          contacts={visibleContacts} 
          onDeleteContact={this.handleDeleteContact}
          />
      </Container>
    </div>
  );
  }
}

export default App;
