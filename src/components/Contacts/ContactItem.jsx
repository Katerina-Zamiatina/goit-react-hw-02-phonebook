const ContactItem = ({ contact, onDelete }) => {
  console.log(contact);
  return (
    <li>
      <span>{contact.name} : </span>
      <span>{contact.phone}</span>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
};

export default ContactItem;
