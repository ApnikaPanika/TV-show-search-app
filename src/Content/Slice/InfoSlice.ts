import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  showName: '',
};

export const formData = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    getAllData: (state, action:PayloadAction) => (
      action.payload
    ),

  },

});

export const { getAllData } = formData.actions;

export default formData.reducer;
