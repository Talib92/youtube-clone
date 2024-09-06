import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import searchSlice from "./searchSlice";
import resultSlice from "./resultSlice";

const store = configureStore({
  reducer: {
    sideBar: sideBarSlice,
    search: searchSlice, // to reduce the api calls e.g if we press backspace on search text
    result: resultSlice,
  },
});

export default store;