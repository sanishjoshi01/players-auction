import { useState } from "react";
import AvatarIcon from "../components/AvatarIcon";
import NotificationImage from "../assets/notification.png";
import ShieldImage from "../assets/shield.png";
import SupportImage from "../assets/support.jpg";
import GraphImage from "../assets/graph.png";
import ComputerImage from "../assets/computer.png";

function FeatureCard() {
  const featuresData = [
    {
      image: NotificationImage,
      feature: "Instant, real time order notifications",
    },
    { image: ShieldImage, feature: "Secure Transactions" },
    { image: SupportImage, feature: "24/7 Customer Support" },
    { image: GraphImage, feature: "Detailed Player Stats" },
    { image: ComputerImage, feature: "Easy-to-Use Interface" },
  ];

  const [index, setIndex] = useState(0);

  const handleClick = (i) => {
    setIndex(i);
  };

  const renderedDotBtns = featuresData.map((_, idx) => {
    return (
      <div
        key={idx}
        className={`w-2 h-2 rounded-full cursor-pointer ${
          index === idx ? "bg-blue-500 scale-150" : " bg-white"
        }`}
        onClick={() => handleClick(idx)}
      ></div>
    );
  });

  return (
    <div className="w-36 flex flex-col items-center gap-4 backdrop-blur-sm bg-black/40 p-4 rounded-3xl">
      <AvatarIcon size="64px" image={featuresData[index].image} />
      <p className="text-white flex items-center justify-center text-center h-20">
        {featuresData[index].feature}
      </p>
      <div className="flex items-center justify-around w-full">
        {renderedDotBtns}
      </div>
    </div>
  );
}

export default FeatureCard;
