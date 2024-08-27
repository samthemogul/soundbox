import { configureStore } from '@reduxjs/toolkit';

import { spotifyApi } from './utils/spotifyApi';
import playerReducer from "./slices/playerSlice";
import searchSlice from "./slices/searchSlice"

export const store = configureStore({
  reducer: {
    [spotifyApi.reducerPath]: spotifyApi.reducer,
    player: playerReducer,
    search: searchSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
