import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { signUpThunk } from '../../redux/reducers/userSlice';
import validator from 'validator';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const theme = createTheme();
export const boxSx = {
  boxShadow: 3,
  borderRadius: 2,
  px: 4,
  py: 6,
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const { emailSentForConfirmation } = useSelector(state => state.user);

  const handleChange = (e, type) => {
    const value = e.target.value;
    if (type === 'email') {
      setEmail(value);
      setErrors(pre => {
        delete pre.email;
        return pre;
      });
    } else if (type === 'username') {
      setUsername(value);
      setErrors(pre => {
        delete pre.username;
        return pre;
      });
    } else {
      setPassword(value);
      setErrors(pre => {
        delete pre.password;
        return pre;
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      setErrors(pre => {
        return { ...pre, email: 'Please enter a valid email.' }
      });
    }
    if (!password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
      //1 number 1 uppercase and 1 lowercase at least
      setErrors(pre => {
        return { ...pre, password: 'Please enter a valid password; Password should contain at least 1 uppercase, 1 lowercase and 1 numeric.' }
      });
    }
    if (username.length < 3 || username.length > 15) {
      setErrors(pre => {
        return { ...pre, username: 'Please enter a valid username with length between 3 and 15.' }
      });
    }
    if (Object.keys(errors).length === 0) {
      dispatch(signUpThunk({ email, password, username }))
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        {/* <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop> */}
        <CssBaseline />
        {emailSentForConfirmation ?
          <Box sx={boxSx}>
            <Typography component="h1" variant="h5">
              Confirm Your Account
            </Typography>
            <p>Please activate your account via the confirmation email we sent to {email}, or search your spam folder if you have not received it.</p>
          </Box> :

          <Box sx={boxSx}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    error={!!errors.username}
                    helperText={errors.username}
                    value={username}
                    onChange={(e) => handleChange(e, 'username')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    // autoComplete="email"
                    error={!!errors.email}
                    helperText={errors.email}
                    value={email}
                    onChange={(e) => handleChange(e, 'email')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    error={!!errors.password}
                    helperText={errors.password}
                    value={password}
                    onChange={(e) => handleChange(e, 'password')}
                  />
                </Grid>
                <Grid item xs={12}>
                  {Object.keys(errors).map(item => {
                    <p key={item}>
                      {errors[item]}
                    </p>
                  })}
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => handleSubmit(e)}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        }
      </Container>
    </ThemeProvider>
  );
}