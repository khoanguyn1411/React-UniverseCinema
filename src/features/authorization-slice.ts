import { appAxios } from "@/axios";
import { KEY_TOKEN } from "@/constants";
import { LocalStorage } from "@/localStorage";
import { IFormLoginValue } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

export type AuthState = {
  pending: boolean;
  user: any;
  isAuth: boolean;
};

const initialState: AuthState = {
  pending: false,
  user: null,
  isAuth: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async (data: IFormLoginValue, { rejectWithValue }) => {
    const tokenRequestResult: AxiosResponse = await appAxios.get(
      "/authentication/token/new",
      null,
      true
    );
    if (
      !tokenRequestResult ||
      !tokenRequestResult.data ||
      tokenRequestResult.status > 200
    ) {
      return;
    }
    const requestToken = tokenRequestResult.data;
    LocalStorage.set(KEY_TOKEN, requestToken);
    const response = await appAxios.post(
      "/authentication/token/validate_with_login",
      {
        username: data.username,
        password: data.password,
        request_token: requestToken.request_token,
      }
    );

    if (response || response.status > 200) {
      return rejectWithValue(response);
    }
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.pending = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.pending = false;
        state.user = null;
      });
  },
});

export const { setIsAuth, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
