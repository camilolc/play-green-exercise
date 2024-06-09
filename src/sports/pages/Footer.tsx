
import { Home, History, Logout } from '@mui/icons-material';

import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';
import {  useTheme } from '@mui/material';
import { AppDispatch } from '../../store/store';
import { ButtonContainer, FooterButton, FooterContainer } from '../../styles/FooterStyles';



export const Footer = () => {

  const theme = useTheme();

  const activeLinkStyle = {
    color: theme.palette.text.disabled,
    backgroundColor: theme.palette.primary.light, 
  };

  const inactiveLinkStyle = {
    color: "#777777",   
    
  };

  const distpatch: AppDispatch = useDispatch();

  const onLogout = () => {
    distpatch(startLogout())
  }


  return (
    <FooterContainer>
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
    </FooterContainer>
  )
}