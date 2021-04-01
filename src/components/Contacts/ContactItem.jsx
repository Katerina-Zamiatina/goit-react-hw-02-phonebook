const ContactItem = ({ contact, onDelete }) => {
  return (
    <li>
      <span>{contact.name} : </span>
      <span>{contact.number}</span>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
};

export default ContactItem;
