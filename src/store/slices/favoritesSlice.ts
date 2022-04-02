import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchItem } from "../../types/types";

interface favoritesInterface {
  items: SearchItem[],
}

const initialState: favoritesInterface = {
  items: [],
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    like: (state, action: PayloadAction<SearchItem>) => {
      let tempFavorites = state.items;
      tempFavorites.push(action.payload);
      state.items = tempFavorites;
    },
    unlike: (state, action: PayloadAction<number>) => {
      let tempFavorites = state.items;
      tempFavorites = tempFavorites.filter((item) => item.trackId != action.payload);
      state.items = tempFavorites;
    },
  }
})

export const { like, unlike } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;