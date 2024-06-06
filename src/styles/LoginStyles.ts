import { Box, Button, Container, TextField, styled } from "@mui/material";


export const darkTheme = {
  palette: {
    // type: 'dark',
    primary: {
      main: '#1e90ff',
    },
    background: {
      default: '#1a1a2e',
      paper: '#1f1f30',
    },
    text: {
      primary: '#181828',
    },
  },
};

export const lightTheme = {
  palette: {
    type: 'light',
    primary: {
      main: '#007bff',
    },
    background: {
      default: 'white',
      paper: '#f0f0f0',
    },
    text: {
      primary: '#F3F3F3',
    },
  },
};

export const LoginContainer = styled(Container)({
    // backgroundColor: '#1f1f30',
    padding: '40px 5px',
    borderRadius: '15px',
    textAlign: 'center',
    maxWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',  
  });


  export const FormContainer = styled(Container)({
    width:'100%',
    textAlignLast:'left',   
  });

  export const CustomTextField = styled(TextField)({
    // backgroundColor: '#2a2a3a',
    borderRadius: '5px',
    marginBottom: '1em',
    '& .MuiInputBase-input': { // Cambiado de .MuiInputBase-root a .MuiInputBase-input
      color: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
      '&.Mui-focused': { // Asegura que el color se mantenga al enfocar
        color: 'white',
      },
    },
  });

  export const LoginButton = styled(Button)({
    // backgroundColor: '#1e90ff',
    borderRadius: '25px',    
    width:'122px',
    height:'66px',
    padding: '22px, 38px, 22px, 38px',
    marginTop: '1.5em',
    color: 'white',
    fontSize: '1em',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#1c86ee',
    },
    '&:active': {
      backgroundColor: '#187bcd',
    },
    '&:focus': {
      boxShadow: '0 0 10px #1e90ff',
    },
  }); 

  export const PageWrapper = styled(Box)({
    // backgroundColor: '#1a1a2e',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
  });