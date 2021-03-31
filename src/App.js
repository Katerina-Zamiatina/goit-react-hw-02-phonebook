import { useState } from 'react';
import './App.css';
import Section from './components/Section';
import Form from './components/Form';
import ContactsList from './components/Contacts';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = newContact =>
    setContacts(prevState => [...prevState, newContact]);

  const handleCheckUnique = name => {
    const existingContact = !!contacts.find(contact => contact.name === name);
    existingContact && alert(`${name} is already in contacts`);
    return !existingContact;
  };

  const handleDeleteContact = id => {
    setContacts(contacts => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  return (
    <div className="App">
      <Section title="Phonebook">
        <Form onAdd={handleAddContact} isUnique={handleCheckUnique} />
      </Section>
      <Section title="Contacts">
        <ContactsList contacts={contacts} onDelete={handleDeleteContact} />
      </Section>
    </div>
  );
};

export default App;
