import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface isFixedNavState {
  value: Boolean;
}
const initialState: isFixedNavState = {
  value: false,
};

const IsFixedNavSlice = createSlice({
  name: "isFixedNav",
  initialState,
  reducers: {
    setIsFixedNav(state, actions: PayloadAction<Boolean>) {
      state.value = actions.payload;
    },
  },
});

const { setIsFixedNav } = IsFixedNavSlice.actions;
const isFixedNavReducer = IsFixedNavSlice.reducer;

export { setIsFixedNav, isFixedNavReducer };
