import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { Sport, SportUser } from "../../interfaces/interfaces"
import { getAllSports } from "../../store/sports/thunks";
import { useEffect } from "react";
import { startLoadingUserSports, startNewSport, startUpdateSport } from "../../store/userSports/thunks";

export const SportList = () => {

    const dispatch: any = useDispatch();
    const { result } = useSelector((state: RootState) => state.sports)
    const { sports } = useSelector((state: RootState) => state.userSports)

    const showSports = () => {
        dispatch(getAllSports())
    }
    const showUserSports=()=>{
        dispatch(startLoadingUserSports())
    }

    const addNewSport = (sport: Sport, status: boolean) => {

        const {idSport,strSport,strSportThumb} = sport;
        
        const foundSport = sports.find((item:SportUser)=> item.idSport === idSport)       
    

        if(foundSport){

            dispatch(startUpdateSport({
                id: foundSport.id,
                title: strSport,
                urlImg: strSportThumb,
                idSport,
                status
            }))
        }else{
            dispatch(startNewSport({
                id: "",
                title: strSport,
                urlImg: strSportThumb,
                idSport,
                status
            }))
        }

    }


    useEffect(() => {
        showSports();
        showUserSports();
    }, [])


    return (
        <>
            {result.map((sport: Sport) =>
                <ul key={sport.idSport}>
                    <li>{sport.strSport}</li>
                    <img src={sport.strSportThumb} />
                    <div>
                        <button onClick={() => addNewSport(sport, true)}>like</button>
                        <button onClick={() => addNewSport(sport, false)}>dislike</button>
                    </div>
                </ul>

            )}
        </>
    )
}
