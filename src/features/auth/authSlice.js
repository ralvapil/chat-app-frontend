import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

export const getUserStatus = createAsyncThunk(
  "auth/getUserStatus",
  async () => {
    const response = await api.get("http://localhost:5000/auth/getUserStatus");

    return response;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthorized: localStorage.getItem("testLogin")
      ? localStorage.getItem("testLogin")
      : null,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    email: null,
    status: "idle",
    error: null,
    user: null,
    picture: "",
  },
  reducers: {
    login: (state) => {
      state.isAuthorized = true;
      state.error = "";
    },
    logout: (state) => {
      state.isAuthorized = false;
      state.token = null;
    },
    handleInvalidToken: (state) => {
      state.isAuthorized = false;
      state.token = null;
      state.error = "Token Expired";
    },
  },
  extraReducers: {
    [getUserStatus.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUserStatus.fulfilled]: (state, action) => {
      state.status = "succeeded";
      // state.email = action.meta.arg.email;
      // state.token = action.payload;
      state.isAuthorized = true;
      state.user = action.payload.user;
      state.picture = action.payload.picture;
    },
    [getUserStatus.rejected]: (state, action) => {
      state.status = "failed";
      state.isAuthorized = false;

      // state.token = null;
      // state.error = "Invalid Token.";
    },
  },
});

export const { login, logout, handleInvalidToken } = authSlice.actions;

export const selectToken = (state) => state.auth.token;
export const selectIsAuthorized = (state) => state.auth.isAuthorized;
export const selectError = (state) => state.auth.error;
export const selectUser = (state) => ({
  id: state.auth.user,
  picture: state.auth.picture,
});

export default authSlice.reducer;
