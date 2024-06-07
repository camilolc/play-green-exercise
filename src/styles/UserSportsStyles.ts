import styled from '@emotion/styled';
import { Card, CardContent, Typography, IconButton } from '@mui/material';



export const Container = styled.div`
  background-color: #1a1a1a;
  color: white;
  min-height: 100vh;
  padding: 16px;
`;

export const HistoryHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled(Typography)`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const Subtitle = styled(Typography)`
  font-size: 16px;
  color: #999;
`;

export const CardItem = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: white;
  margin-bottom: 8px;
`;

export const CardImage = styled.div`
  width: 64px;
  height: 64px;
  background-size: cover;
  background-position: center;
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