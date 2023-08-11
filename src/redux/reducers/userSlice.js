import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signIn, signUp, confirmEmail, fetchUserInfoFromToken, saveVisitorInfo } from '../../api/Users';
import Cookies from "js-cookie";
import { toast } from 'react-toastify';

const initialState = {
  userInfo: null,
  loading: false,
  errorMessage: '',
  emailSentForConfirmation: false,
  pendingConfirmEmail: true,
  confirmedEmail: false,
};

export const confirmEmailThunk = createAsyncThunk(
  'user/confirmEmail',
  async ({ verificationCode, userId }, thunkApi) => {
    try {
      const res = await confirmEmail(verificationCode, userId);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err.data?.message);
      toast.error(err.data?.message);
      return thunkApi.rejectWithValue(err.data?.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  'user/signIn',
  async ({ email, password }, thunkApi) => {
    try {
      const res = await signIn(email, password);
      return res.data;
    } catch (err) {
      console.log(err);
      if (err.status !== 401) {
        if (err.message) {
          toast.error(err.message);
        } else {
          toast.error(err.data?.message);
        }
      }
      // return thunkApi.rejectWithValue(err.message || err.data?.message);
      return thunkApi.rejectWithValue({ statusCode: err.status, message: err.message || err.data?.message });
    }
  }
);

export const signUpThunk = createAsyncThunk(
  'user/signUp',
  async ({ email, password, username }, thunkApi) => {
    try {
      const { data } = await signUp(email, password, username);
      return data;
    } catch (err) {
      console.log(err.data?.message);
      toast.error(err.data?.message);
      return thunkApi.rejectWithValue(err.data?.message);
    }
  }
);

export const getUserInfoThunk = createAsyncThunk(
  'user/getUserInfo',
  async (token, thunkApi) => {
    try {
      const { data } = await fetchUserInfoFromToken(token);
      return data;
    } catch (err) {
      console.log(err.data?.message);
      //toast.error(err.data?.message);
      return thunkApi.rejectWithValue(err.data?.message);
    }
  }
);

export const saveUserInfoThunk = createAsyncThunk(
  'user/saveUserIpInfo',
  async (ip, thunkApi) => {
    const res = await saveVisitorInfo(ip);
    console.log(res.data);
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.userInfo = null;
      Cookies.remove('userInfo');
    }
  },
  extraReducers: {
    [signInThunk.fulfilled]: (state, action) => {
      let info = { ...action.payload };
      delete info.success;
      state.userInfo = info;
      Cookies.set('userInfo', JSON.stringify(info), { expires: 1 });
      state.emailSentForConfirmation = true;
    },
    [signInThunk.rejected]: (state, action) => {
      console.log(action.payload);
      state.errorMessage = action.payload.message;
    },
    [signUpThunk.fulfilled]: (state, action) => {
      state.emailSentForConfirmation = true;
    },
    [signUpThunk.rejected]: (state, action) => {
      console.log(action);
      state.errorMessage = action.payload;
    },
    [confirmEmailThunk.fulfilled]: (state, action) => {
      state.pendingConfirmEmail = false;
      state.confirmedEmail = true;
    },
    [confirmEmailThunk.rejected]: (state, action) => {
      console.log(action);
      state.errorMessage = action.payload;
    },
    [getUserInfoThunk.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export default userSlice;
export const { logout } = userSlice.actions;



