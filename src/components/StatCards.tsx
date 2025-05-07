import { DollarSign, User, ShoppingCart, Ellipsis } from "lucide-react";
import { useState } from "react";

const cards = [
  {
    icon: (
      <DollarSign
        className="bg-primary text-light-tx rounded-full p-1"
        size={60}
      />
    ),
    value: "4,350",
    label: "Earned this month",
  },
  {
    icon: (
      <User className="bg-primary text-light-tx rounded-full p-1" size={60} />
    ),
    value: "583",
    label: "New Clients",
  },
  {
    icon: (
      <ShoppingCart
        className="bg-primary text-light-tx rounded-full p-1"
        size={60}
      />
    ),
    value: "1289",
    label: "New Sales",
  },
];

function StatCards() {
  const [drop, setDrop] = useState({});

  function handleDrop(id) {
    setDrop((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div className="flex flex-col gap-5">
      {cards.map((data, idx) => (
        <div
          key={idx}
          className="bg-light-bg dark:bg-dark-bg text-dark-tx dark:text-light-tx flex items-center justify-center gap-4 rounded-lg border-2 px-1 py-6 shadow-sm"
        >
          {/* <DollarSign className="bg-primary text-light-tx rounded-full" size={60} /> */}
          {data.icon}
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">${data.value}</h2>
            <p className="text-medium-tx flex flex-col">
              {data.label.split(" ").length > 2 ? (
                <>
                  <p> {data.label.split(" ").slice(0, 2).join(" ")} </p>
                  <span>{data.label.split(" ").pop()} </span>
                </>
              ) : (
                data.label
              )}
            </p>
          </div>
          <button
            onClick={() => handleDrop(idx)}
            className="group relative cursor-pointer hover:opacity-90 active:opacity-80 active:text-shadow-2xs"
          >
            <Ellipsis className="slef-start flex justify-start" />
            {drop[idx] && (
              <div className="absolute top-4 flex flex-col overflow-hidden rounded-lg border-2 bg-white *:w-full *:px-5 *:py-1 *:hover:bg-black/20 dark:bg-black *:hover:dark:bg-white/20">
                <p> Edit</p>
                <p>Delete</p>
              </div>
            )}
          </button>
        </div>
      ))}
    </div>
  );
}

export default StatCards;
