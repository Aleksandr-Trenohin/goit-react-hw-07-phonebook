import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { filterList } from 'redux/filter';

import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  dispatch(filterList(filter));

  return (
    <>
      <label htmlFor="filter" className={s.label}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      ></input>
    </>
  );
};

export default Filter;
