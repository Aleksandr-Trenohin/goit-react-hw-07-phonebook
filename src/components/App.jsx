import s from './App.module.css';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
// import useLocalStorage from './hooks/useLocalStorage';

export const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);

  // const deleteContact = id => {
  //   const remainigContacts = contacts.filter(contact => contact.id !== id);
  //   setContacts(remainigContacts);
  // };

  return (
    <div className={s.app}>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <ContactForm />

      <h2 className={s.title}>Contacts</h2>
      <Filter />
      {/* <ContactList delContact={deleteContact}/> */}
      <ContactList />
    </div>
  );
};
