import AvatarIcon from "./AvatarIcon";
import logo from "../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../context/useAuth";
import LoginButton from "./LoginButton";

function Header() {
  const { user } = useAuth();

  return (
    <div className="sticky top-0 z-50 w-full  p-2 flex items-center justify-between  bg-black">
      <img src={logo} />

      <div className="flex items-center gap-4">
        {!user ? <LoginButton /> : <AvatarIcon badge />}
        <MenuIcon />
      </div>
    </div>
  );
}

export default Header;
