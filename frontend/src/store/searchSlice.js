import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    items: [],
    searchResults: [],
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      // console.log(action.payload);
    },
    handleSearch: (state, action) => {
      const lowerCaseSearchTerm = action.payload.toLowerCase();

      state.searchResults = state.items.filter((item) => {
        return (
          item.id.toLowerCase().includes(lowerCaseSearchTerm) ||
          item.company.toLowerCase().includes(lowerCaseSearchTerm) ||
          item.item_name.toLowerCase().includes(lowerCaseSearchTerm) ||
          item.original_price.toString().includes(lowerCaseSearchTerm) ||
          item.current_price.toString().includes(lowerCaseSearchTerm) ||
          item.discount_percentage.toString().includes(lowerCaseSearchTerm) ||
          (item.return_period
            ? item.return_period.toString().includes(lowerCaseSearchTerm)
            : false) ||
          (item.delivery_date
            ? item.delivery_date.toLowerCase().includes(lowerCaseSearchTerm)
            : false) ||
          item.rating.stars.toString().includes(lowerCaseSearchTerm) ||
          item.rating.count.toString().includes(lowerCaseSearchTerm)
        );
      });
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
