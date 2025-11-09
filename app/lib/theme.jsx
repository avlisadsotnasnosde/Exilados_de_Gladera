import { createTheme } from "@mui/material/styles";
import { blue, indigo } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[800],
      contrastText: indigo[100],
    },
    secondary: {
      main: indigo[100],
      contrastText: blue[800],
    },
  },
});

export const color = { white: indigo[100] };
export const bgpagecolor = {};
