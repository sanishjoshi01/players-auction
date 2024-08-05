import MainListItems from "./MainListItems";

function MenuBar() {
  return (
    <div className="fixed bottom-0 z-50 flex items-center justify-evenly bg-[#20364b] w-full p-2 rounded-3xl">
      <MainListItems onlyIcon={true} className="w-full" />
    </div>
  );
}

export default MenuBar;
