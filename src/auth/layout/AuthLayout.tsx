import { Grid, Typography } from "@mui/material"


interface Props{
    children:JSX.Element
    title:string
}

export const AuthLayout = ({ children, title = '' }:Props) => {
  return (
    <Grid
    container
    spacing={ 0 }
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
  >

    <Grid item
     xs={ 3 }
     sx={{ 
          width: { sm: 450 },
          backgroundColor: '#1f1f30', 
          padding: 3, 
          borderRadius: 8 
      }}>
        
        <Typography variant='h5' sx={{ mb: 1 }}>{ title }</Typography>

          
          { children }
          

      </Grid>

  </Grid>
  )
}
