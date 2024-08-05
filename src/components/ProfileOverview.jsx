import AvatarIcon from "../components/AvatarIcon";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ProfileOverview() {
  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 20,
    borderRadius: "20px",
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#0c0f20",
    },
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: "#386bf6",
      borderRadius: "20px",
    },
  }));

  return (
    <div className="flex items-center justify-between md:grid md:grid-cols-[2fr_4fr_2fr] text-white rounded-[2rem] backdrop-blur-md bg-black/30 gap-4">
      {/* Profile Picture and other details  */}
      <div className="flex items-center gap-2 p-2 justify-center">
        <AvatarIcon size="80px" badge />
        {/* User details  */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 rounded-md px-1 bg-opacity-30 text-orange-400 text-xs relative">
              4.9
              <StarRoundedIcon
                fontSize="smaller"
                className="absolute -top-2 -left-2"
              />
            </div>
            <div className="bg-pink-500 rounded-md px-1 bg-opacity-30 text-pink-400 text-xs relative">
              Power Seller
              <BoltRoundedIcon
                fontSize="smaller"
                className="absolute -top-2 -left-2"
              />
            </div>
          </div>
          <div>
            <h4 className="text-sm tracking-wider">applegold</h4>
            <p className="text-xs opacity-60">since 2019</p>
          </div>
        </div>
      </div>

      {/* Button for small screen (hidden for > 768px) - click event not handled */}
      <div className="md:hidden bg-black pl-1 pr-3 rounded-tl-lg rounded-bl-lg">
        <ExpandMoreIcon />
      </div>

      {/* Level bar with other details */}
      <div className="self-end rounded-tl-3xl rounded-tr-3xl hidden md:flex flex-col justify-between gap-3 p-3 bg-[#171c3c]">
        <div className="flex items-center gap-2">
          {/* <!-- Current Level --> */}
          <div className="text-white text-xs ">2 Level</div>

          {/* <!-- Progress Bar --> */}
          <BorderLinearProgress
            variant="determinate"
            value={40}
            className="flex-grow"
          />
          {/* <!-- Next Level --> */}
          <div className="text-white text-xs ">3 Level</div>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-1 text-xs">
          <div className="bg-black py-1 px-2 rounded-lg opacity-90">
            30 Days
          </div>
          <div className="text-green-500 bg-black py-1 px-2 rounded-lg flex items-center gap-1 opacity-90">
            <CurrencyExchangeRoundedIcon fontSize="smaller" />
            <p>Sales &#x2265; 1000</p>
          </div>
          <div className="bg-black py-1 px-2 rounded-lg flex items-center gap-1 opacity-90">
            <ViewListRoundedIcon fontSize="smaller" />
            <p>Orders &#x2265; 20</p>
          </div>
          <div className="bg-black py-1 px-2 rounded-lg flex items-center gap-1 opacity-90">
            <ThumbUpOffAltRoundedIcon fontSize="smaller" />
            <p>Rate &#x2265; 4.5</p>
          </div>
        </div>
      </div>

      {/* Orders Number and rating details  */}
      <div className="hidden md:flex items-center justify-center gap-2 p-2">
        <div className="flex flex-col gap-1">
          <p className="text-xs">Orders</p>
          <h3 className="text-sm">11,753</h3>
        </div>
        <div className="flex flex-col gap-1">
          <p className=" text-xs">Positive</p>
          <h3 className="text-green-400 text-sm">99.24%</h3>
        </div>
        <div className="flex flex-col gap-1">
          <p className=" text-xs">Negative</p>
          <h3 className=" text-red-400 text-sm">0.76%</h3>
        </div>
      </div>
    </div>
  );
}
export default ProfileOverview;
