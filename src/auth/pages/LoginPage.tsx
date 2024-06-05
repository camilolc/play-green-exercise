import { Alert, Button, Grid, TextField } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { startLoginWithEmailPassword } from "../../store/auth/thunks";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { RootState } from "../../store/store";

export const LoginPage = () => {


  const { status, errorMessage } = useSelector((state:RootState)=> state.auth)

  const dispatch:any = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSubmit = ( event:any ) => {
    event.preventDefault();

    dispatch( startLoginWithEmailPassword({ email, password }) );
  }

  
  return (   
      <AuthLayout title="Login">
        <form onSubmit={ onSubmit }>
            <Grid container>
              <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField 
                  label="Correo" 
                  type="email" 
                  placeholder='correo@google.com' 
                  fullWidth
                  name="email"
                  value={ email }
                  onChange={ onInputChange }
                />
              </Grid>
  
              <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField 
                  label="Contraseña" 
                  type="password" 
                  placeholder='Contraseña' 
                  fullWidth
                  name="password"
                  value={ password }
                  onChange={ onInputChange }
                />
              </Grid>
  
  
              <Grid 
                container
                display={ !!errorMessage ? '': 'none' }
                sx={{ mt: 1 }}>
                <Grid 
                    item 
                    xs={ 12 }
                  >
                  <Alert severity='error'>{ errorMessage }</Alert>
                </Grid>
              </Grid>
              
              <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button
                    disabled={ isAuthenticating }
                    type="submit" 
                    variant='contained' 
                    fullWidth>
                    Login
                  </Button>
                </Grid>              
              </Grid>           
  
            </Grid>
  
  
          </form>
  
      </AuthLayout>
    )
  
}
