import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const data = [
  { date: "Jan '11", sales: 45, revenue: 10 },
  { date: "02 Jan", sales: 55, revenue: 22 },
  { date: "03 Jan", sales: 40, revenue: 20 },
  { date: "04 Jan", sales: 65, revenue: 10 },
  { date: "05 Jan", sales: 22, revenue: 12 },
  { date: "06 Jan", sales: 44, revenue: 25 },
];

export default function SalesGraphCard() {
  const [drop, setDrop] = useState(false);

  return (
    <div className="bg-light-bg dark:bg-dark-bg isolate w-full max-w-md rounded-lg border p-6 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h2 className="dark:text-light-tx text-dark-tx text-lg font-semibold">
            Sales Graph
          </h2>
          <p className="text-sm text-gray-500">
            your total sales data analytics
          </p>
        </div>
        <button
          onClick={() => setDrop(!drop)}
          className="group relative flex cursor-pointer items-center gap-1 rounded-md border px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
        >
          This Week
          <ChevronDown
            size={16}
            className="transition-transform duration-300 group-active:animate-bounce"
          />
          {drop && (
            <div className="absolute top-10 z-10 flex flex-col overflow-hidden rounded-lg border-2 bg-white *:w-full *:px-5 *:py-1 **:cursor-pointer *:hover:bg-black/20 dark:bg-black *:hover:dark:bg-white/20">
              <p> Edit</p>
              <p> Delete </p>
            </div>
          )}
        </button>
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={5}>
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              animationDuration={800}
              dataKey="sales"
              stackId="a"
              fill="#3b82f6"
              name="Sales"
              barSize={20}
            />
            <Bar
              dataKey="revenue"
              stackId="a"
              fill="#10b981"
              name="Revenue"
              radius={[10, 10, 0, 0]}
              barSize={20}
              animationDuration={800}
              animationBegin={600}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
