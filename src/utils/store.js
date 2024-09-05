import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer:{
        sideBar: sideBarSlice,
        search: searchSlice // to reduce the api calls e.g if we press backspace on search text
        searchVideo: searchVideoSlice
    }
});

export default store;