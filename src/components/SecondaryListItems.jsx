// export const secondaryListItems = (

// );

import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import DashboardIcon from "@mui/icons-material/Dashboard";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import PolicyRoundedIcon from "@mui/icons-material/PolicyRounded";

import { Link } from "react-router-dom";

const SecondaryListItems = () => {
  const currentWindow = window.location.pathname;

  return (
    <React.Fragment>
      <Link to="/about">
        <ListItemButton>
          <ListItemIcon>
            <InfoRoundedIcon
              color={currentWindow === "/about" ? "hover" : "secondary"}
            />
          </ListItemIcon>
          <ListItemText
            primary="About"
            className={currentWindow === "/about" && "text-[#1da6ee]"}
          />
        </ListItemButton>
      </Link>

      <Link to="/support">
        <ListItemButton>
          <ListItemIcon>
            <SupportAgentRoundedIcon
              color={currentWindow === "/support" ? "hover" : "secondary"}
            />
          </ListItemIcon>
          <ListItemText
            primary="Support"
            className={currentWindow === "/support" && "text-[#1da6ee]"}
          />
        </ListItemButton>
      </Link>

      <Link to="/policy">
        <ListItemButton>
          <ListItemIcon>
            <PolicyRoundedIcon
              color={currentWindow === "/policy" ? "hover" : "secondary"}
            />
          </ListItemIcon>
          <ListItemText
            primary="Legal"
            className={currentWindow === "/policy" && "text-[#1da6ee]"}
          />
        </ListItemButton>
      </Link>
    </React.Fragment>
  );
};

export default SecondaryListItems;
