import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <Link
      to="/login"
      className="bg-[#0a2a4e] p-2 rounded-3xl flex -items-center justify-center gap-2 cursor-pointer"
    >
      <LoginIcon />
      <p>Login here</p>
    </Link>
  );
}

export default LoginButton;
