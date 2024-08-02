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

  const CustomButton = styled(Button)(({ theme }) => ({
    borderRadius: "200px",
    fontSize: "1.2rem",
    opacity: 0.8,
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  }));

  return (
    <>
      <div className="bg-[#1b1d2c] rounded-[26px] text-[#8c97ad] flex gap-1">
        <CustomDropdown
          width={250}
          icon={<GridViewRoundedIcon />}
          label="View All Games"
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
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
      <div className="relative mt-4 w-full">
        {/* Overlay effect with background image  */}
        <div className="p-6 bg-[url('/src/assets/banner.jpg')] bg-cover bg-center rounded-[26px] h-72 opacity-70" />
        <div className="flex items-center justify-between absolute top-0 h-full w-full p-6">
          <div className="w-80 text-white h-full flex flex-col justify-between items-center">
            <div className="lg:text-[2rem] font-bold uppercase">
              Leading Marketplace For{" "}
              <InsertLinkRoundedIcon className="-rotate-45" /> Gamers
            </div>

            <CustomButton
              className="h-full w-full border rounded-full"
              endIcon={<ArrowForwardIosIcon />}
            >
              Start Trading
            </CustomButton>
          </div>
          <div className="w-80 text-white h-full">
            Instant real time order notifications
          </div>
        </div>
      </div>
      <div className="mt-4 w-full h-full bg-[#1b1d2c] rounded-[26px] text-[#8c97ad] p-4">
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
    </>
  );
}

export default HomePage;
