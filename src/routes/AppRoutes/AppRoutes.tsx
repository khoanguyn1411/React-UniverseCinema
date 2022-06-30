import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

import { DefaultLayout } from "@/layouts";
import { publicRoutes } from "@/routes";

TopBarProgress.config({
  barColors: {
    "0": "#FF9900",
    "1.0": "#FF9900",
  },
  shadowBlur: 5,
});

export const AppRoutes: React.FC = () => {
  const location = useLocation();

  const [progress, setProgress] = useState<Boolean>(false);
  const [prevLoc, setPrevLoc] = useState<string>(location.pathname);
  useEffect(() => {
    setPrevLoc(location.pathname);
    setProgress(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    setProgress(false);
  }, [prevLoc]);

  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Page = route.component;
        const Layout: any =
          route.layout !== null ? route.layout || DefaultLayout : Fragment;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                {progress && <TopBarProgress />}
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
};
