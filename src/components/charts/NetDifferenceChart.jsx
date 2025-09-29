import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Dummy Data (replace with actual HR data)
const netDifferenceData = [
  { year: "2016", joined: 120, exited: 80, net: 40 },
  { year: "2017", joined: 140, exited: 100, net: 60 },
  { year: "2018", joined: 160, exited: 120, net: 80 },
  { year: "2019", joined: 200, exited: 150, net: 90 },
  { year: "2020", joined: 180, exited: 160, net: 120 },
  { year: "2021", joined: 220, exited: 180, net: 140 },
  { year: "2022", joined: 250, exited: 200, net: 150 },
  { year: "2023", joined: 280, exited: 240, net: 140 },
  { year: "2024", joined: 300, exited: 260, net: 180 },
  { year: "2025", joined: 400, exited: 280, net: 210 },
];

const NetDifferenceChart = () => {
  return (
    <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md flex flex-col text-gray-900 dark:text-gray-100">
      {/* Heading */}
      <h3 className="text-lg font-bold mb-1">Net Difference – Leaving and Joining</h3>

      {/* Subtext */}
      <p className="text-xs mb-4 text-gray-600 dark:text-gray-400">
        Yearly employee joining vs exit with net difference
      </p>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={netDifferenceData}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="dark:stroke-gray-700" />
          <XAxis
            dataKey="year"
            tick={{ fill: "currentColor" }}
            axisLine={{ stroke: "currentColor" }}
          />
          <YAxis
            tick={{ fill: "currentColor" }}
            axisLine={{ stroke: "currentColor" }}
          />
          <Tooltip
            formatter={(value, name) => [`${value} Employees`, name]}
            contentStyle={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid #E5E7EB",
              borderRadius: "6px",
            }}
            labelStyle={{ color: "black" }}
            itemStyle={{ color: "black" }}
          />
          <Legend
            formatter={(value) => (
              <span className="text-gray-900 dark:text-gray-100 text-sm">{value}</span>
            )}
          />

          {/* Single Stacked Bar */}
          <Bar dataKey="joined" name="Employees Joined" stackId="a" fill="#10B981" />
          <Bar dataKey="exited" name="Employees Exited" stackId="a" fill="#EF4444" />

          {/* Line for Net Difference */}
          <Line
            type="monotone"
            dataKey="net"
            name="Net Difference"
            stroke="#6366F1"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NetDifferenceChart;
