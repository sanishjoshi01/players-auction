import AvatarIcon from "../components/AvatarIcon";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import cartoonImg from "../assets/cartoon.png";
import DonutSmallRoundedIcon from "@mui/icons-material/DonutSmallRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

function CurrencyPage() {
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
    <div className="flex gap-3 w-full">
      {/* MAIN CONTENT  */}
      <div className="w-[80%] rounded-3xl	bg-cyan-500">
        <div className="h-[50vh] bg-green-500"></div>
      </div>

      {/* RIGHT SIDEBAR  */}
      <div className="bg-[#1b1d2c] w-[20%] rounded-3xl p-2 grid gap-4">
        {/* Profile Panel */}
        <div className="rounded-2xl flex flex-col space-y-3 p-4 bg-gradient-to-br from-[#a1708a] via-[#0c0f20] to-[#0c0f20] h-fit">
          {/* Profile and other icons  */}
          <div className="flex items-center justify-between gap-2">
            <AvatarIcon badge={true} />
            <div className="text-white w-full flex justify-between">
              <LocalOfferRoundedIcon className="bg-cyan-500 p-1 rounded-md cursor-pointer " />
              <NotificationsRoundedIcon className="bg-gray-600 p-1 rounded-md cursor-pointer" />
              <EmailRoundedIcon className="bg-gray-600 p-1 rounded-md cursor-pointer" />
              <SettingsRoundedIcon className="bg-gray-600 p-1 rounded-md cursor-pointer" />
            </div>
          </div>

          {/* Progress Level */}
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

          {/* Sub progress  */}
          <div className="flex items-center justify-between text-xs">
            <p>Order: 323</p>
            <p>Need: 24</p>
          </div>
        </div>

        {/* Account Calculator Panel */}
        <div className="mt-4 rounded-2xl p-4 bg-gradient-to-br from-[#493852] from-10% via-[#364a76]  via-50%  to-[#15426c] to-100% flex gap-2">
          <div className="w-full relative">
            <img
              src={cartoonImg}
              alt="cartoon"
              className="w-24 absolute left-0 bottom-0"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-white font-medium">Account Calculator</h1>
            <p className="opacity-70 text-sm">Evaluate your Account value</p>
          </div>
        </div>

        {/* Game Statistics Panel */}
        <div className="rounded-2xl flex flex-col gap-1">
          <div className="text-xs flex items-center gap-2 mb-1">
            <DonutSmallRoundedIcon fontSize="small" />
            YOUR GAME STATISTICS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="bg-[url('/src/assets/csgo.png')] bg-cover h-16 rounded-2xl flex items-center justify-center border border-slate-600	"></div>
            <div className="bg-[url('/src/assets/fortnite.jpg')] bg-cover h-16 rounded-2xl flex items-center justify-center border border-slate-600	"></div>
            <div className="bg-[url('/src/assets/valorant.png')] bg-cover h-16 rounded-2xl flex items-center justify-center border border-slate-600	"></div>
            <div className="bg-[url('/src/assets/cod.jpg')] bg-cover h-16 rounded-2xl flex items-center justify-center border border-slate-600	"></div>
          </div>
        </div>

        {/* Game Statistics Panel */}
        <div className="rounded-2xl flex flex-col gap-1">
          <div className="text-sm flex items-center gap-2  mb-1 text-white">
            Guides & Tips Player
          </div>
          <div className="rounded-2xl w-full h-full flex flex-col gap-1 py-2 px-4 mb-2 text-white bg-gradient-to-t from-[#32323c] from-10% via-[#3e424f] via-50%  to-[#1e2432] to-100%">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase">Skilling & leveling</p>
              <MoreHorizRoundedIcon />
            </div>
            <div>
              <h2 className="text-sm">OSRS Crafting Guide</h2>
              <p className="text-sm">1-99</p>
            </div>
            <div className="flex items-center justify-start gap-1">
              <AvatarIcon size="24px" />
              <p className="uppercase text-xs">By mira</p>
              <p className="uppercase text-xs">Oct 13th</p>
            </div>
          </div>
          <div className="rounded-2xl w-full h-full flex flex-col gap-1 py-2 px-4 mb-2 text-white bg-gradient-to-t from-[#32323c] from-10% via-[#3e424f] via-50%  to-[#1e2432] to-100%">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase">Skilling & leveling</p>
              <MoreHorizRoundedIcon />
            </div>
            <div>
              <h2 className="text-sm">OSRS Crafting Guide</h2>
              <p className="text-sm">1-99</p>
            </div>
            <div className="flex items-center justify-start gap-1">
              <AvatarIcon size="24px" />
              <p className="uppercase text-xs">By mira</p>
              <p className="uppercase text-xs">Oct 13th</p>
            </div>
          </div>
          <div className="rounded-2xl w-full h-full flex flex-col gap-1 py-2 px-4 mb-2 text-white bg-gradient-to-t from-[#32323c] from-10% via-[#3e424f] via-50%  to-[#1e2432] to-100%">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase">Skilling & leveling</p>
              <MoreHorizRoundedIcon />
            </div>
            <div>
              <h2 className="text-sm">OSRS Crafting Guide</h2>
              <p className="text-sm">1-99</p>
            </div>
            <div className="flex items-center justify-start gap-1">
              <AvatarIcon size="24px" />
              <p className="uppercase text-xs">By mira</p>
              <p className="uppercase text-xs">Oct 13th</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyPage;
