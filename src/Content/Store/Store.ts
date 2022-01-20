import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from '../Slice/InfoSlice';

const store = configureStore({
  reducer: {
    formData: formDataReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
