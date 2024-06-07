import styled from '@emotion/styled';
import { Home, History, Logout } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';



export const Footer = () => {

  const distpatch: any = useDispatch();

  const onLogout = () => {
    distpatch(startLogout())
  }

  const Footer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  position: fixed;
  bottom: 20px;
  left: 0;
  width: 100%;  
`;

  const ButtonContainer = styled.div`
  background-color:gray;
  border-radius:24px;
  display:flex;
  align-items:center;
  justify-content:space-around;
  height:85px;  
  width:90%;
`;

  const FooterButton = styled(Link)`
  color: white;
`;
  return (
    <Footer>
      <ButtonContainer>
        <FooterButton to={"/"}>
          <Home />
        </FooterButton>
        <FooterButton to="/historical">
          <History />
        </FooterButton>
        <FooterButton to={""} onClick={onLogout}>
          <Logout />
        </FooterButton>
      </ButtonContainer>
    </Footer>
  )
}