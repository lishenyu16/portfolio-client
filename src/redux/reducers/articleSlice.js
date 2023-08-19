import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { getArticleById, getArticles, saveArticle } from "../../api/Articles";

const initialState = {
  isEditing: false,
  loading: false,
  errorMessage: '',
  currentArticle: null,
  articles: [],
};

export const saveArticleThunk = createAsyncThunk(
  'article/saveArticle',
  async (article, thunkApi) => {
    try {
      const { data } = await saveArticle(article);
      return data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.data?.message);
    }
  }
);

export const getSingleArticleThunk = createAsyncThunk(
  'article/getArticle',
  async (id, thunkApi) => {
    try {
      const { data } = await getArticleById(id);
      return data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.data?.message);
    }
  }
)
export const getArticlesThunk = createAsyncThunk(
  'article/getArticles',
  async (_, thunkApi) => {
    try {
      const { data } = await getArticles();
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.data?.message);
    }
  }
)

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setCurrentArticle: (state, action) => {
      if (action.payload || (!action.payload && !state.isEditing)) {
        state.currentArticle = action.payload;
      }
    },
    setEditing: (state, action) => {
      state.isEditing = action.payload;
    },
  },
  extraReducers: {
    [saveArticleThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [saveArticleThunk.fulfilled]: (state, action) => {
      state.loading = false;
      toast.info('Article is saved successfully!');
      console.log(action.payload);
    },
    [saveArticleThunk.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
      toast.error(state.errorMessage);
    },
    [getSingleArticleThunk.fulfilled]: (state, action) => {
      const { article } = action.payload;
      state.currentArticle = article;
    },
    [getSingleArticleThunk.rejected]: (state, action) => {
      state.errorMessage = action.payload;
    },
    [getArticlesThunk.fulfilled]: (state, action) => {
      const { articles } = action.payload;
      state.articles = articles;
    },
    [getArticlesThunk.rejected]: (state, action) => {
      toast.error(action.payload);
    },
  },
});

export default articleSlice;

export const { setCurrentArticle, setEditing } = articleSlice.actions;