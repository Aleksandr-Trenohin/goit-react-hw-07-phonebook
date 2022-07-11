import { createReducer } from '@reduxjs/toolkit';

import { addContact, removeContact, filterList } from './actions';

const initialState = {
  items: [],
  filter: '',
};

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      const { id, name, number } = action.payload;
      state.items.push({ id, name, number });
    })
    .addCase(removeContact, (state, { payload }) => {
      const index = state.items.findIndex(item => item.id === payload);
      state.items.splice(index, 1);
    })
    .addCase(filterList, (state, action) => {
      state.filter = action.payload;
    });
});

export default reducer;
