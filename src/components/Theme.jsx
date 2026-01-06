import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,

      background: {
        default: mode === "dark" ? "#0f1124" : "#f4f6fa",
        paper: mode === "dark" ? "#1a1c2c" : "#ffffff",
      },

      primary: {
        main: mode === "dark" ? "#8f9bff" : "#3f51b5",
      },

      text: {
        primary: mode === "dark" ? "#ffffff" : "#111111",
        secondary: mode === "dark" ? "#b0b3c7" : "#555555",
      },
    },

    shape: {
      borderRadius: 12,
    },
  });

  