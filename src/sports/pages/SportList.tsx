import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { Sport, SportUser } from "../../interfaces/interfaces"
import { getAllSports } from "../../store/sports/thunks";
import { useEffect, useState } from "react";
import { startLoadingUserSports, startNewSport, startUpdateSport } from "../../store/userSports/thunks";
import { ButtonsContainer, CircleContainer, CloseButton, Container, FavoriteButton, ImageContainer,Loader,TitleOverlay } from "../../styles/SportListStyles";
import { CloseTwoTone } from '@mui/icons-material';

import LikeButton from '../../../public/likeButton.png'
import {CircularProgress, useTheme } from "@mui/material"



export const SportList = () => {


  //#region hooks
  const theme = useTheme();
  const dispatch: AppDispatch = useDispatch();
  const { result,isLoading } = useSelector((state: RootState) => state.sports)
  const { sports } = useSelector((state: RootState) => state.userSports)

  //#endregion

  //#region card visualization

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0); 
  const currentItem = result[currentIndex];

  const handleLike = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % result.length);
    setAnimationKey((prevKey) => prevKey + 1);

  };

  //#endregion

  //#region dispatch actions

  const showSports = () => {
    dispatch(getAllSports())
  }
  const showUserSports = () => {
    dispatch(startLoadingUserSports())
  }

  const addNewSport = (sport: Sport, status: boolean) => {

    const { idSport, strSport, strSportThumb } = sport;

    const foundSport = sports.find((item: SportUser) => item.idSport === idSport)


    if (foundSport) {

      dispatch(startUpdateSport({
        id: foundSport.id,
        title: strSport,
        urlImg: strSportThumb,
        idSport,
        status
      }))
    } else {
      dispatch(startNewSport({
        id: "",
        title: strSport,
        urlImg: strSportThumb,
        idSport,
        status
      }))
    }
    handleLike();

  }


  useEffect(() => {
    showSports();
    showUserSports();
  }, [])

  //#endregion


  return (
    <>
    {isLoading
      ?
      <Loader>
      <CircularProgress />
      </Loader>
      :
      <Container>
        <ImageContainer key={animationKey} style={{ backgroundImage: `url(${currentItem?.strSportThumb})` }}>
          <TitleOverlay variant="h5">
            {currentItem ? currentItem?.strSport : ""}
          </TitleOverlay>
        </ImageContainer>
        <ButtonsContainer>
          <CloseButton onClick={()=>addNewSport(currentItem, false)}>
            <CircleContainer sx={{background:theme.palette.primary.contrastText}} >
              <CloseTwoTone style={{color:theme.palette.primary.dark}} />
            </CircleContainer>
          </CloseButton>
          <FavoriteButton onClick={()=>addNewSport(currentItem, true)}>
            <img src={LikeButton}></img>
          </FavoriteButton>
        </ButtonsContainer>
      </Container>
    }
    </>
  )
}
