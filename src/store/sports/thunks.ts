//Redux
import { Dispatch } from "@reduxjs/toolkit";
//Slices

import { setResults, startLoadingSearch } from "./sportSlice";

export const getAllSports = () => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadingSearch());
    
    try {
        const response = await fetch('https://www.thesportsdb.com/api/v1/json/3/all_sports.php');
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const {sports} = await response.json();
        console.log(sports)

        dispatch(
            setResults({             
              result: sports,
            })
          );
      } catch (error) {
        console.error('Fetch error:', error);
      }
   
  };
};