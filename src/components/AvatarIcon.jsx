import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import avatarImg from "../assets/avatar.png";

function AvatarIcon({ badge, size, image }) {
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
          className="cursor-pointer"
          alt="avatar"
          src={image || avatarImg}
          sx={{ width: size, height: size }}
        />
      </Badge>
    </Stack>
  );
}

export default AvatarIcon;
