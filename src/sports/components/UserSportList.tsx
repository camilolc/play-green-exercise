import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingUserSports } from '../../store/userSports/thunks';
import { RootState } from '../../store/store';
import { SportUser } from '../../interfaces/interfaces';
import { Container, Typography } from '@mui/material';
import { HistoryHeader, Title, Subtitle, CardItem, CardImage, CardDetails, FavoriteButton, CloseButton } from '../../styles/UserSportsStyles';

import { CloseTwoTone, Favorite } from '@mui/icons-material';

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
        {/* {sports.map((userSp:SportUser)=> 
            <ul key={userSp.id}>
                <li>{userSp.title}</li>
                <h3>{userSp.status ? "liked" : "disliked"}</h3>
                <img src={userSp.urlImg}></img>
                <hr />
                
            </ul>
        )} */}
         <Container>
      <HistoryHeader>
        <Title>History</Title>
        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
      </HistoryHeader>
      {sports.map(item => (
        <CardItem key={item.id}>
          <CardImage style={{ backgroundImage: `url(${item.urlImg})` }} />
          <CardDetails>
            <Typography variant="h6">{item.title}</Typography>
            <div>
                {item.status
                ?

              <FavoriteButton>
                <Favorite />
              </FavoriteButton>
                :
              <CloseButton>
                <CloseTwoTone />
              </CloseButton>
                }
            </div>
          </CardDetails>
        </CardItem>
      ))}
    </Container>
    </>
  )
}
