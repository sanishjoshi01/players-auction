import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import AvatarIcon from "../components/AvatarIcon";

function ProfilePanel() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 4,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.progress.secondary,
    },
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: theme.palette.progress.primary,
    },
  }));

  return (
    <div className="flex flex-col gap-4 p-4 rounded-2xl h-fit bg-gradient-to-br from-[#a1708a] via-[#0c0f20] to-[#0c0f20] bg-red-500">
      {/* Profile and other icons ROW */}
      <div className="flex items-center justify-between gap-2">
        <AvatarIcon badge={true} />
        <div className="text-white flex justify-between gap-4">
          <LocalOfferRoundedIcon className="bg-cyan-500 p-1 rounded-md cursor-pointer" />
          <NotificationsRoundedIcon className="bg-gray-600 p-1 rounded-md cursor-pointer" />
          <EmailRoundedIcon className="bg-gray-600 p-1 rounded-md cursor-pointer" />
          <SettingsRoundedIcon className="bg-gray-600 p-1 rounded-md cursor-pointer" />
        </div>
      </div>

      {/* Progress Level ROW */}
      <div className="flex items-center">
        {/* <!-- Starting Circle --> */}
        <div className="w-6 h-6 bg-[#8d35d4] text-white flex items-center justify-center rounded-full text-sm rounded-tr-lg rotate-45">
          <div className="-rotate-45">3</div>
        </div>
        {/* <!-- Progress Bar --> */}
        <BorderLinearProgress
          variant="determinate"
          value={70}
          className="flex-grow"
        />
        {/* <!-- Ending Circle --> */}
        <div className="w-6 h-6 bg-[#ec6609] text-white flex items-center justify-center rounded-full text-sm rounded-tl-lg -rotate-45">
          <div className="rotate-45">4</div>
        </div>
      </div>

      {/* Sub progress ROW */}
      <div className="flex items-center justify-between text-xs">
        <p>Order: 323</p>
        <p>Need: 24</p>
      </div>
    </div>
  );
}

export default ProfilePanel;
