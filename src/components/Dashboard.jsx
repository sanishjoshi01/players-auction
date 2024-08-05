import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import SideBar from "./SideBar";
import { fetchLoadingAnimation } from "../api/mockAPI";
import Loader from "../components/Loader";
import Header from "../components/Header";
import MenuBar from "./MenuBar";

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1b1d2c",
      light: "#8c97ad",
      dark: "#000",
      contrastText: (1, 1, 1, 0.5),
    },
    secondary: {
      main: "#8c97ad",
    },
    hover: {
      main: "#1da6ee",
    },
    progress: {
      primary: "#8d35d4",
      secondary: "#ec6609",
    },
  },
});

export default function Dashboard({ children }) {
  // USESTATE FOR FIRST LOADING ANIMATION (3 SECONDS)
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const isLargeScreen = useMediaQuery(defaultTheme.breakpoints.down("lg"));
  const isSmallScreen = useMediaQuery(defaultTheme.breakpoints.down("sm"));

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const firstLoadingAnimation = async () => {
      await fetchLoadingAnimation();
      setIsLoading(false);
    };
    firstLoadingAnimation();
  }, []);

  if (isLoading) {
    return <Loader className="fixed inset-0" />;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      {isSmallScreen && <Header />}
      {isSmallScreen && <MenuBar />}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {!isSmallScreen && (
          <SideBar
            theme={defaultTheme}
            open={open}
            onOpen={setOpen}
            toggleDrawer={toggleDrawer}
            isLargeScreen={isLargeScreen}
          />
        )}
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
            ml: isSmallScreen ? "" : isLargeScreen ? "70px" : "",
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
