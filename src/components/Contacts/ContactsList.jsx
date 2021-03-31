import ContactItem from './ContactItem';

const Contacts = ({ contacts, onDelete }) => {
  const message = 'Nothing was added';
  return (
    <ul>
      {contacts.map(contact =>
        contact !== [] ? (
          <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
        ) : (
          message
        ),
      )}
    </ul>
  );
};

export default Contacts;

// const Contacts = ({ contacts, onDelete }) => {
//   // const message = 'Nothing was added';
//   return (
//     <ul>
//       {contacts.map(contact =>
//         // contact.length === 0 ? (
//         //   <ContactItem key={contact.id} contact={contact} onDelete={onDelete}/>
//         // ) : (
//         //   message
//         // ),
//       )}
//     </ul>
//   );
// };
