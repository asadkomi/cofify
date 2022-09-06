import { createTheme } from "@mui/material/styles";
import { brown } from "@mui/material/colors";

export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#432d2d",
        },
      },
    },
  },

  palette: {
    primary: {
      main: "#432d2d",
    },
    secondary: {
      main: "#d9b182",
    },
  },
});
