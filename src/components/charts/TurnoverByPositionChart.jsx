import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

// Dummy Data (replace with actual resignation counts)
const turnoverByPositionData = [
  { name: "Senior Payroll Partner", value: 10, fill: "#6366F1" }, // indigo
  { name: "Quality Compliance Officer", value: 8, fill: "#F59E0B" }, // amber
  { name: "General Manager", value: 6, fill: "#10B981" }, // green
  { name: "Community Engagement Officer", value: 12, fill: "#EF4444" }, // red
  { name: "Client Service Coordinator", value: 14, fill: "#3B82F6" }, // blue
  { name: "Client Experience Manager", value: 7, fill: "#EC4899" }, // pink
  { name: "Caregiver", value: 25, fill: "#8B5CF6" }, // violet
  { name: "Care Manager", value: 10, fill: "#14B8A6" }, // teal
  { name: "Academy Trainer", value: 8, fill: "#F97316" }, // orange
];

const TurnoverByPositionChart = () => {
  return (
    <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md flex flex-col items-center text-gray-900 dark:text-gray-100">
      {/* Heading */}
      <h3 className="text-lg font-bold mb-1 text-center">Turnover by Position</h3>

      {/* Subtext */}
      <p className="text-xs mb-4 text-gray-600 dark:text-gray-400 text-center">
        Percentage of turnover across different job positions
      </p>

      {/* Pie Chart */}
      <div className="w-full flex justify-center items-center" style={{ height: 390 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={turnoverByPositionData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              labelLine={true}
            >
              {turnoverByPositionData.map((d, i) => (
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
              layout="vertical"
              verticalAlign="middle"
              align="right"
              iconSize={14}
              formatter={(value) => (
                <span className="text-gray-900 dark:text-gray-100 text-sm">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TurnoverByPositionChart;
