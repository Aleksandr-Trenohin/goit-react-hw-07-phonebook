import { PropTypes } from 'prop-types';

import { useSelector } from 'react-redux';

import s from './ContactList.module.css';

import { getFilterName } from 'redux/filter';

const ContactList = ({ contacts, onDelete }) => {
  const filter = useSelector(getFilterName);

  return (
    <>
      <ul>
        {contacts.map(
          ({ id, name, phone }) =>
            name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 && (
              <li key={id} className={s.list}>
                <span className={s.name}>{name}</span>: {phone}
                <button
                  type="button"
                  onClick={() => onDelete(id)}
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.number.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
