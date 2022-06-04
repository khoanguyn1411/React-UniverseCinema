import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActivePageState {
  value: string;
}
const initialState: ActivePageState = {
  // value: func.getUrl().page,
  value: "Finsd",
};

const activePageSlice = createSlice({
  name: "activePage",
  initialState,
  reducers: {
    changeActivePage(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { changeActivePage } = activePageSlice.actions;
export default activePageSlice.reducer;
