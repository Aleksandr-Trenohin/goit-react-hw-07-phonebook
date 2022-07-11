import { useDispatch, useSelector } from 'react-redux';

import s from './ContactList.module.css';

import { removeContact } from 'redux/contacts/actions';
import { getContactsList, getFilterName } from 'redux/contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContactsList);
  const filter = useSelector(getFilterName);

  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <>
      <ul>
        {contacts.map(
          ({ id, name, number }) =>
            name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 && (
              <li key={id} className={s.list}>
                <span className={s.name}>{name}</span>: {number}
                <button
                  type="button"
                  onClick={() => onRemoveContact(id)}
                  title={name}
                  className={s.btn}
                >
                  Delete
                </button>
              </li>
            )
        )}
      </ul>
    </>
  );
};

export default ContactList;
