import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Form.module.css';

const Form = ({ onAdd, isUnique }) => {
  const [contact, setContact] = useState({
    name: '',
    phone: '',
  });

  const handleChangeContact = e =>
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });

  const handleFormSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: uuidv4(),
      name: contact.name,
      phone: contact.phone,
    };
    if (isUnique(contact.name)) {
      onAdd(newContact);
    }
    resetForm();
  };

  const resetForm = () => {
    setContact({ name: '', phone: '' });
  };

  return (
    <form className={styles.container} onSubmit={handleFormSubmit}>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Enter name"
        value={contact.name}
        onChange={handleChangeContact}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />

      <input
        className={styles.input}
        type="tel"
        name="phone"
        placeholder="Enter number"
        value={contact.phone}
        onChange={handleChangeContact}
        // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
        // title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
        required
      />

      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

export default Form;
