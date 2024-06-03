// import { configureStore } from '@reduxjs/toolkit';
// import productReducer from '../views/products/redux/productSlice';

// export const store = configureStore({
//     reducer: {
//         product: productReducer,
//     },
// });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// store.ts

import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import persistedReducer from '../views/products/redux/productSlice'; 

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };