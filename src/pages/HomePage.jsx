// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
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
import CharacterImage from "../assets/character.png";
import ProfilePanel from "../components/ProfilePanel";
import GuidesPanel from "../components/GuidesPanel";

function HomePage() {
  //SEARCH
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    display: "flex",
    overflowX: "hidden",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    // "&:hover": {
    //   backgroundColor: alpha(theme.palette.common.white, 0.25),
    // },
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
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingRight: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "100ch",
      },
    },
  }));

  const CustomButton = styled(Button)(() => ({
    borderRadius: "200px",
    fontSize: "1rem",
    paddingBlock: "16px",
    paddingInline: "12px",
    color: "white",
  }));

  const guidesData = [
    {
      category: "Skilling & leveling",
      title: "OSRS Crafting Guide 1-99",
      author: "Mina",
      date: "Oct 3rd",
    },
    {
      category: "Tips & Tricks",
      title: "OSRS Crafting Guide 1-99",
      author: "Dillan",
      date: "Oct 2nd",
    },
    {
      category: "Tips & Tricks",
      title: "Monster Hunter Now Referral Codes Guide",
      author: "Andrea",
      date: "Sept 21st",
    },
    {
      category: "Skilling & Leveling",
      title: "OSRS Crafting Guide 1-99",
      author: "Mina",
      date: "Sept 26th",
    },
    {
      category: "GTA V",
      title: "Fans are now looking to the moon for the latest update",
      author: "Andrea Tan",
      date: "Sept 27th",
    },
    {
      category: "FIFA",
      title:
        "EA delists FIFA titles from all digital storefronts excluding this",
      author: "Mina",
      date: "Sept 14th",
    },
  ];

  const renderedGuides = guidesData.map((data, index) => {
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

  return (
    <div className="flex gap-3 w-full">
      {/* MAIN CONTENT  */}
      <div className="w-[80%] flex flex-col gap-6">
        {/* category and search bar  */}
        <div className="bg-[#1b1d2c] rounded-3xl text-[#8c97ad] flex">
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

        {/* banner image */}
        <div className="relative w-full ">
          {/* Overlay effect with background image  */}
          <div className="bg-[url('/src/assets/banner.png')] bg-cover bg-top rounded-3xl h-72 opacity-80" />

          {/* Content inside image  */}
          <div className="flex items-center justify-between absolute top-0 h-full w-full p-6">
            <div className="w-72 text-white h-full flex flex-col justify-between items-start">
              <div className="lg:text-[1.8rem] font-bold uppercase">
                Leading Marketplace For {""}
                <InsertLinkRoundedIcon
                  className="-rotate-45"
                  fontSize="large"
                />{" "}
                Gamers
              </div>

              <CustomButton
                startIcon={<AvatarIcon size="60px" image={ControllerImage} />}
                className="text-left backdrop-blur-sm w-full"
                sx={{ backgroundColor: "rgb(0 0 0 / 0.3)" }}
                endIcon={<ArrowForwardIosIcon />}
              >
                <p>Start Trading</p>
              </CustomButton>
            </div>

            <div className="w-1/4 h-full relative">
              <img
                src={CharacterImage}
                alt="character"
                className="absolute bottom-0"
              />
            </div>

            <FeatureCard />
          </div>
        </div>

        {/* Top selling Marketplace */}
        <div className="w-full bg-[#1b1d2c] rounded-3xl text-[#8c97ad] p-6">
          <div className="flex justify-between">
            <h1 className="uppercase text-white font-bold">
              Top selling Gamer Marketplaces
            </h1>
            <button className="uppercase text-[#1da6ee]">View All</button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <CustomDropdown width={250} label="Select Server" />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                Quantity:
                <CustomDropdown width={100} label="100 M" />
              </div>
              <div className="flex items-center gap-1">
                Sort by:
                <CustomDropdown width={100} label="Rating" />
              </div>
            </div>
          </div>{" "}
          <div className="mt-4">
            <Table />
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR  */}
      <div className="bg-[#1b1d2c] w-[20%] rounded-3xl p-2 flex flex-col gap-4 h-fit">
        {/* Profile Panel */}
        <ProfilePanel />

        {/* Latest Guides Panel */}
        <div className="rounded-2xl flex flex-col gap-1">
          <div className="text-sm flex items-center gap-2  mb-1 text-white">
            Latest Guides
          </div>
          {renderedGuides}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
