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

const data = [
  { date: "Jan '11", sales: 45, revenue: 10 },
  { date: "02 Jan", sales: 55, revenue: 22 },
  { date: "03 Jan", sales: 40, revenue: 20 },
  { date: "04 Jan", sales: 65, revenue: 10 },
  { date: "05 Jan", sales: 22, revenue: 12 },
  { date: "06 Jan", sales: 44, revenue: 25 },
];

export default function SalesGraphCard() {
  return (
    <div className="bg-light-bg dark:bg-dark-bg w-full max-w-md rounded-lg border p-6 shadow-sm">
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
        <button className="flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
          This Week
          <ChevronDown size={16} />
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
