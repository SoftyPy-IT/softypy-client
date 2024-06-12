import { ThemeProvider } from "@mui/material";
import { theme } from "./Theme";

const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};

export default Providers;
