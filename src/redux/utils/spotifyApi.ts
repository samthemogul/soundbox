import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotifyApi = createApi({
  reducerPath: 'spotifyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SPOTIFY_RAPID_API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongsByGenre: builder.query({ query: (genre: string) => `/recommendations/?limit=20&seed_genres=${genre}` })
  }),
});

export const {
  useGetSongsByGenreQuery
} = spotifyApi;
