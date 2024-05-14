import React from 'react';
import ReactDOM from 'react-dom'; // Correct import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import favouriteReducer from './features/favouriteSlice.js';
import cartReducer from './features/cartSlice.js';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { getTotals } from './features/cartSlice.js';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourite: favouriteReducer,
  },
});

// Dispatch action after creating the store
store.dispatch(getTotals());

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   
      <Provider store={store}>
        <App />
      </Provider>
    
  </React.StrictMode>
);

reportWebVitals();
