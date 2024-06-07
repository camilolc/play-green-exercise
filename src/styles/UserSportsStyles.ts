import styled from '@emotion/styled';
import { Card, CardContent, Typography, IconButton } from '@mui/material';

export const Container = styled.div`
  /* background-color: #1a1a1a; */
  color: white;
  /* min-height: 90vh; */
  padding:10px;
  width:100%;
  height:80vh;
  padding: 32px;
  overflow-y:scroll;
`;

export const HistoryHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
  margin-top:10px;
`;

export const Title = styled(Typography)`
  font-size: 42px;
  margin-bottom: 8px;
`;

export const Subtitle = styled(Typography)`
  font-size: 18px;
  color: #999;
  margin-bottom:8px;
`;

export const CardItem = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #212135;
  color: white;
  margin-bottom: 14px;
  border-radius:12px;
`;

export const CardImage = styled.div`
  position: relative;
  width: 80%;
  height: 80px;
  background-size: cover;
  background-position: center;
  border-radius:12px;
`;
export const TitleOverlay = styled(Typography)`
  position: absolute;
  width:100%;
  height:100%;
  bottom: 0;
  left: 0;
  padding: 25px 5px; /* ajusta el padding según sea necesario */
  background-color: rgba(0, 0, 0, 0.5); /* color de fondo para el texto */
  color: white; /* color de texto */
  `;

export const CardDetails = styled(CardContent)`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FavoriteButton = styled(IconButton)`
  color: white;
`;

export const CloseButton = styled(IconButton)`
  color: white;
`;

