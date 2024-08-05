import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CurrencyBitcoinRoundedIcon from "@mui/icons-material/CurrencyBitcoinRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import OfflineBoltRoundedIcon from "@mui/icons-material/OfflineBoltRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import LinkListItem from "./LinkListItem";

const MainListItems = ({ onlyIcon }) => {
  const currentWindow = window.location.pathname;

  //list of links of sidebar
  const linkList = [
    {
      label: "Home",
      path: "/home",
      icon: (
        <HomeRoundedIcon
          fontSize={`${onlyIcon ? "smaller" : "medium"}`}
          color={currentWindow === "/home" ? "hover" : "secondary"}
        />
      ),
    },
    {
      label: "Currency",
      path: "/currency",
      icon: (
        <CurrencyBitcoinRoundedIcon
          fontSize={`${onlyIcon ? "smaller" : "medium"}`}
          color={currentWindow === "/currency" ? "hover" : "secondary"}
        />
      ),
    },
    {
      label: "Items & Skins",
      path: "/items-and-skins",
      icon: (
        <CategoryRoundedIcon
          fontSize={`${onlyIcon ? "smaller" : "medium"}`}
          color={currentWindow === "/items-and-skins" ? "hover" : "secondary"}
        />
      ),
    },
    {
      label: "Accounts",
      path: "/accounts",
      icon: (
        <PeopleAltRoundedIcon
          fontSize={`${onlyIcon ? "smaller" : "medium"}`}
          color={currentWindow === "/accounts" ? "hover" : "secondary"}
        />
      ),
    },
    {
      label: "Power Leveling",
      path: "/power-leveling",
      icon: (
        <OfflineBoltRoundedIcon
          fontSize={`${onlyIcon ? "smaller" : "medium"}`}
          color={currentWindow === "/power-leveling" ? "hover" : "secondary"}
        />
      ),
    },
    {
      label: "View All Games",
      path: "/games",
      icon: (
        <GridViewRoundedIcon
          fontSize={`${onlyIcon ? "smaller" : "medium"}`}
          color={currentWindow === "/games" ? "hover" : "secondary"}
        />
      ),
    },
  ];

  const renderedLists = linkList.map((data, index) => {
    return (
      <LinkListItem
        key={index}
        path={data.path}
        currentWindow={currentWindow}
        label={onlyIcon ? "" : data.label}
        icon={data.icon}
        onlyIcon={onlyIcon}
      />
    );
  });

  return <>{renderedLists}</>;
};

export default MainListItems;
