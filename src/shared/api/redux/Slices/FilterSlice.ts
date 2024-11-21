import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type Guest = {
  value: string;
  label: string;
  count: number;
};

type FilterSliceState = {
  guests: Guest[];
};

const initialState: FilterSliceState = {
  guests: [
    { value: 'adults', label: 'Взрослые', count: 0 },
    { value: 'children', label: 'Дети', count: 0 },
    { value: 'newborn', label: 'Младенцы', count: 0 },
  ],
};

const filterSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {
    addGuest(state, action: PayloadAction<Guest>) {
      const findItem = state.guests.find((guest) => guest.value === action.payload.value);
      if (findItem) {
        findItem.count++;
      }
    },
    minusGuest(state, action: PayloadAction<Guest>) {
      const findItem = state.guests.find((guest) => guest.value === action.payload.value);
      if (findItem && findItem.count > 0) {
        findItem.count--;
      }
    },
    clearAllGuests(state) {
      state.guests.forEach((guest) => {
        guest.count = 0;
      });
    },
  },
});

export const selectGuests = (state: RootState) => state.filter;
export const { addGuest, minusGuest, clearAllGuests } = filterSlice.actions;

export default filterSlice.reducer;
