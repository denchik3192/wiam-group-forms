import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import formSlice from './slices/formSlice';

export const store = configureStore({
    reducer: {
        forms: formSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 