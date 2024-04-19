import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./user-slice";
export const store = configureStore({
  reducer: {
    [usersSlice.name]: usersSlice.reducer
}
}) ;
export type AppStore = typeof store;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;