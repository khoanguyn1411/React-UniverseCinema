import { configureStore } from "@reduxjs/toolkit";
import activePageReducer from "@/features/activePage-slice";

export const store = configureStore({
  reducer: {
    activePage: activePageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
