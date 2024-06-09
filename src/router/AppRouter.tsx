import { Navigate, Route, Routes } from 'react-router-dom';
import { SportRoutes } from '../sports/routes/SportRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useCheckAuth } from '../hooks/useCheckAuth';
// import { ThemeProvider, useTheme } from '@emotion/react';
// import { Box, CssBaseline, IconButton, createTheme } from '@mui/material';
// import { useContext, useState } from 'react';
// import { darkTheme, lightTheme } from '../styles/LoginStyles';




export const AppRouter = () => {


  const status = useCheckAuth();

  if ( status === 'checking' ) {
    return <></>
  }

  

  return (
    
    <Routes>
        
        {
          (status === 'authenticated')
           ? <Route path="/*" element={ <SportRoutes /> } />
           : <Route path="/auth/*" element={ <AuthRoutes /> } />
        }

        <Route path='*' element={ <Navigate to='/auth/login' />  } />      

    </Routes>
  )
}