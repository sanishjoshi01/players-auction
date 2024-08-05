import * as React from "react";
import cartoonImg from "../assets/cartoon.png";
import DonutSmallRoundedIcon from "@mui/icons-material/DonutSmallRounded";
import ProfilePanel from "../components/ProfilePanel";
import GuidesPanel from "../components/GuidesPanel";
import WarframeLogo from "../assets/warframelogo.png";
import RecentActorsRoundedIcon from "@mui/icons-material/RecentActorsRounded";
import CustomDropdown from "../components/CustomDropdown";
import Table from "../components/Table";
import { fetchImageData, fetchLatestGuideData } from "../api/mockAPI";
import Skeleton from "../components/Skeleton";
import ProfileOverview from "../components/ProfileOverview";
import UserInfoMenu from "../components/UserInfoMenu";

function ItemsAndSkinsPage() {
  // Latest Guides Data from mock API
  const [latestGuidesData, setLatestGuidesData] = React.useState(null);
  const [loadingLatestGuides, setLoadingLatestGuides] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetchLatestGuideData();
      setLatestGuidesData(response);
      setLoadingLatestGuides(false);
    };

    fetchData();
  }, []);

  let renderedGuides;
  if (loadingLatestGuides) {
    renderedGuides = <Skeleton times={4} className="h-20 w-full" />;
  } else {
    renderedGuides = latestGuidesData.slice(0, 4).map((data, index) => {
      return (
        <GuidesPanel
          key={index}
          category={data.category}
          title={data.title}
          author={data.author}
          date={data.date}
        />
      );
    });
  }

  const [isImageLoading, setIsImageLoading] = React.useState(true);
  const [imageData, setImageData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetchImageData();
      setImageData(response);
      setIsImageLoading(false);
    };
    fetchData();
  }, []);

  let imageContent;
  if (isImageLoading) {
    imageContent = (
      <Skeleton
        times={4}
        className="h-20 sm:h-36 lg:h-20 xl:h-16 w-full rounded-2xl "
      />
    );
  } else {
    imageContent = imageData.map((data, index) => {
      return (
        <div
          key={index}
          className={`bg-[url('${data.image}')] bg-cover bg-center h-20 sm:h-36 lg:h-20 xl:h-16 rounded-2xl flex items-center justify-center border border-slate-600`}
        ></div>
      );
    });
  }

  return (
    <div className="grid max-lg:grid-cols-1 lg:grid-cols-[11fr_1fr] bg-[url('/src/assets/warframe.png')] bg-cover bg-top">
      {/* MAIN CONTENT  */}
      <div className="flex flex-col gap-4 w-full">
        {/* first content  */}
        <div className="mx-2 sm:mx-4 flex flex-col">
          {/* logo and contact  */}
          <div className="flex flex-col">
            {/* logo of game  */}
            <div className="md:self-start w-40 md:w-64 p-6">
              <img src={WarframeLogo} alt="warframe" className="text-white" />
            </div>
            {/* some message and contact button */}
            <div className="md:self-end w-64 p-2 text-white">
              <p className="text-sm">
                I hope you enjoy our products as much as I enjoy offering them
                to you. If you have any questions or comments, please contact me
              </p>
            </div>
            <div className="self-end md:self-end w-64 p-2 text-white">
              <div className="flex items-center gap-4 justify-center font-bold text-md p-2 bg-gradient-to-r from-[#105375] from-[10%] to-[#16779f] to-[90%] rounded-3xl cursor-pointer">
                <RecentActorsRoundedIcon />
                <p>Contact</p>
              </div>
            </div>
          </div>

          {/* User Details Component with glass blur effect */}
          <ProfileOverview />
        </div>
        {/* second content  */}
        <div className="mx-2 sm:mx-4 mb-2 rounded-3xl pt-0 px-6 pb-6 flex flex-col gap-4 backdrop-blur-xl bg-black/30">
          {/* user info menus  */}
          <UserInfoMenu />

          {/* three dropdowns */}
          <div className="flex max-sm:flex-wrap items-center justify-center ">
            <CustomDropdown
              width="100%"
              label="Server"
              sx={{ backgroundColor: "#171c3c" }}
            />
            <CustomDropdown
              width="100%"
              label="Game"
              sx={{ backgroundColor: "#171c3c" }}
            />
            <CustomDropdown
              width="100%"
              label="Select Item"
              sx={{ backgroundColor: "#171c3c" }}
            />
          </div>

          {/* categories and sort by  */}
          <div className="flex max-md:flex-wrap max-md:justify-center max-md:gap-2 items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              <div className="text-xs py-1 px-2 rounded-lg bg-[#1b1d2c]">
                Weapons
              </div>
              <div className="text-xs py-1 px-2 rounded-lg bg-[#1b1d2c]">
                Nova Prime
              </div>
              <div className="text-xs py-1 px-2 rounded-lg bg-[#1b1d2c]">
                Secondary
              </div>
              <div className="text-xs py-1 px-2 rounded-lg bg-[#1b1d2c]">
                Loki Prime
              </div>
              <div className="text-xs py-1 px-2 rounded-lg bg-[#1b1d2c]">
                Equinox Prime
              </div>
              <div className="text-xs py-1 px-2 rounded-lg bg-[#1b1d2c]">
                Primary
              </div>
              <div className="text-xs py-1 px-2 rounded-lg bg-[#1b1d2c]">
                Ivara Prime
              </div>
              <div className="text-xs py-1 px-2 rounded-lg bg-[#1b1d2c]">
                Nezha Prime
              </div>
              <div className="text-xs py-1 px-2 rounded-lg bg-[#1b1d2c]">
                Melee
              </div>
            </div>
            <div className="flex items-center gap-1 text-white text-sm">
              Sort by:
              <CustomDropdown
                width={100}
                label="Rating"
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                }}
              />
            </div>
          </div>

          {/* Table  */}
          <Table />
        </div>
      </div>

      {/* RIGHT SIDEBAR FOR ITEMS AND SKINS PAGE  */}
      <div className="lg:w-full bg-[#1b1d2c] rounded-3xl p-2 flex flex-col gap-2 h-fit max-lg:mx-2">
        {/* Profile Panel */}
        <ProfilePanel />

        {/* Account Calculator Panel */}
        <div className="rounded-2xl p-1 bg-gradient-to-br from-[#493852] from-10% via-[#364a76]  via-50%  to-[#15426c] to-100% flex gap-2">
          <div className="w-full relative">
            <img
              src={cartoonImg}
              alt="cartoon"
              className="w-14 lg:w-24 absolute left-0 bottom-0"
              // style={{ maxWidth: "100%", height: "auto" }}
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
            <p>YOUR GAME STATISTICS</p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
            {imageContent}
          </div>
        </div>

        {/* Guides & Tips Player Panel */}
        <div className="rounded-2xl flex flex-col gap-2">
          <div className="text-sm flex items-center mb-1 text-white">
            Guides & Tips Player
          </div>
          <div>{renderedGuides}</div>
        </div>
      </div>
    </div>
  );
}

export default ItemsAndSkinsPage;
