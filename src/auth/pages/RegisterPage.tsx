import { Alert, Grid, Typography } from "@mui/material"
import { startCreatingUserWithEmailPassword, startResetMessage } from "../../store/auth/thunks";
import { FormEvent, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import { AppDispatch, RootState } from "../../store/store";
import { PageWrapper, LoginContainer, FormContainer, CustomTextField, LoginButton, TypographyBody, BottomContainer } from "../../styles/LoginStyles";

const formData = {
  email: '',
  password: '',
}

const formValidations = {
  email: [(value: string) => value.includes('@'), 'the email must have @'],
  password: [(value: string) => value.length >= 6, 'the password must have more than 5 characters'],
}

export const RegisterPage = () => {

  //#region hooks
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { status, errorMessage } = useSelector((state: RootState) => state.auth)
  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const {
    email, password, onInputChange, formState,
    isFormValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  //#endregion

  //#region states
  const [formSubmitted, setFormSubmitted] = useState(false);
  //#endregion

  //#region dispatch actions
  const navigateLoginPage = () => {
    dispatch(startResetMessage());
    navigate("/auth/login");
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (!isFormValid) return;
    setFormSubmitted(true);

    dispatch(startCreatingUserWithEmailPassword(formState));
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
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
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
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
            <LoginButton variant="contained" type="submit" disabled={isAuthenticating}>
              sing-up
            </LoginButton>
            <Grid
              item
              xs={12}
              display={!!errorMessage ? '' : 'none'}
            >
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>

            <BottomContainer>
              <Typography sx={{ mr: 1 }}>already have an account?</Typography>
              <span onClick={navigateLoginPage}>
                log in
              </span>
            </BottomContainer>
          </FormContainer>
        </form>
      </LoginContainer>

    </PageWrapper>


  )

}
