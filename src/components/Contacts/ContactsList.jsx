import ContactItem from './ContactItem';

const Contacts = ({ contacts, onDelete }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default Contacts;
