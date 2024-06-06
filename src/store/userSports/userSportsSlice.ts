//Redux
import { createSlice } from "@reduxjs/toolkit";
import { SportUser } from "../../interfaces/interfaces";
//Interfaces

const sports: SportUser[] = [];

export const userSports = createSlice({
  name: "searchById",
  initialState: {
    isSaving: false,
    messageSaved: '',
    sports
  },
  reducers: {
    savingNewSport: (state) => {
      state.isSaving = true;
    },
    addNewSport: (state, action) => {
      state.sports.push(action.payload);
      state.isSaving = false;
    },
    updateSport: (state, action) => { // payload: note
      state.isSaving = false;
      state.sports = state.sports.map(sport => {

        if (sport.id === action.payload.id) {
          return action.payload;
        }

        return sport;
      });

      state.messageSaved = `${action.payload.title}, correctly updated`;
    },
    setSports: (state, action) => {
      state.sports = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
  },
});
export const { addNewSport, savingNewSport, setSports,setSaving, updateSport } = userSports.actions;