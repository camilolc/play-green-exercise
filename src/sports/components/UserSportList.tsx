import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingUserSports } from '../../store/userSports/thunks';
import { RootState } from '../../store/store';
import { HistoryHeader, Title, Subtitle, CardItem, CardImage, CardDetails, FavoriteButton, CloseButton, Container, TitleOverlay } from '../../styles/UserSportsStyles';
import { ArrowBack } from '@mui/icons-material'


import { CloseTwoTone, Favorite } from '@mui/icons-material';

export const UserSports = () => {


  const dispatch: any = useDispatch();

  const { sports } = useSelector((state: RootState) => state.userSports)

  const showUserSports = () => {
    dispatch(startLoadingUserSports())
  }

  useEffect(() => {
    showUserSports();
  }, [])

  console.log({ sports });
  return (
    <>
      <Container>
        <HistoryHeader>
          <ArrowBack fontSize='large'></ArrowBack>
          <Title>History</Title>
          <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
          <Subtitle>{new Date().toISOString().slice(0, 10)}</Subtitle>
        </HistoryHeader>
        {sports.map(item => (
          <CardItem key={item.id}>
            <CardImage style={{ backgroundImage: `url(${item.urlImg})` }} >               
              <TitleOverlay variant="h6">{item.title}</TitleOverlay>
            </CardImage>
            <CardDetails>
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
