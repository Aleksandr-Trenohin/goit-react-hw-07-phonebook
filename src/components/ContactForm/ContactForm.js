import { PropTypes } from 'prop-types';

import { useState } from 'react';

import s from './ContactForm.module.css';

import { Notify } from 'notiflix';

const ContactForm = ({ contacts, onAdd, isAdded }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const { data, error, isFetching, isError } = useGetContactByNameQuery(name, {
  //   skip: name === '',
  //   refetchOnReconnect: true,
  // });
  // console.log(isAdded);

  const onAddNewContact = evt => {
    evt.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      setName('');
      setNumber('');
      return Notify.warning(`${name} is already in contacts list!`);
    } else {
      onAdd(name, number);
      if (isAdded) {
        Notify.success(`${name}'s contact added successfully`);
      }
    }

    setName('');
    setNumber('');
  };

  return (
    // ? autoComplete="off"
    <form onSubmit={onAddNewContact} className={s.form}>
      <label htmlFor="username" className={s.label}>
        Name
      </label>
      <input
        className={s.input}
        type="text"
        name="name"
        id="username"
        value={name}
        onChange={e => setName(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="usernumber" className={s.label}>
        Number
      </label>
      <input
        className={s.input}
        type="tel"
        name="number"
        id="usernumber"
        value={number}
        onChange={e => setNumber(e.target.value)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
  onAdd: PropTypes.func.isRequired,
  isAdded: PropTypes.bool.isRequired,
};

export default ContactForm;
