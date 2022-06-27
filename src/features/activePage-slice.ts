import { funcs } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

interface ActivePageState {
  value: string;
}
const initialState: ActivePageState = {
  value: funcs.getUrl().currentPage,
};

const activePageSlice = createSlice({
  name: "activePage",
  initialState,
  reducers: {
    updateActivePage(state) {
      window.scrollTo(0, 0);
      state.value = funcs.getUrl().currentPage;
    },
  },
});

const { updateActivePage } = activePageSlice.actions;
const activePageReducer = activePageSlice.reducer;

export { activePageReducer, updateActivePage };
