import { createSlice } from "@reduxjs/toolkit";



interface IState {
  query: string
}
const initialState: IState ={
  query: ""
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {

      state.query = action.payload;
    }

    
  },
});

export const {
    setQuery,
} = searchSlice.actions;

export default searchSlice.reducer;
