import { configureStore } from "@reduxjs/toolkit";
import { activePageReducer, isFixedNavReducer } from "@/features";

export const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    isFixedNav: isFixedNavReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
