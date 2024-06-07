//Redux
import { Dispatch } from "@reduxjs/toolkit";
//Slices

import { setResults, startLoadingSearch } from "./sportSlice";
import { Sport } from "../../interfaces/interfaces";

export const getAllSports = () => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadingSearch());

    const imges = ["https://www.thesportsdb.com/images/sports/soccer.jpg","https://www.thesportsdb.com/images/sports/bw/soccer.jpg","https://image.api.playstation.com/vulcan/ap/rnd/202009/2814/2SuRSOLGDyuN7yOnDspiCkLu.png"]
    
    try {
        const response = await fetch('https://www.thesportsdb.com/api/v1/json/3/all_sports.php');
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const {sports} = await response.json();
        let newData:Sport[]=[];

        for(let i=0; i< 3;i++){
          newData.push({
            idSport: i.toString(),
            strSport: sports[0].strSport,
            strFormat: sports[0].strFormat,
            strSportThumb: imges[i],
            strSportThumbBW: sports[0].strSportThumbBW,
            strSportIconGreen: sports[0].strSportIconGreen,
            strSportDescription: sports[0].strSportDescription
          })
        }
        console.log({newData})

        dispatch(
            setResults({             
              result: newData,
            })
          );
      } catch (error) {
        console.error('Fetch error:', error);
      }
   
  };
};