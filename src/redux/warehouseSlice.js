import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const warehouseSlice = createSlice({
  name: 'warehouses',
  initialState,
  reducers: {
    setWarehouses: (state, action) => {
      return action.payload;
    },
    updateWarehouse: (state, action) => {
      const { id, name, city, cluster, space_available, is_live } =
        action.payload;
      const index = state.findIndex((warehouse) => warehouse.id === id);
      if (index !== -1) {
        state[index] = {
          ...state[index],
          name,
          city,
          cluster,
          space_available,
          is_live,
        };
      }
    },
  },
});

export const { setWarehouses, updateWarehouse } = warehouseSlice.actions;

export default warehouseSlice.reducer;
