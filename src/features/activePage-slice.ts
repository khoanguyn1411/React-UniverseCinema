import { funcs, values } from "@/constants";
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
    setErrorActivePage(state) {
      state.value = values.ERROR_PAGE;
    },
  },
});

const { updateActivePage, setErrorActivePage } = activePageSlice.actions;
const activePageReducer = activePageSlice.reducer;

export { activePageReducer, updateActivePage, setErrorActivePage };
