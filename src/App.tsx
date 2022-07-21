import "@/App.css";
import { AppRoutes } from "@/routes";
import { store } from "@/store";
import { Provider as AppReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "./provider";

function App() {
  return (
    <BrowserRouter>
      <AppReduxProvider store={store}>
        <AppThemeProvider>
          <AppRoutes />
        </AppThemeProvider>
      </AppReduxProvider>
    </BrowserRouter>
  );
}

export default App;
