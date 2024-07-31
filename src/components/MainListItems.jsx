import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import ListSubheader from "@mui/material/ListSubheader";
// import DashboardIcon from "@mui/icons-material/Dashboard";
import CurrencyBitcoinRoundedIcon from "@mui/icons-material/CurrencyBitcoinRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import OfflineBoltRoundedIcon from "@mui/icons-material/OfflineBoltRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
// import AssignmentIcon from "@mui/icons-material/Assignment";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

import { Link } from "react-router-dom";

const MainListItems = () => {
  const currentWindow = window.location.pathname;

  return (
    <React.Fragment>
      <Link to="/dashboard">
        <ListItemButton>
          <ListItemIcon sx={{ gap: 0, padding: 0, margin: 0 }}>
            <HomeRoundedIcon
              color={currentWindow === "/dashboard" ? "hover" : "secondary"}
            />
          </ListItemIcon>
          <ListItemText
            primary="Home"
            className={currentWindow === "/dashboard" && "text-[#1da6ee]"}
          />
        </ListItemButton>
      </Link>

      <Link to="/currency">
        <ListItemButton>
          <ListItemIcon>
            <CurrencyBitcoinRoundedIcon
              color={currentWindow === "/currency" ? "hover" : "secondary"}
            />
          </ListItemIcon>

          <ListItemText
            primary="Currency"
            className={currentWindow === "/currency" && "text-[#1da6ee]"}
          />
        </ListItemButton>
      </Link>

      <Link to="/items-and-skins">
        <ListItemButton>
          <ListItemIcon>
            <CategoryRoundedIcon
              color={
                currentWindow === "/items-and-skins" ? "hover" : "secondary"
              }
            />
          </ListItemIcon>

          <ListItemText
            primary="Items & Skins"
            className={currentWindow === "/items-and-skins" && "text-[#1da6ee]"}
          />
        </ListItemButton>
      </Link>

      <Link to="/accounts">
        <ListItemButton>
          <ListItemIcon>
            <PeopleAltRoundedIcon
              color={currentWindow === "/accounts" ? "hover" : "secondary"}
            />
          </ListItemIcon>

          <ListItemText
            primary="Accounts"
            className={currentWindow === "/accounts" && "text-[#1da6ee]"}
          />
        </ListItemButton>
      </Link>

      <Link to="/power-leveling">
        <ListItemButton>
          <ListItemIcon>
            <OfflineBoltRoundedIcon
              color={
                currentWindow === "/power-leveling" ? "hover" : "secondary"
              }
            />
          </ListItemIcon>

          <ListItemText
            primary="Power Leveling"
            className={currentWindow === "/power-leveling" && "text-[#1da6ee]"}
          />
        </ListItemButton>
      </Link>

      <Link to="/games">
        <ListItemButton>
          <ListItemIcon>
            <GridViewRoundedIcon
              color={currentWindow === "/games" ? "hover" : "secondary"}
            />
          </ListItemIcon>

          <ListItemText
            primary="View All Games"
            className={currentWindow === "/games" && "text-[#1da6ee]"}
          />
        </ListItemButton>
      </Link>
    </React.Fragment>
  );
};

export default MainListItems;
