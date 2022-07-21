import { activePageReducer, isFixedNavReducer } from "@/features";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    isFixedNav: isFixedNavReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
