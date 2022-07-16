import s from './App.module.css';

import {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} from 'redux/contacts';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import Loader from 'components/Loader/Loader';
import ContactList from './ContactList/ContactList';

export const App = () => {
  const { data, error, isFetching, isError } = useFetchContactsQuery();

  const showContactsData = data && !isError;

  const [deleteContact] = useDeleteContactMutation();
  const [addContact, { isSuccess: isAdded }] = useAddContactMutation();

  return (
    <div className={s.app}>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <ContactForm contacts={data} onAdd={addContact} isAdded={isAdded} />

      <h2 className={s.title}>Contacts</h2>
      <Filter />

      {isFetching && <Loader />}
      {isError && <b>{error.status}</b>}
      {showContactsData && (
        <ContactList
          contacts={data}
          onDelete={deleteContact}
          isFetching={isFetching}
        />
      )}
    </div>
  );
};
