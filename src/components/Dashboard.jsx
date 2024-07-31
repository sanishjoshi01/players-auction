import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";

// import { fetchDashboardData } from "../api/mockAPI";
// import Loading from "./Loading";
import SideBar from "./SideBar";
// import AppBars from "./AppBars";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1b1d2c",
      light: "#8c97ad",
      dark: "#000",
      // contrastText:
    },
    secondary: {
      main: "#8c97ad",
    },
    hover: {
      main: "#1da6ee",
    },
  },
});
console.log(defaultTheme);

export default function Dashboard({ children }) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const isSmallScreen = useMediaQuery(defaultTheme.breakpoints.down("sm"));

  // const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (isSmallScreen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isSmallScreen]);

  //for full page loading
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     await fetchDashboardData();
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <Loading className="fixed inset-0" />;
  // }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* TODO - APP BAR  */}
        {/* <AppBars open={open} toggleDrawer={toggleDrawer} /> */}
        <SideBar open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={{
            color: (theme) =>
              theme.palette.mode === "dark"
                ? theme.palette.primary.light
                : theme.palette.primary.dark,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? theme.palette.primary.dark
                : theme.palette.primary.light,
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
