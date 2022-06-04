import "@/App.css";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { DefaultLayout } from "./layouts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout: any = route.layout || DefaultLayout;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
