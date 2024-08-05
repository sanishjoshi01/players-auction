import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MainListItems from "./MainListItems";
import { ListItemText } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import logo from "../assets/logo.svg";
import SecondaryListItems from "./SecondaryListItems";

const drawerWidth = 240;

function SideBar({ open, onOpen, toggleDrawer, isLargeScreen, theme }) {
  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(() => ({
    "& .MuiDrawer-paper": {
      position: `${isLargeScreen ? "absolute" : "relative"}`,
      whiteSpace: "nowrap",
      width: drawerWidth,
      color: theme.palette.primary.light,
      background: theme.palette.primary.main,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: "border-box",
      ...(!open && {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9),
        },
      }),
    },
  }));

  const sidebarEl = React.useRef();

  React.useEffect(() => {
    if (isLargeScreen) {
      const handler = (event) => {
        if (!sidebarEl.current) {
          return;
        }

        if (!sidebarEl.current.contains(event.target)) {
          onOpen(false);
        }
      };

      document.addEventListener("click", handler, true);

      return () => {
        document.removeEventListener("click", handler);
      };
    }
  }, [isLargeScreen, onOpen]);

  return (
    <>
      <Drawer variant="permanent" open={open} ref={sidebarEl} className="">
        <Toolbar
          sx={{
            px: [1],
            py: [2],
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <img src={logo} />
            </ListItemIcon>
            <ListItemText primary="Players Auction" secondary="Trade games" />
          </ListItemButton>
          <IconButton onClick={() => toggleDrawer()}>
            {open ? (
              <ChevronLeftIcon color="secondary" />
            ) : (
              <ChevronRightIcon color="secondary" />
            )}
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <MainListItems />
          <Divider sx={{ mt: 12, border: "none" }} />
          <SecondaryListItems />
        </List>
      </Drawer>
    </>
  );
}

export default SideBar;
