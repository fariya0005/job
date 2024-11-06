// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './authSlice'; // Ensure the correct path to your authSlice
// import jobReducer from './jobSlice';  // The jobSlice with fetching logic
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// }

// const rootReducer = combineReducers({
//   auth:authSlice,
//   job:jobSlice
// });



// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//           serializableCheck: {
//               ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//           },
//       }),
// });
// export default store;



// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import authReducer from './authSlice'; // Ensure the correct path to your authSlice
// import jobReducer from './jobSlice';   // The jobSlice with fetching logic
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
// import companySlice from "./companySlice";

// // Configuring persist for redux-persist
// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// };

// // Root reducer combining multiple slices
// const rootReducer = combineReducers({
//   auth: authReducer, // Using authReducer instead of authSlice
//   job: jobReducer,
//   company:companyReducer,   // Using jobReducer instead of jobSlice
// });

// // Wrapping rootReducer with persistReducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Configuring the Redux store with the persisted reducer and necessary middleware
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// // Exporting store and persistor for use in your app
// export const persistor = persistStore(store);
// export default store;



// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import authReducer from './authSlice';  // Ensure the correct path to your authSlice
// import jobReducer from './jobSlice';    // The jobSlice with fetching logic
// import companyReducer from './companySlice'; // Correctly using companyReducer instead of companySlice
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
// import applicationReducer from './applicationSlice';

// // Configuring persist for redux-persist
// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// };

// // Root reducer combining multiple slices
// const rootReducer = combineReducers({
//   auth: authReducer, // Using authReducer instead of authSlice
//   job: jobReducer,
//   company: companyReducer   // Correctly using companyReducer
//   application: applicationReducer,
// });

// // Wrapping rootReducer with persistReducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Configuring the Redux store with the persisted reducer and necessary middleware
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// // Exporting store and persistor for use in your app
// export const persistor = persistStore(store);
// export default store;




import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Ensure the correct path to your authSlice
import jobReducer from './jobSlice'; // The jobSlice with fetching logic
import companyReducer from './companySlice'; // Correctly using companyReducer
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import applicationReducer from './applicationSlice'; // Importing the application slice

// Configuring persist for redux-persist
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

// Root reducer combining multiple slices
const rootReducer = combineReducers({
  auth: authReducer, // Using authReducer instead of authSlice
  job: jobReducer,
  company: companyReducer, // Correctly using companyReducer
  application: applicationReducer, // Fixed syntax error: added comma
});

// Wrapping rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuring the Redux store with the persisted reducer and necessary middleware
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Exporting store and persistor for use in your app
export const persistor = persistStore(store);
export default store;







