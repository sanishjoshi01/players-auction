import cartoonImg from "../assets/cartoon.png";
import DonutSmallRoundedIcon from "@mui/icons-material/DonutSmallRounded";
import ProfilePanel from "../components/ProfilePanel";
import GuidesPanel from "../components/GuidesPanel";

function ItemsAndSkinsPage() {
  const guidesData = [
    {
      category: "Skilling & leveling",
      title: "OSRS Crafting Guide 1-99",
      author: "Mira",
      date: "Oct 13th",
    },
    {
      category: "Skilling & leveling",
      title: "OSRS Crafting Guide 1-99",
      author: "Mira",
      date: "Oct 13th",
    },
    {
      category: "Skilling & leveling",
      title: "OSRS Crafting Guide 1-99",
      author: "Mira",
      date: "Oct 13th",
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
      <div className="w-[80%] rounded-3xl	bg-cyan-500">
        <div className="h-[50vh] bg-green-500"></div>
      </div>

      {/* RIGHT SIDEBAR  */}
      <div className="bg-[#1b1d2c] w-[20%] rounded-3xl p-2 grid gap-4 h-fit">
        {/* Profile Panel */}
        <ProfilePanel />

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

        {/* Guides & Tips Player Panel */}
        <div className="rounded-2xl flex flex-col gap-1">
          <div className="text-sm flex items-center gap-2  mb-1 text-white">
            Guides & Tips Player
          </div>
          {renderedGuides}
        </div>
      </div>
    </div>
  );
}

export default ItemsAndSkinsPage;
