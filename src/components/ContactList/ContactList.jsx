import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, deleteContact } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  const dispatch = useDispatch();

  const contactDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <ul className={css.contact_list}>
        <Contact contacts={filteredContacts} contactDelete={contactDelete} />
      </ul>
    </div>
  );
};
