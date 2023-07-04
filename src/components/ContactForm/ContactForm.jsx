import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts, addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const formInfo = { name, number };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isContactIncuded = contacts.some(({ name }) => {
      return name === formInfo.name;
    });

    if (isContactIncuded) {
      alert(`${formInfo.name} is already in contacts`);
    } else {
      dispatch(addContact(formInfo));
    }

    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.contact_form}>
        <label className={css.form_label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
            className={css.form_input}
          />
        </label>
        <label className={css.form_label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
            className={css.form_input}
          />
        </label>
        <button type="submit" className={css.form_button}>
          Add contact
        </button>
      </form>
    </div>
  );
};
