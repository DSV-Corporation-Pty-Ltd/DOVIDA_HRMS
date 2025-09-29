import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

// Dummy Data
const resignationReasons = [
  { name: "Other", value: 20, fill: "#9CA3AF" },               // gray
  { name: "Career Change", value: 35, fill: "#3B82F6" },        // blue
  { name: "Relocation", value: 15, fill: "#10B981" },           // green
  { name: "Learning & Development", value: 18, fill: "#F59E0B" }, // amber
  { name: "Health Issue", value: 12, fill: "#EF4444" },         // red
];

const DashboardTurnoverChart = () => {
  return (
    <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md flex flex-col items-center text-gray-900 dark:text-gray-100">
      {/* Heading */}
      <h3 className="text-lg font-bold mb-1 text-center">
        Dashboard – Turnover People Leaving Reason
      </h3>

      {/* Subtext */}
      <p className="text-xs mb-4 text-gray-600 dark:text-gray-400 text-center">
        Distribution of reasons for resignation
      </p>

      {/* Pie Chart */}
      <div className="flex-grow flex items-center justify-center w-full" style={{ height: 350 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={resignationReasons}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={120}
              paddingAngle={4}
              label={{ fill: "currentColor", fontSize: 12 }}
            >
              {resignationReasons.map((d, i) => (
                <Cell key={i} fill={d.fill} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`${value} People`, name]}
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
              layout="horizontal"
              verticalAlign="bottom"
              iconSize={14}
              wrapperStyle={{ marginTop: 20 }}
              formatter={(value) => (
                <span className="text-gray-900 dark:text-gray-100">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardTurnoverChart;
