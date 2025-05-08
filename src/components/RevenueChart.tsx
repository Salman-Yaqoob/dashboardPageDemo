import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";

const data = [
  { name: "Sep", sales: 20, revenue: 30 },
  { name: "Oct", sales: 12, revenue: 25 },
  { name: "Nov", sales: 25, revenue: 38 },
  { name: "Dec", sales: 26, revenue: 35 },
  { name: "Jan", sales: 18, revenue: 47 },
  { name: "Feb", sales: 32, revenue: 60 },
  { name: "Mar", sales: 40, revenue: 55 },
  { name: "Apr", sales: 28, revenue: 53 },
  { name: "May", sales: 42, revenue: 48 },
  { name: "Jun", sales: 29, revenue: 40 },
  { name: "Jul", sales: 35, revenue: 44 },
  { name: "Aug", sales: 45, revenue: 50 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="rounded-md border bg-white p-2 text-sm text-gray-700 shadow-md dark:bg-slate-800 dark:text-zinc-200">
        <p className="font-semibold">{label}</p>
        {payload.map((entry, i) => (
          <p key={i}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function RevenueChart() {
  return (
    <div className="dark:bg-dark-bg dark:text-light-tx rounded-lg border-2 p-5 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <p className="text-2xl font-bold">$35,8K</p>
          <p className="text-sm text-[var(--color-medium-tx)] dark:text-zinc-400">
            Overall Revenue
          </p>
        </div>
        <button className="flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm text-gray-700 dark:border-zinc-700 dark:text-zinc-200">
          Monthly <ChevronDown size={16} />
        </button>
      </div>

      {/* Line Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--color-slate-950)"
              strokeOpacity={0.3}
            />
            <XAxis dataKey="name" stroke="var(--color-medium-tx)" />
            <YAxis stroke="var(--color-medium-tx)" />
            <Tooltip content={<CustomTooltip />} />
            <Line
              animationDuration={1000}
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-lime-700)"
              strokeWidth={4}
              dot={true}
            />
            <Line
              animationDuration={1000}
              type="monotone"
              dataKey="sales"
              stroke="var(--color-primary)"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
