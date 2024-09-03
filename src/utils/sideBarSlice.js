import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
    name: "sideBar",
    initialState: {
        isSideBarOpen: true,
    },
    reducers:{
        toggleSideBar:(state, action) =>{
            state.isSideBarOpen = !state.isSideBarOpen;
        },
        closeSideBar: (state,action) =>{
            state.isSideBarOpen = false;
        }
    }
});

export const {toggleSideBar, closeSideBar} = sideBarSlice.actions;

export default sideBarSlice.reducer;