import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Label,
  Tooltip,
} from "recharts";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const outerData = [
  { name: "Sent", value: 60 },
  { name: "Unused", value: 40 },
];
const innerData = [
  { name: "Receive", value: 40 },
  { name: "Unused", value: 60 },
];

const COLORS = {
  sent: "#3b82f6", // blue
  receive: "#10b981", // green
  gray: "#e5e7eb", // background
};

export default function EmailSentCard() {
  const [activeLabel, setActiveLabel] = useState({
    name: "Total",
    value: "49.5%",
  });

  return (
    <div className="bg-light-bg dark:bg-dark-bg w-full max-w-md rounded-lg border p-6 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h2 className="text-dark-tx dark:text-light-tx text-lg font-semibold">
            Email Sent
          </h2>
          <p className="text-sm text-gray-500">
            Detailed data of your email inbox
          </p>
        </div>
        <button className="flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
          Monthly
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            {/* <Tooltip /> */}

            {/* Outer Ring (Sent) */}
            <Pie
              data={outerData}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              innerRadius="72%"
              outerRadius="88%"
              stroke="none"
              onMouseEnter={(data, index) =>
                setActiveLabel({ name: data.name, value: `${data.value}%` })
              }
              onMouseLeave={() =>
                setActiveLabel({ name: "Total", value: "49.5%" })
              }
            >
              {outerData.map((entry, index) => (
                <Cell
                  key={`outer-${index}`}
                  fill={index === 0 ? COLORS.sent : COLORS.gray}
                  className="transition-all duration-300 hover:opacity-90"
                />
              ))}
            </Pie>

            {/* Inner Ring (Receive) */}
            <Pie
              data={innerData}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              innerRadius="55%"
              outerRadius="68%" // now there's a visible gap between rings
              stroke="none"
              onMouseEnter={(data, index) =>
                setActiveLabel({ name: data.name, value: `${data.value}%` })
              }
              onMouseLeave={() =>
                setActiveLabel({ name: "Total", value: "49.5%" })
              }
            >
              {innerData.map((entry, index) => (
                <Cell
                  key={`inner-${index}`}
                  fill={index === 0 ? COLORS.receive : COLORS.gray}
                  className="transition-all duration-300 hover:opacity-90"
                />
              ))}
              <Label
                dy={+3}
                value={activeLabel.name}
                position="centerTop"
                className="fill-gray-700 text-sm transition-all duration-300"
              />
              <Label
                dy={-2}
                value={activeLabel.value}
                position="centerBottom"
                className="fill-gray-800 text-lg font-semibold transition-all duration-300"
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-4 flex justify-center gap-6 text-sm">
        <div className="flex items-center gap-1">
          <span className="inline-block h-3 w-3 rounded-full bg-blue-600"></span>
          Sent
        </div>
        <div className="flex items-center gap-1">
          <span className="inline-block h-3 w-3 rounded-full bg-green-500"></span>
          Receive
        </div>
      </div>
    </div>
  );
}
