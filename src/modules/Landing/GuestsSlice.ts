import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Guest = {
  value: string;
  label: string;
  count: number;
};

interface GuestSliceState {
  guests: Guest[];
}

const initialState: GuestSliceState = {
  guests: [
    { value: 'adults', label: 'Взрослые', count: 0 },
    { value: 'children', label: 'Дети', count: 0 },
    { value: 'newborn', label: 'Младенцы', count: 0 },
  ],
};

const guestSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {
    addGuest(state, action: PayloadAction<Guest>) {
      const findItem = state.guests.find((guest) => guest.value === action.payload.value);
      if (findItem) {
        findItem.count++;
      } else {
        state.guests.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    minusGuest(state, action: PayloadAction<string>) {
      const findItem = state.guests.find((guest) => guest.value === action.payload);
      if (findItem && findItem.count > 1) {
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

export const { addGuest, minusGuest, clearAllGuests } = guestSlice.actions;

export default guestSlice.reducer;