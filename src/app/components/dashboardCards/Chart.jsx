"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", visitors: 56 },
  { month: "Feb", visitors: 48 },
  { month: "Mar", visitors: 70 },
  { month: "Apr", visitors: 75 },
  { month: "May", visitors: 62 },
  { month: "Jun", visitors: 51 },
  { month: "Jul", visitors: 64 },
  { month: "Aug", visitors: 53 },
  { month: "Sep", visitors: 61 },
  { month: "Oct", visitors: 58 },
  { month: "Nov", visitors: 43 },
];

export default function SiteVisitorsChart() {
  return (
    <div className="w-full bg-white rounded-xl p-4 md:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold text-gray-700">
          SITE VISITORS
        </h3>
        <span className="text-xs text-gray-400 cursor-pointer">
          This Year ▾
        </span>
      </div>

      {/* Chart */}
      <div className="w-full h-[260px] md:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="35%">
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#F1F5F9"
            />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#94A3B8" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#94A3B8" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                fontSize: "12px",
              }}
            />
            <Bar
              dataKey="visitors"
              fill="#E11D48"
              radius={[8, 8, 8, 8]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
