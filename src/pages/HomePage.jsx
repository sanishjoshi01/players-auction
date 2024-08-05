import * as React from "react";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import InsertLinkRoundedIcon from "@mui/icons-material/InsertLinkRounded";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CustomDropdown from "../components/CustomDropdown";
import Table from "../components/Table";
import FeatureCard from "../components/FeatureCard";
import AvatarIcon from "../components/AvatarIcon";
import ControllerImage from "../assets/controller.png";
import ProfilePanel from "../components/ProfilePanel";
import GuidesPanel from "../components/GuidesPanel";
import { Link } from "react-router-dom";
import { fetchLatestGuideData } from "../api/mockAPI";
import Skeleton from "../components/Skeleton";

function HomePage() {
  //SEARCH
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    display: "flex",
    flex: 1,
    overflowX: "hidden",
    width: "100%",
    backgroundColor: "transparent",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    right: 0,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    flex: 1,

    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingRight: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
    },
  }));

  // BUTTON
  const CustomButton = styled(Button)(() => ({
    borderRadius: "200px",
    fontSize: "1rem",
    paddingBlock: "16px",
    paddingInline: "12px",
    color: "white",
  }));

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
    renderedGuides = <Skeleton times={6} className="h-20 w-full" />;
  } else {
    renderedGuides = latestGuidesData.map((data, index) => {
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

  return (
    <div className="grid max-lg:grid-cols-1 lg:grid-cols-[11fr_1fr] bg-gradient-to-b from-[#422a4c] from-10% via-[#162045] via-[40%] to-[#0b1023] to-[90%]">
      {/* MAIN CONTENT  */}
      <div className="mx-2 sm:mx-4 flex flex-col gap-6">
        {/* Category and search bar  */}
        <div className="bg-[#1b1d2c] rounded-3xl text-[#8c97ad] flex items-center justify-center gap-2 max-md:flex-wrap">
          <div>
            <CustomDropdown
              width={250}
              icon={<GridViewRoundedIcon />}
              label="View All Games"
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
          <div className="w-full p-2">
            <Search>
              <StyledInputBase
                placeholder="Find your games..."
                inputProps={{ "aria-label": "search" }}
              />
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>
          </div>
        </div>

        {/* banner image */}
        <div className="w-full bg-[url('/src/assets/banner.png')]  bg-cover bg-top rounded-3xl">
          {/* Overlay effect with background image */}
          <div className="flex items-center justify-between max-sm:justify-center max-sm:flex-wrap py-4 px-6 rounded-3xl gap-4">
            {/* Main Text  */}
            <div className="w-72 text-white flex flex-col gap-2 justify-between">
              <p className="md:text-2xl lg:text-3xl font-bold uppercase">
                Leading Marketplace For{" "}
                <InsertLinkRoundedIcon
                  className="-rotate-45"
                  fontSize="large"
                />{" "}
                Gamers
              </p>

              <Link to="/items-and-skins">
                <CustomButton
                  startIcon={<AvatarIcon size="60px" image={ControllerImage} />}
                  className="text-left backdrop-blur-sm w-full"
                  sx={{ backgroundColor: "rgb(0 0 0 / 0.3)" }}
                  endIcon={<ArrowForwardIosIcon />}
                >
                  Start Trading
                </CustomButton>
              </Link>
            </div>

            {/* Card  */}
            <div className="w-72 flex justify-end max-sm:justify-center">
              <FeatureCard />
            </div>
          </div>
        </div>

        {/* Top selling Marketplace */}
        <div className="w-full bg-[#1b1d2c] rounded-3xl text-[#8c97ad] p-6">
          {/* Heading  */}
          <div className="flex justify-between">
            <h1 className="uppercase text-white font-semibold tracking-wide max-md:text-sm">
              Top selling Gamer Marketplaces
            </h1>
            <button className="uppercase text-[#1da6ee] text-sm  max-sm:text-xs">
              View All
            </button>
          </div>

          {/* dropdowns  */}
          <div className="mt-4 flex items-center justify-between flex-wrap max-md:justify-center gap-2">
            <div>
              <CustomDropdown
                width={250}
                label="Select Server"
                sx={{
                  borderRadius: "20px",
                }}
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-sm">
                Quantity:
                <CustomDropdown
                  width={100}
                  label="100 M"
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
              <div className="flex items-center gap-1 text-sm">
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
          </div>

          {/* Table  */}
          <div className="mt-4">
            <Table />
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR  */}
      <div className="bg-[#1b1d2c] rounded-3xl p-2 flex flex-col gap-4 h-fit">
        {/* Profile Panel */}
        <ProfilePanel />

        {/* Latest Guides Panel */}
        <div className="rounded-2xl flex flex-col gap-1">
          <div className="text-sm flex items-center gap-2  mb-1 text-white">
            Latest Guides
          </div>
          <div className={`${loadingLatestGuides ? "h-[40vh]" : ""}`}>
            {renderedGuides}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
