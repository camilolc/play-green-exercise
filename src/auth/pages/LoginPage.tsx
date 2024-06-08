import { Alert, Grid, Typography } from "@mui/material"
import { startLoginWithEmailPassword } from "../../store/auth/thunks";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { RootState } from "../../store/store";
import { PageWrapper, LoginContainer, FormContainer, CustomTextField, LoginButton, TypographyBody, TextLink } from "../../styles/LoginStyles";

export const LoginPage = () => {

  const { status, errorMessage } = useSelector((state: RootState) => state.auth)

  const dispatch: any = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event: any) => {
    event.preventDefault();

    dispatch(startLoginWithEmailPassword({ email, password }));
  }

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
