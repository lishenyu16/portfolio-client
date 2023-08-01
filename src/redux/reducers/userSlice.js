import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers, createUser } from '../../api/Users';
import toastr from "toastr";

const initialState = {
  users: [],
  user: null,
  loading: false,
};

export const getUsers = createAsyncThunk(
  'user/getUsers',
  async (_, {rejectWithValue}) => {
    try {
      const res = await fetchUsers();
      return res.data;
    } catch (err) {
      console.log(err.message);
      toastr.error(err.message);
      return rejectWithValue(err.message);
    }
  }
);

export const addUser = createAsyncThunk(
  'user/addUser',
  async (user) => {
    const res = await createUser(user);
    return res.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: state => {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        console.log(action.payload);
        state.users = action.payload;
      })
      .addCase(addUser.pending || addUser.rejected, (state, action) => {
        console.log('it is here: pending or rejected');
        state.loading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
      });
  }
});

export default userSlice;



