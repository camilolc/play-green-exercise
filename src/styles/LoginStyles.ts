import { Box, Button, Container, TextField, Typography, styled } from "@mui/material";


export const darkTheme = {
  palette: {
    // type: 'dark',
    primary: {
      main: '#236BFE',
      light:"#1F1F31",
      dark:"#FEFEFE",
      contrastText:"#222243"
    },
    background: {
      default: '#181828',
      paper: '#2C2B3E',
      
    },
    text: {
      primary: '#FEFEFE',
      secondary:'#EA596F',
      disabled:'#FFFFFF'
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        sx: { backgroundColor: '#2F2F43' }
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
        style: {
          color: "#FEFEFE", fontSize: "18px",
          top: "1rem",
          left: "1rem",
          right: "1rem",
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: '#FEFEFE',
        },
      },
    }, 
  }

};

export const lightTheme = {
  palette: {
    // type: 'light',
    primary: {
      main: '#236BFE',
      light:"#F5F5F5",
      dark:"#D36060",      
      contrastText:"#FFFFFF"
    },
    background: {
      default: '#F3F3F3',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#161617',
      secondary:'#EA596F',
      disabled:'#2067F8'
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        sx: { backgroundColor: '#FFFFFF' }
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
        style: {
          color: "#3C3C3C", fontSize: "18px",
          top: "1rem",
          left: "1rem",
          right: "1rem",
        }
      }
    },

  }
};

export const PageWrapper = styled(Box)({
  // backgroundColor: '#1a1a2e',
  // color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90vh',
  overflow:'hidden'
});

export const TypographyBody = styled(Typography)({
  width: "70%",
  marginBottom: '23px'
});

export const LoginContainer = styled(Container)({
  // backgroundColor: '#1f1f30',
  padding: '40px 5px 0px 5px',
  borderRadius: '15px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  
});


export const FormContainer = styled(Container)({
  width: '100%',
  textAlignLast: 'left',
});

export const CustomTextField = styled(TextField)({
  // backgroundColor: '#2a2a3a',
  height: "67px",
  borderRadius: '18px',
  marginBottom: '1em',
  padding: "15px 16px",
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '& .MuiInputLabel-root': {
    color: 'white',
    '&.Mui-focused': {
      color: 'white',
    },
  },
});

export const TextLink = styled(Button)({
    color:'unset',
    display: "block",
    marginBottom: '1.5em',
    fontFamily:"16px",
    lineHeight:"19.52px",
    textDecoration:'none',
    textTransform:'unset'
});


export const LoginButton = styled(Button)({
  // backgroundColor: '#1e90ff',
  borderRadius: '25px',
  width: '122px',
  height: '66px',
  padding: '22px, 38px, 22px, 38px',
  marginTop: '1.5em',
  background: "linear-gradient(99deg, #236BFE 6.69%, #0D4ED3 80.95%)",
  boxShadow: "0px 4px 30px 0px #2269FBCC",

  // color: 'white',
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