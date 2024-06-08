import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingUserSports } from '../../store/userSports/thunks';
import { RootState } from '../../store/store';
import { HistoryHeader, Title, Subtitle, CardItem, CardImage, CardDetails, FavoriteButton, CloseButton, Container, TitleOverlay, LinkButton, CardItemContainer } from '../../styles/UserSportsStyles';
import { ArrowBack } from '@mui/icons-material'


import { CloseTwoTone, Favorite } from '@mui/icons-material';
import { useTheme } from "@mui/material";

export const UserSports = () => {

  const theme = useTheme();  


  const dispatch: any = useDispatch();

  const { sports } = useSelector((state: RootState) => state.userSports)

  const showUserSports = () => {
    dispatch(startLoadingUserSports())
  }

  useEffect(() => {
    showUserSports();
  }, [])

  return (
    <>
      <Container>
        <HistoryHeader>
          <LinkButton to={"/"} >
          <ArrowBack sx={{marginLeft:'50px'}} fontSize='large'></ArrowBack>
          </LinkButton>
          <Title>History</Title>
          <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
          <Subtitle>{new Date().toISOString().slice(0, 10)}</Subtitle>
        </HistoryHeader>
        <CardItemContainer>
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
                    <Favorite sx={{color:theme.palette.text.disabled}} />
                  </FavoriteButton>
                  :
                  <CloseButton>
                    <CloseTwoTone sx={{color:theme.palette.text.secondary}} />
                  </CloseButton>
                }
              </div>
            </CardDetails>
          </CardItem>
        ))}
        </CardItemContainer>
      </Container>
    </>
  )
}
