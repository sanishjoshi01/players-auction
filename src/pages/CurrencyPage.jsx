import GuidesPanel from "../components/GuidesPanel";

function CurrencyPage() {
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
      author: "Andrea",
      date: "Oct 13th",
    },
    {
      category: "Skilling & leveling",
      title: "OSRS Crafting Guide 1-99",
      author: "Tinan",
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

  return <>{renderedGuides}</>;
}

export default CurrencyPage;
