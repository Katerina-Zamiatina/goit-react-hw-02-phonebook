import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

const ContactItem = ({ contact, onDelete }) => {
  return (
    <li>
      <span>{contact.name} : </span>
      <span>{contact.number}</span>
      <button className={styles.button} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ContactItem;
