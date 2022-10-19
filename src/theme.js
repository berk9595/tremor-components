import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3069FE",
    },
    gray: {
      200: "#EEF0F4",
    },
    text: {
      primary: "#1A1919",
    },
    typography: {
      400: "#666666",
    },
  },
  typography: {
    fontFamily: ["Inter"].join(","),
    h1: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "40px",
      letterSpacing: "-0.416667px",
    },
    h2: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "40px",
      letterSpacing: "-0.25px",
    },
    h3: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "30px",
      letterSpacing: "-0.25px",
    },
    h5: {
      fontSize: "9px",
      fontWeight: 600,
      lineHeight: "20px",
    },
    h6: {
      fontSize: "8px",
      fontWeight: 600,
      lineHeight: "22px",
    },
    body1: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "-0.25px",
    },
    body2: {
      fontWeight: 300,
      fontSize: "16px",
      lineHeight: "28px",
      letterSpacing: "-0.25px",
    },
    feedbacks: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: 400,
      color: "#667080",

      marginBottom: "32px",
    },

    feedbacksTitle: {
      fontSize: "20px",
      lineHeight: "24px",
      fontWeight: 700,
      color: "#667080",
      marginBottom: "32px",
    },
    popUpTitle: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: "bold",
    },
    popUpText: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: 400,
      color: "#666666",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1440px !important",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          wordBreak: "break-word",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "#fff",
          borderRadius: "8px",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "auto",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          textTransform: "none",
          fontSize: 14,
          fontWeight: 700,
          padding: "8px 12px",
          borderRadius: "4px",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          margin: "16px 0",
          boxShadow: "none",
          border: "none",
          "&:before": {
            display: "none",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          order: -1,
          backgroundColor: "#f6f6f6",
          border: "1px solid #A7B0BD",
          borderRadius: "8px",
          minHeight: 42,
          maxHeight: 42,
          "&.Mui-expanded": {
            minHeight: 42,
            maxHeight: 42,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0,
          marginBottom: "16px",
        },
      },
    },
  },
});

export default theme;
