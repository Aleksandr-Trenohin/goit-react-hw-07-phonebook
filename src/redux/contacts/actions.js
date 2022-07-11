import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('addContact');
export const removeContact = createAction('removeContact');

export const filterList = createAction('filterList');
