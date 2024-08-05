import * as React from "react";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import avatarImg from "../assets/avatar.png";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutReset } from "../store/index";

function AvatarIcon({ badge, size, image }) {
  const dispatch = useDispatch();
  const { logout } = useAuth();
  const navigate = useNavigate();

  //Account Menu
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };
  const handleClose = () => {
    setOpenMenu(false);
  };

  const handleLogout = () => {
    handleClose();

    // TODO- logout
    logout();
    dispatch(logoutReset());
    navigate("/");
  };

  const logoutEl = React.useRef();
  React.useEffect(() => {
    const handler = (event) => {
      if (!logoutEl.current) {
        return;
      }

      if (!logoutEl.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  if (!badge) {
    return (
      <Avatar
        className="cursor-pointer"
        alt="avatar"
        src={image || avatarImg}
        sx={{ width: size, height: size }}
      />
    );
  }

  return (
    <Stack spacing={3} direction="row">
      <Badge
        overlap="circular"
        badgeContent=" "
        variant="dot"
        sx={{
          "& .MuiBadge-badge": {
            backgroundColor: "lightblue",
            border: "1px solid darkblue",
          },
        }}
      >
        <Avatar
          className="cursor-pointer relative"
          alt="avatar"
          src={image || avatarImg}
          sx={{ width: size, height: size }}
          onClick={handleClick}
        />
        {openMenu && (
          <div
            ref={logoutEl}
            className="absolute z-50 right-0 top-10 bg-black py-2 px-4 rounded-2xl"
            onClick={handleLogout}
          >
            Logout
          </div>
        )}
      </Badge>
    </Stack>
  );
}

export default AvatarIcon;
