function UserInfoMenu() {
  return (
    <div className="flex justify-center text-white w-full lg:w-[70%] mx-auto">
      <div className="bg-[#222938] flex max-sm:flex-wrap  items-center justify-evenly gap-2 lg:rounded-bl-3xl lg:rounded-br-3xl w-full">
        <div className="flex items-center flex-wrap justify-center gap-1 text-center text-xs p-4 border-b-2 border-cyan-500">
          <p>Item</p>
          <p className="bg-cyan-400 py-[0.225rem] px-1 rounded-lg">670</p>
        </div>
        <div className="flex items-center flex-wrap justify-center gap-1 text-center text-xs p-4">
          <p>Accounts</p>
          <p className="bg-[#3a4b63] py-[0.225rem] px-1 rounded-lg">73</p>
        </div>
        <div className="flex items-center flex-wrap justify-center gap-1 text-center text-xs p-4">
          <p>Power leveling</p>
          <p className="bg-[#3a4b63] py-[0.225rem] px-1 rounded-lg">467</p>
        </div>
        <div className="flex items-center flex-wrap justify-center gap-1 text-center text-xs p-4">
          <p>Feedback</p>
          <p className="bg-[#3a4b63] py-[0.225rem] px-1 rounded-lg">10,979</p>
        </div>
      </div>
    </div>
  );
}

export default UserInfoMenu;
