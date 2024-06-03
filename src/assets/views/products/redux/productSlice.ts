// productSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

export type ProductState = {
    product: string[];
};

const initialState: ProductState = {
    product: [],
};

const productSlice = createSlice({
    initialState,
    name: 'product',
    reducers: {
        add: (state, action: PayloadAction<string>) => {
        state.product.push(action.payload);
        },
        remove: (state, action: PayloadAction<string>) => {
        state.product = state.product.filter((url) => url !== action.payload);
        },
    },
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['product'],
};

const persistedReducer = persistReducer(persistConfig, productSlice.reducer);

export const { add, remove } = productSlice.actions;

export default persistedReducer;