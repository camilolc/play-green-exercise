import { FormEvent, useMemo, } from "react";
import { useForm } from "../../hooks/useForm";
import { startLoginWithEmailPassword, startResetMessage } from "../../store/auth/thunks";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";

import { Alert, Grid, Typography } from "@mui/material"
import { PageWrapper, LoginContainer, FormContainer, CustomTextField, LoginButton, TypographyBody, TextLink } from "../../styles/LoginStyles";

export const LoginPage = () => {


  //#region hooks
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { status, errorMessage } = useSelector((state: RootState) => state.auth)
  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  
  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  });
  //#endregion 

  
  //#region dispatch actions
  
  const naviageSignUpPage = () => {

    dispatch(startResetMessage());
    navigate("/auth/register")

  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();  
    dispatch(startLoginWithEmailPassword({ email, password }));
  }
  //#endregion


  return (

    <PageWrapper>
      <LoginContainer>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome
        </Typography>
        <TypographyBody variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </TypographyBody>
        <form onSubmit={onSubmit}>
          <FormContainer>
            <CustomTextField
              variant="standard"
              InputProps={{
                disableUnderline: true
              }}
              autoComplete="off"
              label="User"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
            <CustomTextField
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              autoComplete="off"
              label="Password"
              type="password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}

            />

            <TextLink >
              Forgot your password?
            </TextLink>

            <span onClick={naviageSignUpPage}>
              <TextLink >
                Sing-up
              </TextLink>
            </span>

            <LoginButton variant="contained" type="submit" disabled={isAuthenticating}>
              Login
            </LoginButton>
            <Grid
              container
              display={!!errorMessage ? '' : 'none'}
              sx={{ mt: 1 }}>
              <Grid
                item
                xs={12}
              >
                <Alert severity='error'>{errorMessage}</Alert>
              </Grid>
            </Grid>
          </FormContainer>
        </form>
      </LoginContainer>

    </PageWrapper>


  )

}
