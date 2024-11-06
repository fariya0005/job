// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux'; // Import Provider from react-redux
// import App from './App';
// import store from './redux/store'; // Corrected import path for your Redux store
// import './index.css'; // Your global CSS file
// import { Toaster } from './components/ui/sonner.jsx'; // Import Toaster from your toast component
// import { persistStore } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';

// // Persistor for Redux persistence
// const persistor = persistStore(store);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//         <Toaster />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );




import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from './components/ui/sonner.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Toaster />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)