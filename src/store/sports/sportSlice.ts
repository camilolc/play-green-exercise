//Redux
import { createSlice } from "@reduxjs/toolkit";
import { Sport } from "../../interfaces/interfaces";
//Interfaces


const result: Sport[] = []
export const sportSlice = createSlice({
  name: "searchById",
  initialState: {  
    result,
    isLoading: false,
  },
  reducers: {
    startLoadingSearch: (state /* action */) => {
      state.isLoading = true;
    },
    setResults: (state, action) => {
      state.isLoading = false;
      state.result = action.payload.result;
    },
  },
});
export const { startLoadingSearch, setResults } = sportSlice.actions;