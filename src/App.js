import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import warehousesReducer from './redux/warehouseSlice' 
import WarehouseList from './WarehouseList';
import WarehouseDetails from './WarehouseDetails';
import './style.css';

const store = configureStore({
  reducer: {
    warehouses: warehousesReducer, 
  },
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<WarehouseList />} />
          <Route path="/warehouse/:id" element={<WarehouseDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
