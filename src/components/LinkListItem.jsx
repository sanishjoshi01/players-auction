import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function LinkListItem({ path, currentWindow, label, icon }) {
  return (
    <Link to={path}>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText
          primary={label}
          className={currentWindow === path && "text-[#1da6ee]"}
        />
      </ListItemButton>
    </Link>
  );
}

export default LinkListItem;
