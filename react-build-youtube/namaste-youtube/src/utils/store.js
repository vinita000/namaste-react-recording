import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from './searchSlice'
import filterVideos from './filterVideos';

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    filter: filterVideos
  }
});

export default store;