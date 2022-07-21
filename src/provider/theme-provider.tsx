import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FunctionComponent, ReactNode } from "react";

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
  },
  palette: {
    primary: {
      main: "#090909",
    },
    secondary: {
      main: "#FF9900",
    },
  },
});

type TProps = {
  children: ReactNode;
};

export const AppThemeProvider: FunctionComponent<TProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
