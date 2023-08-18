import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import articleSlice from "./reducers/articleSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    article: articleSlice.reducer,
  }
});

export default store;
