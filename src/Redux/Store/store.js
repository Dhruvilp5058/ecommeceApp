
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import counterReducer from '../Slice/counterSlice';
import orderReducer from '../Slice/orderSaveSlice';
import demoReducer from '../Slice/demoSlice'
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist:['counter']
};

const reducer = combineReducers({
    counter: counterReducer,
    order: orderReducer,
    demo:   demoReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer );

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
});
export const persistor = persistStore(store);  

