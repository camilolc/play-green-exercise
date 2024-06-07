import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { Sport, SportUser } from "../../interfaces/interfaces"
import { getAllSports } from "../../store/sports/thunks";
import { useEffect, useState } from "react";
import { startLoadingUserSports, startNewSport, startUpdateSport } from "../../store/userSports/thunks";
import { ButtonsContainer, CircleContainer, CloseButton, Container, FavoriteButton, FavoriteCircleContainer, ImageContainer,TitleOverlay } from "../../styles/SportList";
import { CloseTwoTone, Favorite } from '@mui/icons-material';

export const SportList = () => {


  const dispatch: any = useDispatch();
  const { result } = useSelector((state: RootState) => state.sports)
  const { sports } = useSelector((state: RootState) => state.userSports)

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLike = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % result.length);
  };

  const handleDislike = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % result.length);
  };

  const currentItem = result[currentIndex];

  console.log({ currentItem })

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
          <CloseButton onClick={handleDislike}>
            <CircleContainer onClick={()=>addNewSport(currentItem, false)}>
              <CloseTwoTone color="error" />
            </CircleContainer>
          </CloseButton>
          <FavoriteButton onClick={handleLike}>
            <FavoriteCircleContainer onClick={()=>addNewSport(currentItem, true)}>
              <Favorite color="error" fontSize="large" />
            </FavoriteCircleContainer>
          </FavoriteButton>
        </ButtonsContainer>
      </Container>   S
    </>
  )
}
