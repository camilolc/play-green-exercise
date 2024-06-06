import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingUserSports } from '../../store/userSports/thunks';
import { RootState } from '../../store/store';
import { SportUser } from '../../interfaces/interfaces';

export const UserSports = () => {
    const dispatch:any = useDispatch();

    const {sports} = useSelector((state:RootState)=> state.userSports)

    const showUserSports=()=>{
        dispatch(startLoadingUserSports())
    }

    useEffect(()=>{
        showUserSports();
    },[])

    console.log({sports});
  return (
    <>
        {sports.map((userSp:SportUser)=> 
            <ul key={userSp.id}>
                <li>{userSp.title}</li>
                <h3>{userSp.status ? "liked" : "disliked"}</h3>
                <img src={userSp.urlImg}></img>
                <hr />
                
            </ul>
        )}
    </>
  )
}
