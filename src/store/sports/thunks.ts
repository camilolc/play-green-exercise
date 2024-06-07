//Redux
import { Dispatch } from "@reduxjs/toolkit";
//Slices

import { setResults, startLoadingSearch } from "./sportSlice";

export const getAllSports = () => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadingSearch());   
    
    try {
        const response = await fetch('https://dff6kz4nmb.execute-api.us-east-1.amazonaws.com/development/test-front');
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const {sports} = await response.json();      

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