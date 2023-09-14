// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import warehousesReducer from './redux/warehouseSlice'; 

import App from './App'; 

const store = configureStore({
  reducer: {
    warehouses: warehousesReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
