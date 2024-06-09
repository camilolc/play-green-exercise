import styled from "@emotion/styled";
import { Avatar, Box, IconButton, Typography, keyframes } from "@mui/material";


export const Container = styled.div`
/* background-color: #1a1a1a; */
  color: white;
  /* height: 100vh;  */
  width: 100%;
  /* height:80%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow:none;

  /* @media (max-width: 600px) {
    height: 50vh;
  } */
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const ImageContainer = styled.div`
position:relative;
 width: 100%;
  height: 65vh;
  background-size: cover;
  background-position: center;
  margin-bottom: 5%;
  border-radius: 0px 0px 32px 32px;
  animation: ${fadeIn} 0.4s ease-in-out;
   @media (min-width: 600px) {
    width:70%;
    border-radius:32px;
  }
`;

export const TitleOverlay = styled(Typography)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(360deg, #000000 0%, #000000 58.85%, rgba(0, 0, 0, 0) 100%);
  color: white;
  padding: 40px 20px;
  box-sizing: border-box; 
  border-radius: 0px 0px 32px 32px;
  `;

export const CircleContainer = styled(Avatar)`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%; 
  margin-bottom:15px;
`;

export const Loader = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 100vh; 
`;

export const FavoriteCircleContainer = styled(Avatar)`
  background-color: blue; 
  width: 70px; 
  height: 70px; 
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom:8vh;
  padding:0;
`;

export const FavoriteButton = styled(IconButton)`
  color: white;
  
`;

export const CloseButton = styled(IconButton)`
  color: white;
`;