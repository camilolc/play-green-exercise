//Redux
import { Dispatch } from "@reduxjs/toolkit";
//Slices

import { setResults, startLoadingSearch } from "./sportSlice";
import { getAllSportsApi } from "../../services/sportServices";

export const getAllSports = () => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadingSearch());

    try {

      const sports = await getAllSportsApi();

      dispatch(
        setResults({
          result: sports.sports,
        })
      );
    } catch (error) {
      console.error('Fetch error:', error);
    }

  };
};