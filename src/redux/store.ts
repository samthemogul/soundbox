import { configureStore } from '@reduxjs/toolkit';

import { spotifyApi } from './utils/spotifyApi';
import playerReducer from "./slices/playerSlice"

export const store = configureStore({
  reducer: {
    [spotifyApi.reducerPath]: spotifyApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
