import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { Sport, SportUser } from "../../interfaces/interfaces"
import { getAllSports } from "../../store/sports/thunks";
import { useEffect, useState } from "react";
import { startLoadingUserSports, startNewSport, startUpdateSport } from "../../store/userSports/thunks";
import { ButtonsContainer, CircleContainer, CloseButton, Container, FavoriteButton, ImageContainer,TitleOverlay } from "../../styles/SportList";
import { CloseTwoTone } from '@mui/icons-material';

import LikeButton from '../../../public/likeButton.png'

export const SportList = () => {


  const dispatch: any = useDispatch();
  const { result } = useSelector((state: RootState) => state.sports)
  const { sports } = useSelector((state: RootState) => state.userSports)

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLike = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % result.length);

  };

  const currentItem = result[currentIndex];

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


  return (
    <>
      <Container>
        <ImageContainer style={{ backgroundImage: `url(${currentItem?.strSportThumb})` }}>
          <TitleOverlay variant="h5">
            {currentItem ? currentItem?.strSport : ""}
          </TitleOverlay>
        </ImageContainer>
        <ButtonsContainer>
          <CloseButton onClick={()=>addNewSport(currentItem, false)}>
            <CircleContainer >
              <CloseTwoTone color="error" />
            </CircleContainer>
          </CloseButton>
          <FavoriteButton onClick={()=>addNewSport(currentItem, true)}>
            <img src={LikeButton}></img>
          </FavoriteButton>
        </ButtonsContainer>
      </Container>
    </>
  )
}
