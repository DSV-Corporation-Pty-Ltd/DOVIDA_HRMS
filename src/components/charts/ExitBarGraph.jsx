import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Dummy Exit Data for 2025 (Replace with real numbers)
const exitData = [
  { year: 2025, Caregiver: 30, KeyPlayer: 20 },
];

const ExitBarGraph = () => {
  return (
    <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md flex flex-col text-gray-900 dark:text-gray-100">
      {/* Heading */}
      <h3 className="text-lg font-bold mb-1">Number of Exit</h3>
      <p className="text-xs mb-4 text-gray-600 dark:text-gray-400">
        Profile: Keyplayer vs Caregiver (2025)
      </p>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={exitData}
          margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="dark:stroke-gray-700" />
          <XAxis dataKey="year" tick={{ fill: "currentColor" }} />
          <YAxis
            tick={{ fill: "currentColor" }}
            label={{
              value: "Count",
              angle: -90,
              position: "insideLeft",
              fill: "currentColor",
            }}
          />
          <Tooltip
            formatter={(value, name) => [`${value} Exits`, name]}
            contentStyle={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid #E5E7EB",
              borderRadius: "6px",
            }}
          />
          <Legend
            formatter={(value) => (
              <span className="text-gray-900 dark:text-gray-100 text-sm">{value}</span>
            )}
          />

          {/* Stacked Single Bar */}
          <Bar dataKey="Caregiver" name="Caregiver" stackId="a" fill="#F59E0B" />
          <Bar dataKey="KeyPlayer" name="Key Player" stackId="a" fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExitBarGraph;
