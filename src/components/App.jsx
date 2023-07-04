// import { useState, useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// const CONTACTS_KEY = 'contacts';

export const App = () => {

  // useEffect(() => {
  //   const loacalContacts = JSON.parse(localStorage.getItem(CONTACTS_KEY));
  //   if (loacalContacts) {
  //     setContacts([...loacalContacts]);

  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
