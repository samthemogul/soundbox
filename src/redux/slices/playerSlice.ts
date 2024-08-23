import { createSlice } from "@reduxjs/toolkit";

interface ITrack {
  id: number;
  title: string;
  artist: string;
  url: string | null;
  image: string;
}

interface IState {
  currentSongs: ITrack[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: ITrack | null;
  genreListId: string;
}
const initialState: IState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: null,
  genreListId: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
      state.currentIndex = action.payload.i;
      state.currentSongs = action.payload.relatedSongs;
      state.isActive = true;
    },

    nextSong: (state, action) => {
      if (state.currentSongs[action.payload]) {
        state.activeSong = state.currentSongs[action.payload];
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]) {
        state.activeSong = state.currentSongs[action.payload];
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const {
  setActiveSong,
  nextSong,
  prevSong,
  playPause,
  selectGenreListId,
} = playerSlice.actions;

export default playerSlice.reducer;
