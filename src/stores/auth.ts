import { useState } from 'react';
import { configureStore, createSlice  } from '@reduxjs/toolkit';

type AuthState = {
  stateAuthorizationCode: string
  temporaryToken: string;
  accessToken: string
  refreshToken: string
  codeVerifier:string
  secretCodeChallenge:string
}

// Define the initial state
const initialState: AuthState = {
  stateAuthorizationCode: '',
  temporaryToken: '',
  accessToken: '',
  refreshToken: '',
  codeVerifier: '',
  secretCodeChallenge: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.stateAuthorizationCode = '';
      state.temporaryToken = '';
      state.accessToken = '';
      state.refreshToken = '';
      state.codeVerifier = '';
      state.secretCodeChallenge = '';
    },
  },
});

// Create a custom hook to manage authentication state
export const useAuthStore = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});