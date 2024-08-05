import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function LinkListItem({ path, currentWindow, label, icon, onlyIcon }) {
  const finalClassName =
    currentWindow === path ? "text-[#1da6ee]  w-[0px]" : "w-[0px]";

  const finalBorder = currentWindow === path ? "2px solid #1da6ee" : "";

  return (
    <Link to={path}>
      <ListItemButton
        sx={{
          borderLeft: !onlyIcon && finalBorder,
          borderBottom: onlyIcon && finalBorder,
        }}
      >
        <ListItemIcon sx={{ minWidth: onlyIcon && 0 }}>{icon}</ListItemIcon>
        <ListItemText primary={label} className={finalClassName} />
      </ListItemButton>
    </Link>
  );
}

export default LinkListItem;
