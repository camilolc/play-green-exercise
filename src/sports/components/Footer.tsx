import styled from '@emotion/styled';
import { Home, History, Logout } from '@mui/icons-material';
import {  NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';
import { Card, useTheme } from '@mui/material';



export const Footer = () => {

  const theme = useTheme();

  const activeLinkStyle = {
    color: theme.palette.text.disabled,
    backgroundColor: theme.palette.primary.light, 
  };

  const inactiveLinkStyle = {
    color: "#777777",   
    
  };

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

  const ButtonContainer = styled(Card)`
  border-radius:24px;
  display:flex;
  align-items:center;
  justify-content:space-around;
  height:8vh;  
  width:90%;
`;

  const FooterButton = styled(NavLink)`
   width: 59px;
   height:59px;;
   border-radius:16px;
   display:flex;
   flex-direction:row;
   justify-content:center;
   align-items:center ;
   
`;
  return (
    <Footer>
      <ButtonContainer>
        <FooterButton
          to={"/"}
          style={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}
        >
          <Home />
        </FooterButton>
        <FooterButton to="/historical"
          style={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}
        >
          <History />
        </FooterButton>
        <FooterButton 
        to={""} 
        style={inactiveLinkStyle}
        onClick={onLogout}>
          <Logout />
        </FooterButton>
      </ButtonContainer>
    </Footer>
  )
}