import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import AvatarIcon from "../components/AvatarIcon";

function GuidesPanel({ category, title, author, date }) {
  return (
    <div className="rounded-2xl flex flex-col gap-2 py-2 px-4 mb-2 text-white bg-gradient-to-t from-[#32323c] from-10% via-[#3e424f] via-50%  to-[#1e2432] to-100%">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase">{category}</p>
        <MoreHorizRoundedIcon fontSize="small" className="cursor-pointer" />
      </div>
      <div>
        <h2 className="text-sm line-clamp-2">{title}</h2>
      </div>
      <div className="flex items-center justify-start gap-1">
        <AvatarIcon size="24px" />
        <p className="uppercase text-xs">By {author}</p>
        <p className="uppercase text-xs">{date}</p>
      </div>
    </div>
  );
}

export default GuidesPanel;
