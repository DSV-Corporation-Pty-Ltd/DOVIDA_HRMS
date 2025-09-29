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

// Dummy Data
const roleClassificationData = [
  { type: "Casual", Male: 20, Female: 15, Other: 2 },
  { type: "Fixed term part time", Male: 18, Female: 22, Other: 1 },
  { type: "Part time", Male: 25, Female: 30, Other: 3 },
  { type: "Fixed term full time", Male: 35, Female: 28, Other: 2 },
  { type: "Full time", Male: 50, Female: 40, Other: 5 },
];

const GenderSplitRoleClassificationChart = () => {
  return (
    <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md flex flex-col text-gray-900 dark:text-gray-100">
      {/* Heading */}
      <h3 className="text-lg font-bold mb-1">
        Gender Split – Role Classification
      </h3>

      {/* Subtext */}
      <p className="text-xs mb-4 text-gray-600 dark:text-gray-400">
        Employee distribution by employment type & gender
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6 text-sm">
        {[
          "Employees Entity",
          "Designation Name",
          "Department Name",
          "Location Name",
          "Employee Status",
          "Profile",
        ].map((label, i) => (
          <select
            key={i}
            className="bg-transparent border px-3 py-1 rounded text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          >
            <option className="text-gray-900 dark:text-gray-100">{label}</option>
          </select>
        ))}
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={roleClassificationData}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#E5E7EB"
            className="dark:stroke-gray-700"
          />
          <XAxis
            dataKey="type"
            tick={{ fill: "currentColor" }}
            axisLine={{ stroke: "currentColor" }}
          />
          <YAxis
            tick={{ fill: "currentColor" }}
            axisLine={{ stroke: "currentColor" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid #E5E7EB",
              borderRadius: "6px",
            }}
            itemStyle={{ color: "black" }}
            labelStyle={{ color: "black" }}
          />
          <Legend
            formatter={(value) => (
              <span className="text-gray-900 dark:text-gray-100">{value}</span>
            )}
          />
          <Bar dataKey="Male" fill="#3B82F6" barSize={30} />
          <Bar dataKey="Female" fill="#EC4899" barSize={30} />
          <Bar dataKey="Other" fill="#F59E0B" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GenderSplitRoleClassificationChart;
